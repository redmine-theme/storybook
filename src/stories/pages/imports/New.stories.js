import html from './new.html';

export default {
  title: "Pages/Imports/New",
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      `<div class="controller-imports action-new avatars-on">${Story()}</div>`
    ),
  ],
};

export const New = () => html;
