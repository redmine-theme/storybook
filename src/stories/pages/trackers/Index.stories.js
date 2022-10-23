import html from './index.html';

export default {
  title: "Pages/Trackers/Index",
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      `<div class="controller-trackers action-index avatars-on">${Story()}</div>`
    ),
  ],
};

export const Index = () => html;
