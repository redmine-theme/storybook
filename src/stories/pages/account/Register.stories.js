import html from "./register.html";

export default {
  title: "Pages/Account/Register",
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      `<div class="controller-account action-register avatars-on">${Story()}</div>`
    ),
  ],
};

export const Register = () => html;
