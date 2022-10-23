import html from "./index.html";

export default {
  title: "Pages/News/Index",
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      `<div class="controller-news action-index avatars-on">${Story()}</div>`
    ),
  ],
};

export const Index = () => html;
