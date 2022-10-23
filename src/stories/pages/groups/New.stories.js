import html from './new.html';

export default {
  title: "Pages/Groups/New",
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      `<div class="controller-groups action-new avatars-on">${Story()}</div>`
    ),
  ],
};

export const New = () => html;
