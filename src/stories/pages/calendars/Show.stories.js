import html from "./show.html";

export default {
  title: "Pages/Calendars/Show",
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      `<div class="controller-calendars action-show avatars-on">${Story()}</div>`
    ),
  ],
};

export const Show = () => html;
