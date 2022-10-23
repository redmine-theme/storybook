import html from './edit.html';

export default {
  title: "Pages/Boards/Edit",
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      `<div class="controller-boards action-edit avatars-on">${Story()}</div>`
    ),
  ],
};

export const Edit = () => html;
