import html from './rename.html';

export default {
  title: "Pages/Wiki/Rename",
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      `<div class="controller-wiki action-rename avatars-on">${Story()}</div>`
    ),
  ],
};

export const Rename = () => html;
