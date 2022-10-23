import html from "./projects.html";

export default {
  title: "Pages/Admin/Plugins",
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      `<div class="controller-admin action-plugins avatars-on">${Story()}</div>`
    ),
  ],
};

export const Plugins = () => html;
