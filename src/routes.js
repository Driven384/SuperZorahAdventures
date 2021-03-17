import Home from "./components/Home.vue";
import TheWhy from "./components/TheWhy.vue";
import Albums from "./components/Albums.vue";
import Adventures from "./components/Adventures.vue";
import Adventure from "./components/Adventure.vue";

export default [
  { path: "/", component: Home },
  { path: "/home", component: Home },
  { path: "/thewhy", component: TheWhy },
  { path: "/albums", component: Albums },
  { path: "/adventures", component: Adventures },
  { path: "/adventures/:id", component: Adventure }
];
