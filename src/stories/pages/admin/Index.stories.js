import html from "./index.html";

export default {
  title: "Pages/Admin/Index",
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      `<div class="controller-admin action-index avatars-on">${Story()}</div>`
    ),
  ],
};

export const Index = () => html;
