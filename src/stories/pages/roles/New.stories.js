import html from './new.html';

export default {
  title: "Pages/Roles/New",
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      `<div class="controller-roles action-new avatars-on">${Story()}</div>`
    ),
  ],
};

export const New = () => html;
