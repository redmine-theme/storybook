import html from './issue_report_details.html';

import '@/javascripts/tribute-5.1.3.min.js'
import '@/javascripts/tablesort-5.2.1.min.js'
import '@/javascripts/tablesort-5.2.1.number.min.js'

import '/javascripts/chart.min.js'

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
