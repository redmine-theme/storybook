import html from './new.html';

export default {
  title: "Pages/Members/New",
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      `<div class="controller-members action-new avatars-on">${Story()}</div>`
    ),
  ],
};

export const New = () => html;
