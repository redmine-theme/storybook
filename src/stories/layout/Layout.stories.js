import layout from './layout.html';
import layout2 from './layout2.html';

export default {
  title: "Layout/Layout",
  parameters: {
    layout: 'fullscreen'
  },
};

export const Layout = () => layout;
export const LayoutWithMainMenu = () => layout2;
