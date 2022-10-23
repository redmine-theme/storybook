import html from './wiki-edit.html';

// import '../../../public/javascripts/jstoolbar/jstoolbar';
// import '../../../public/javascripts/jstoolbar/common_mark';
// import '../../../public/jstoolbar/lang/jstoolbar-ja';
//
// window.wikiImageMimeTypes = ["image/gif","image/jpeg","image/png","image/tiff","image/x-ms-bmp"];
// window.userHlLanguages = ["c","cpp","csharp","css","diff","go","groovy","html","java","javascript","objc","perl","php","python","r","ruby","sass","scala","shell","sql","swift","xml","yaml"];

import '../../../public/stylesheets/jstoolbar.css';

export default {
  title: "Components/WikiEdit",
  decorators: [
    (Story) => (
      `<div id="content">${Story()}</div>`
    ),
  ],
};

export const WikiEdit = () => html;
