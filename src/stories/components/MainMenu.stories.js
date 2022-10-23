import html from './main_menu.html';

export default {
  title: "Components/MainMenu",
  decorators: [
    (Story) => (
      `<div id="header">${Story()}</div>`
    ),
  ],
};

export const MainMenu = () => html;
