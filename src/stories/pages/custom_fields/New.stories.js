import html from './new.html';
import htmlTickets from './new_tickets.html';

export default {
  title: "Pages/CustomFields/New",
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      `<div class="controller-custom_fields action-new avatars-on">${Story()}</div>`
    ),
  ],
};

export const New = () => html;
export const NewTickets = () => htmlTickets;
