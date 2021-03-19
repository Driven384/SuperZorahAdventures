import Home from "./pages/Home.vue";
import TheWhy from "./pages/TheWhy.vue";
import Albums from "./pages/Albums.vue";
import Adventures from "./pages/Adventures.vue";

export default [
  { path: "/", component: Home },
  { path: "/home", component: Home },
  { path: "/thewhy", component: TheWhy },
  { path: "/albums", component: Albums },
  { path: "/adventures", component: Adventures }
];
