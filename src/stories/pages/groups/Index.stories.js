import html from "./index.html";

export default {
  title: "Pages/Groups/Index",
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      `<div class="controller-groups action-index avatars-on">${Story()}</div>`
    ),
  ],
};

export const Index = () => html;
