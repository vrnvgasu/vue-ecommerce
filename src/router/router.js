import Vue from 'vue';
import Router from 'vue-router';
import vCatalog from '../components/v-catalog';
import vCart from '../components/v-cart';

Vue.use(Router);

let router = new Router({
  routes: [
    {
      path: '/',  // корневой домен
      name: 'catalog',
      component: vCatalog, // какой компонент запускаем по этому пути
    },
    {
      path: '/cart',
      name: 'cart',
      component: vCart,
      props: true,    // если нужно прокидывать данные дочернему компоненту
    }
  ]
});

export default router;