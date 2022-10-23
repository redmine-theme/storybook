import html from './new.html';

export default {
  title: "Pages/Timelog/New",
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      `<div class="controller-timelog action-new avatars-on">${Story()}</div>`
    ),
  ],
};

export const New = () => html;
