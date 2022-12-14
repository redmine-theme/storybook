import html from './show.html';

export default {
  title: "Pages/Projects/Show",
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      `<div class="controller-projects action-show avatars-on">${Story()}</div>`
    ),
  ],
};

export const Show = () => html;
