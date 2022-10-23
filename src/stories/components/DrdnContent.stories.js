import html from './drdn-content.html';

export default {
  title: "Components/DrdnContent",
  decorators: [
    (Story) => (
      `<div class="drdn expanded" style="max-width: 300px; margin: 0 auto;">${Story()}</div>`
    ),
  ],
};

export const DrdnContent = () => html;
