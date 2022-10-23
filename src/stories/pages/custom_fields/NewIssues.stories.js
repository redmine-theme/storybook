import html from './new_issues.html';

export default {
  title: "Pages/CustomFields/NewIssues",
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      `<div class="controller-custom_fields action-new avatars-on">${Story()}</div>`
    ),
  ],
};

export const NewIssues = () => html;
