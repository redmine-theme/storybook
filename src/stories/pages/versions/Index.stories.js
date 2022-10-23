import html from "./index.html";

export default {
  title: "Pages/Versions/Index",
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      `<div class="controller-versions action-index avatars-on">${Story()}</div>`
    ),
  ],
};

export const Index = () => html;
