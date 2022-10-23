import html from './permissions.html';

export default {
  title: "Pages/Roles/Permissions",
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      `<div class="controller-roles action-permissions avatars-on">${Story()}</div>`
    ),
  ],
};

export const Permissions = () => html;
