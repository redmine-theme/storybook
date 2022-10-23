import html from './fields.html';

export default {
  title: "Pages/Trackers/Fields",
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      `<div class="controller-trackers action-fields avatars-on">${Story()}</div>`
    ),
  ],
};

export const Fields = () => html;
