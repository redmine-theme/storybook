import html from './page.html';

export default {
  title: "Pages/My/Page",
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      `<div class="controller-my action-page avatars-on">${Story()}</div>`
    ),
  ],
};

export const Page = () => html;
