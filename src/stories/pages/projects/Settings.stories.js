import html from './settings.html';

export default {
  title: "Pages/Projects/Settings",
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      `<div class="controller-projects action-settings avatars-on">${Story()}</div>`
    ),
  ],
};

export const Settings = () => html;
