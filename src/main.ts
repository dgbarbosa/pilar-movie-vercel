import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import "./style.css";
import App from "./App.vue";
import { Home, Search, Movie } from "./views";
import { OhVueIcon, addIcons } from "oh-vue-icons";

import * as MdIcons from "oh-vue-icons/icons/md";
import * as PrIcons from "oh-vue-icons/icons/pr";
import { createPinia } from "pinia";
const Md = Object.values({ ...MdIcons });
const Pr = Object.values({ ...PrIcons });
addIcons(...Md, ...Pr);

const routes = [
  { name: "home", path: "", component: Home },
  { name: "search", path: "/search", component: Search },
  { name: "movie", path: "/movie/:id", component: Movie },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

const pinia = createPinia();

const app = createApp(App);
app.component("v-icon", OhVueIcon);
app.use(pinia);
app.use(router);
app.mount("#app");
