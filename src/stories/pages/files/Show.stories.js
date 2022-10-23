import html from './show.html';

export default {
  title: "Pages/Files/Show",
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      `<div class="controller-files action-show avatars-on">${Story()}</div>`
    ),
  ],
};

export const Show = () => html;
