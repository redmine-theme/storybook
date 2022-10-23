import html from './drdn-content.html';

export default {
  title: "Components/DrdnContent",
  decorators: [
    (Story) => (
      `<div class="drdn expanded">${Story()}</div>`
    ),
  ],
};

export const DrdnContent = () => html;
