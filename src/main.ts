import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import "./assets/main.css";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import { LicenseManager } from "ag-grid-enterprise";


const AG_GRID_KEY = "";
LicenseManager.setLicenseKey(AG_GRID_KEY);
(window as any).global = window;

const app = createApp(App).mount("#app");
// app.use(ElementPlus);

/**
 * Import the element-plus icons
 */
// for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
//   app.component(key, component);
// }
