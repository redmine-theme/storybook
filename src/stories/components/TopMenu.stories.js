import html from './top-menu.html';
import html2 from './top-menu_logout.html';

export default {
  title: "Components/TopMenu",
  decorators: [
    (Story) => (
      `<div id="content">${Story()}</div>`
    ),
  ],
};

export const TopMenu = () => html;
export const TopMenuLogout = () => html2;
