import html from "./index.html";

export default {
  title: "Pages/Documents/Index",
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      `<div class="controller-documents action-index avatars-on">${Story()}</div>`
    ),
  ],
};

export const Index = () => html;
