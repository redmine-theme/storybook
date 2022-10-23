import html from "./permissions.html";

export default {
  title: "Pages/Workflows/Copy",
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      `<div class="controller-workflows action-copy avatars-on">${Story()}</div>`
    ),
  ],
};

export const Copy = () => html;
