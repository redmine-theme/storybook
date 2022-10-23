import html from './new.html';

export default {
  title: "Pages/IssueCategories/New",
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      `<div class="controller-issue_categories action-new avatars-on">${Story()}</div>`
    ),
  ],
};

export const New = () => html;
