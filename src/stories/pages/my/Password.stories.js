import html from './password.html';

export default {
  title: "Pages/My/Password",
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      `<div class="controller-my action-password avatars-on">${Story()}</div>`
    ),
  ],
};

export const Password = () => html;
