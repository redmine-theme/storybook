import html from "./index.html";

export default {
  title: "Pages/Boards/Index",
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      `<div class="controller-boards action-index avatars-on">${Story()}</div>`
    ),
  ],
};

export const Index = () => html;
