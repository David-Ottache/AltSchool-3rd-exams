import { createRouter, createWebHistory } from "vue-router";
import CounterPage from "./components/CounterPage";
import NotFound from "./components/NotFound";

const routes = [
 

    {
      path: "/counter",
      name: 'counter',
      component: CounterPage,
    },
    {
      path: "/:catchAll(.*)",
      name: 'NotFound',
      component: NotFound,
    },
  ];
  
  const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router;
  