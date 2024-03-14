import path from 'path';

export default {
  "stories": [
    "../src/stories"
  ],

  "addons": [
    "@storybook/addon-essentials"
  ],

  "staticDirs": [
    '../public',
    '../src/assets'
  ],

  "framework": {
    name: "@storybook/html-webpack5"
  },

  "webpackFinal": (config) => {

    config.amd = false;

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
  }
}
