import html from "./lost_password.html";

export default {
  title: "Pages/Account/LostPassword",
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      `<div class="controller-account action-lost_password avatars-on">${Story()}</div>`
    ),
  ],
};

export const LostPassword = () => html;
