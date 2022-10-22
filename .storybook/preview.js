import '../src/stylesheets/jquery/jquery-ui-1.13.2.css'
import '../src/stylesheets/application.css'
import '../src/stylesheets/responsive.css'

import '../src/javascripts/jquery-3.6.1-ui-1.13.2-ujs-6.1.7.js'
import '../src/javascripts/application.js'
import '../src/javascripts/responsive.js'

// import '../src/javascripts/context_menu.js'
// import '../src/stylesheets/context_menu.css'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
