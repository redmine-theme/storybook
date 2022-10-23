import layout from './layout.html';
import layoutLogout from './layout_logout.html';

export default {
  title: "Layout/Layout",
  parameters: {
    layout: 'fullscreen'
  },
};

export const Layout = () => layout;
export const LayoutLogout = () => layoutLogout;
