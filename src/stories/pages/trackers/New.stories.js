import html from './new.html';

export default {
  title: "Pages/Trackers/New",
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      `<div class="controller-trackers action-new avatars-on">${Story()}</div>`
    ),
  ],
};

export const New = () => html;
