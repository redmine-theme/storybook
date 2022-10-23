import html from './index.html';

export default {
  title: "Pages/Timelog/Index",
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      `<div class="controller-timelog action-index avatars-on">${Story()}</div>`
    ),
  ],
};

export const IndexStories = () => html;
