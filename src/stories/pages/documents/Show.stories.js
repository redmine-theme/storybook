import html from './show.html';

export default {
  title: "Pages/Documents/Show",
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      `<div class="controller-documents action-show avatars-on">${Story()}</div>`
    ),
  ],
};

export const Show = () => html;
