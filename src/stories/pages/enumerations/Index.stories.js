import html from "./index.html";

export default {
  title: "Pages/Enumerations/Index",
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      `<div class="controller-enumerations action-index avatars-on">${Story()}</div>`
    ),
  ],
};

export const Index = () => html;
