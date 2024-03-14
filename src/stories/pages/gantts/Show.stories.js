import html from "./show.html";
import '@/stylesheets/context_menu.css';

export default {
  title: "Pages/Gantts/Show",
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      `<div class="controller-gantts action-show avatars-on">${Story()}</div>`
    ),
  ],
};

export const Show = () => html;
