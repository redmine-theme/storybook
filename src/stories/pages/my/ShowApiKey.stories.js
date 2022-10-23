import html from './show_api_key.html';

export default {
  title: "Pages/My/ShowApiKey",
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      `<div class="controller-my action-show_api_key avatars-on">${Story()}</div>`
    ),
  ],
};

export const ShowApiKey = () => html;
