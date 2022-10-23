import html from './new.html';

export default {
  title: "Pages/Users/New",
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      `<div class="controller-users action-new avatars-on">${Story()}</div>`
    ),
  ],
};

export const New = () => html;
