export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
    hideNoControlsWarning: true,
  },
  backgrounds: {
    default: 'white',
    values: [
      {
        name: 'white',
        value: 'white',
      },
    ],
  },
  stylesheetToggle: {
    stylesheets: [
      {
        id: 'default',
        title: 'default',
        url: './stylesheets/application.css',
      },
      {
        id: 'alternate',
        title: 'alternate',
        url: './themes/alternate/stylesheets/application.css',
      },
      {
        id: 'classic',
        title: 'classic',
        url: './themes/classic/stylesheets/application.css',
      },
    ],
  },
}
