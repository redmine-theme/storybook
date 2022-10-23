import html from './new.html';

export default {
  title: "Pages/Versions/New",
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      `<div class="controller-versions action-new avatars-on">${Story()}</div>`
    ),
  ],
};

export const New = () => html;
