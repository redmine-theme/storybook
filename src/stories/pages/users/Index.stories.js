import html from './index.html';

export default {
  title: "Pages/Users/Index",
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      `<div class="controller-users action-index avatars-on">${Story()}</div>`
    ),
  ],
};

export const Index = () => html;
