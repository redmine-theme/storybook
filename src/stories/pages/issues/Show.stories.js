import html from './show.html';

export default {
  title: "Pages/Issues/Show",
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      `<div class="controller-issues action-show avatars-on">${Story()}</div>`
    ),
  ],
};

export const Show = () => html;
