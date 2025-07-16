import DefaultTheme from "vitepress/theme";
import "virtual:group-icons.css";
import "./custom.css";
import MyLayout from "./MyLayout.vue";

export default {
  extends: DefaultTheme,
  // override the Layout with a wrapper component that
  // injects the slots
  Layout: MyLayout,
};
