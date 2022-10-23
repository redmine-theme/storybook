import html from './show.html';

export default {
  title: "Pages/Users/Show",
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      `<div class="controller-users action-show avatars-on">${Story()}</div>`
    ),
  ],
};

export const Show = () => html;
