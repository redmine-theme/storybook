import html from './edit.html';

export default {
  title: "Pages/Timelog/Edit",
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      `<div class="controller-timelog action-edit avatars-on">${Story()}</div>`
    ),
  ],
};

export const Edit = () => html;
