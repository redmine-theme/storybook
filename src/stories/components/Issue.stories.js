import html from './issue.html';

export default {
  title: "Components/Issue",
  decorators: [
    (Story) => (
      `<div style="width: 300px; max-width: 100%; margin: 0 auto;">${Story()}</div>`
    ),
  ],
};

export const Issue = () => html;
