import html from "./show.html";

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
