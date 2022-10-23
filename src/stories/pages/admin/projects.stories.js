import html from "./projects.html";

export default {
  title: "Pages/Admin/Projects",
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      `<div class="controller-admin action-projects avatars-on">${Story()}</div>`
    ),
  ],
};

export const Projects = () => html;
