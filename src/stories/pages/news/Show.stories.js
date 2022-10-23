import html from './show.html';

export default {
  title: "Pages/News/Show",
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      `<div class="controller-news action-show avatars-on">${Story()}</div>`
    ),
  ],
};

export const Show = () => html;
