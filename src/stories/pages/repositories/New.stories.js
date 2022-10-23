import html from './new.html';

export default {
  title: "Pages/Repositories/New",
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      `<div class="controller-repositories action-new avatars-on">${Story()}</div>`
    ),
  ],
};

export const New = () => html;
