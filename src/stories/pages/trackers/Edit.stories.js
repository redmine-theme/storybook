import html from './edit.html';

export default {
  title: "Pages/Trackers/Edit",
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      `<div class="controller-trackers action-edit avatars-on">${Story()}</div>`
    ),
  ],
};

export const Edit = () => html;
