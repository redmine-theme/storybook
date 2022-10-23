export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  options: {
    storySort: {
      order: ['Layout', 'Pages', 'Components', '*'],
    },
  },
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
  // stylesheetToggle: {
  //   stylesheets: [
  //     {
  //       id: 'default',
  //       title: 'Default',
  //       url: './stylesheets/application.css',
  //     },
  //     {
  //       id: 'alternate',
  //       title: 'Alternate',
  //       url: './themes/alternate/stylesheets/application.css',
  //     },
  //     {
  //       id: 'classic',
  //       title: 'Classic',
  //       url: './themes/classic/stylesheets/application.css',
  //     },
  //   ],
  // },
}
