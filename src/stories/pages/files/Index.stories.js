import html from "./index.html";

export default {
  title: "Pages/Files/Index",
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      `<div class="controller-files action-index avatars-on">${Story()}</div>`
    ),
  ],
};

export const Index = () => html;
