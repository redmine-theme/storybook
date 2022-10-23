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
}
