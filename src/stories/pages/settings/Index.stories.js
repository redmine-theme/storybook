import html from './index.html';

export default {
  title: "Pages/Settings/Index",
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      `<div class="controller-settings action-index avatars-on">${Story()}</div>`
    ),
  ],
};

export const Index = () => html;
