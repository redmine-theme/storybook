import html from './new.html';

export default {
  title: "Pages/Enumerations/New",
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      `<div class="controller-enumerations action-new avatars-on">${Story()}</div>`
    ),
  ],
};

export const New = () => html;
