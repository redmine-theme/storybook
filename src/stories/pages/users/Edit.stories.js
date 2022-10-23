import html from './edit.html';

export default {
  title: "Pages/Users/Edit",
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      `<div class="controller-users action-edit avatars-on">${Story()}</div>`
    ),
  ],
};

export const Edit = () => html;
