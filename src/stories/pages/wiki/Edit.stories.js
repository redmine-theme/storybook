import html from './edit.html';

export default {
  title: "Pages/Wiki/Edit",
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      `<div class="controller-wiki action-edit avatars-on">${Story()}</div>`
    ),
  ],
};

export const Edit = () => html;
