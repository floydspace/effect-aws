import DefaultTheme from "vitepress/theme";
import "./custom.css";
import MyLayout from "./MyLayout.vue";

export default {
  extends: DefaultTheme,
  // override the Layout with a wrapper component that
  // injects the slots
  Layout: MyLayout,
};
