import html from './new.html';

export default {
  title: "Pages/Boards/New",
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      `<div class="controller-boards action-new avatars-on">${Story()}</div>`
    ),
  ],
};

export const New = () => html;
