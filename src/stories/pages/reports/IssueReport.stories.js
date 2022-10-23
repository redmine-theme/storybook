import html from './issue_report.html';

export default {
  title: "Pages/Reports/IssueReport",
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      `<div class="controller-reports action-issue_report avatars-on">${Story()}</div>`
    ),
  ],
};

export const IssueReport = () => html;
