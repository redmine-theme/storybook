import html from './issue_report_details.html';

import '../../../../public/javascripts/tribute-5.1.3.min.js'
// import '../../../../public/javascripts/tablesort-5.2.1.min.js'
// import '../../../../public/javascripts/tablesort-5.2.1.number.min.js'

import '../../../../public/javascripts/chart.min.js'

export default {
  title: "Pages/Reports/IssueReportDetails",
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      `<div class="controller-reports action-issue_report_details avatars-on">${Story()}</div>`
    ),
  ],
};

export const IssueReportDetails = () => html;
