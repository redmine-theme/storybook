import html from "./edit.html";

export default {
  title: "Pages/Workflows/Edit",
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      `<div class="controller-workflows action-edit avatars-on">${Story()}</div>`
    ),
  ],
};

export const Edit = () => html;
