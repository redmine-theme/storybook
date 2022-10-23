import html from "./login.html";

export default {
  title: "Pages/Account/Login",
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      `<div class="controller-account action-login avatars-on">${Story()}</div>`
    ),
  ],
};

export const Login = () => html;
