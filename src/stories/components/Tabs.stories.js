import html from './tabs.html';

export default {
  title: "Components/Tabs",
  decorators: [
    (Story) => (
      `<div id="content">${Story()}</div>`
    ),
  ],
};

export const Tabs = () => html;
