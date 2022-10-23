import html from './diff.html';

export default {
  title: "Pages/Wiki/Diff",
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      `<div class="controller-wiki action-diff avatars-on">${Story()}</div>`
    ),
  ],
};

export const Diff = () => html;
