import html from "./index.html";

export default {
  title: "Pages/AuthSources/Index",
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      `<div class="controller-auth_sources action-index avatars-on">${Story()}</div>`
    ),
  ],
};

export const Index = () => html;
