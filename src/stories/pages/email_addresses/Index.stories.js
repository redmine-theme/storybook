import html from "./index.html";

export default {
  title: "Pages/EmailAddresses/Index",
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      `<div class="controller-email_addresses action-index avatars-on">${Story()}</div>`
    ),
  ],
};

export const Index = () => html;
