import html from './topics.html';

export default {
  title: "Pages/Boards/Topics",
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      `<div class="controller-boards action-show avatars-on">${Story()}</div>`
    ),
  ],
};

export const Topics = () => html;
