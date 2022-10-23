import html from "./index.html";

export default {
  title: "Pages/Admin/Info",
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      `<div class="controller-admin action-info avatars-on">${Story()}</div>`
    ),
  ],
};

export const Info = () => html;
