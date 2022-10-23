import html from './account.html';

export default {
  title: "Pages/My/Account",
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      `<div class="controller-my action-account avatars-on">${Story()}</div>`
    ),
  ],
};

export const Account = () => html;
