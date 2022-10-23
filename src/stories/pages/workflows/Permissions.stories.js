import html from "./permissions.html";

export default {
  title: "Pages/Workflows/Permissions",
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      `<div class="controller-workflows action-permissions avatars-on">${Story()}</div>`
    ),
  ],
};

export const Permissions = () => html;
