import path from 'path';
import fs from 'fs';

const framework = process.env.BUILDER == 'vite' ? '@storybook/html-vite'
                                                : '@storybook/html-webpack5'

// Add escaping process with reference to vite-plugin-raw(https://github.com/xingw-z/vite-plugin-raw)
function vitePluginHtml() {
  return {
    name: 'vite-plugin-html',
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
      vitePluginHtml()
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
      }
    }
  }
}
