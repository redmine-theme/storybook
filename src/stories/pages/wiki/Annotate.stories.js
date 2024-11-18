import html from './annotate.html';
import '@/stylesheets/scm.css';

export default {
  title: "Pages/Wiki/Annotate",
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      `<div class="controller-wiki action-annotate avatars-on">${Story()}</div>`
    ),
  ],
};

export const Annotate = () => html;
