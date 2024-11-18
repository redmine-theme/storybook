import path from 'path';
import vitePluginHtml from '../src/utils/vite-plugin-html';

const framework = process.env.BUILDER == 'vite' ? '@storybook/html-vite'
                                                : '@storybook/html-webpack5'

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
      },
      base: process.env.BASE_PATH || '/'
    }
  }
}
