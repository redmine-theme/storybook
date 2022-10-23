import '../public/stylesheets/jquery/jquery-ui-1.13.2.css'
import '../public/stylesheets/application.css'
import '../public/stylesheets/responsive.css'

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
}
