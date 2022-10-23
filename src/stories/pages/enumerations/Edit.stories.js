import html from './edit.html';

export default {
  title: "Pages/Enumerations/Edit",
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      `<div class="controller-enumerations action-edit avatars-on">${Story()}</div>`
    ),
  ],
};

export const Edit = () => html;
