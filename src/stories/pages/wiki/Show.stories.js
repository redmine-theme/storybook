import html from './show.html';

export default {
  title: "Pages/Wiki/Show",
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      `<div class="controller-wiki action-show avatars-on">${Story()}</div>`
    ),
  ],
};

export const Show = () => html;
