import html from './new.html';

export default {
  title: "Pages/Projects/New",
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      `<div class="controller-projects action-new avatars-on">${Story()}</div>`
    ),
  ],
};

export const New = () => html;
