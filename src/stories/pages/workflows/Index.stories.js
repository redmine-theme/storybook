import html from "./index.html";

export default {
  title: "Pages/Workflows/Index",
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      `<div class="controller-workflows action-index avatars-on">${Story()}</div>`
    ),
  ],
};

export const Index = () => html;
