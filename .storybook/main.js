import path from 'path';
import fs from 'fs';

const framework = process.env.BUILDER == 'vite' ? '@storybook/html-vite'
                                                : '@storybook/html-webpack5'

// Add escaping process with reference to vite-plugin-raw(https://github.com/xingw-z/vite-plugin-raw)
function vitePluginHtml() {
  return {
    name: 'vite-plugin-html',
    apply: 'serve',
    async transform (_, id) {
      const files = [/\.html$/];
      if (files.find((v) => v.test(id))) {
        const buf = fs.readFileSync(id, 'utf-8');
        return {
          code: `export default ${JSON.stringify(buf)}`
        };
      } else {
        return {};
      }
    }
  }
}

// Add escaping process with reference at build time (https://github.com/vitejs/vite/discussions/12788#discussioncomment-5557866)
function vitePluginHtmlForBuild() {
  const postfix = '?html-import';
  const postfixRegExp = /\?html-import$/;
  return {
    name: 'vite-plugin-html-for-build',
    enforce: 'pre',
    apply: 'build',
    async resolveId (id, importer, options) {
      if (/\.html$/.test(id) && !options.isEntry) {
        const res = await this.resolve(id, importer, {
          skipSelf: true,
          ...options
        });
        if (!res || res.external) {
          return res;
        }
        return res.id + postfix;
      }
    },
    async load(id) {
      if (!id.endsWith(postfix)) {
        return;
      }
      let buf = fs.readFileSync(id.replace(postfixRegExp, ''), 'utf-8');
      if (process.env.BASE_URL) {
        buf = buf.replace(/"\/(attachments|images|javascripts)\//g, `"${process.env.BASE_URL}$1/`);
      }
      return `export default ${JSON.stringify(buf)}`;
    }
  }
}

export default {
  stories: [
    "../src/stories"
  ],

  addons: [
    "@storybook/addon-essentials"
  ],

  staticDirs: [
    '../public',
    '../src/assets'
  ],

  framework: {
    name: framework
  },

  webpackFinal: (config) => {

    config.amd = false;

    // Skip html-loader sources processing
    const htmlLoader = config.module.rules.find(
      (rule) => rule.test?.toString() === "/\\.html$/"
    )
    htmlLoader.use = {
      loader: 'html-loader',
      options: {
        sources: false,
      }
    }
    // Replace absolute paths for GitHub Pages
    if (process.env.BASE_URL) {
      config.module.rules.push({
        test: /.html$/,
        loader: 'string-replace-loader',
        options: {
          search: '"\/(attachments|images|javascripts)\/',
          replace(match, p1, offset, string) {
            return `"${process.env.BASE_URL}${p1}/`;
          },
          flags: 'g'
        },
      });
    }
    return {
      ...config,
      resolve: {
        alias: {
          '@': path.join(__dirname, '../src/assets/')
        },
        roots: [
          path.join(__dirname, '../src/assets/'),
          path.join(__dirname, '../public')
        ]
      }
    }
  },

  viteFinal: async (config) => {

    config.plugins.push(
      vitePluginHtml(),
      vitePluginHtmlForBuild()
    )

    return {
      ...config,
      resolve: {
        alias: {
          '@/': path.join(__dirname, '../src/assets/')
        }
      },
      define: {
        "process.env": {}
      },
      base: process.env.BASE_URL || '/'
    }
  }
}
