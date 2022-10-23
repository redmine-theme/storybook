import html from './edit.html';
import htmlAnonymous from './edit_anonymous.html';

export default {
  title: "Pages/Groups/Edit",
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      `<div class="controller-groups action-edit avatars-on">${Story()}</div>`
    ),
  ],
};

export const Edit = () => html;
export const EditAnonymous = () => htmlAnonymous;
