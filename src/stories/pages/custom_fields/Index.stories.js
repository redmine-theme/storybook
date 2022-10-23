import html from "./index.html";

export default {
  title: "Pages/CustomCields/Index",
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      `<div class="controller-custom_fields action-index avatars-on">${Story()}</div>`
    ),
  ],
};

export const Index = () => html;
