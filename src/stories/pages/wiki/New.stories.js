import html from './new.html';

export default {
  title: "Pages/Wiki/New",
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      `<div class="controller-wiki action-new avatars-on">${Story()}</div>`
    ),
  ],
};

export const New = () => html;
