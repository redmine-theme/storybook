import html from './new.html';

export default {
  title: "Pages/Files/New",
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      `<div class="controller-files action-new avatars-on">${Story()}</div>`
    ),
  ],
};

export const New = () => html;
