import { createApp } from "vue";
import "./assets/tailwind.css";
import App from "./App.vue";
import router from "./router";
import MenuIcon from "vue-material-design-icons/Menu.vue";

const app = createApp(App);
app.component("menu-icon", MenuIcon);
app.use(router);

app.mount("#app");
