import { createRouter, createWebHistory } from 'vue-router';
import Homepage from '@/components/HomePage.vue';
import ShoppingCart from '@/components/ShoppingCart.vue';
import AdminPanel from '@/components/AdminPanel.vue';
import ProfileEdit from '@/components/ProfileEdit.vue';
import UserFavorites from '@/components/UserFavorites.vue';
import Profile from '@/components/Profile.vue';
import RegisterForm from '@/components/RegisterForm.vue';
import LoginForm from '@/components/LoginForm.vue';
import NotFoundComponent from '@/components/NotFoundComponent.vue';
import Logout from '@/components/Logout.vue';

// Определяем маршруты
const routes = [
  { path: '/', component: Homepage },
  { path: '/cart', component: ShoppingCart },
  { path: '/admin', component: AdminPanel, meta: { requiresAuth: true } },
  { path: '/profile', component: Profile, meta: { requiresAuth: true } },
  { path: '/profile/edit', component: ProfileEdit, meta: { requiresAuth: true } },
  { path: '/favorites', component: UserFavorites, meta: { requiresAuth: true } },
  { path: '/register', component: RegisterForm },
  { path: '/login', component: LoginForm },
  { path: '/logout', component: Logout.vue},
  { path: '/:pathMatch(.*)*', component: NotFoundComponent }, // Маршрут для страницы 404
];

// Создаем инстанс роутера
const router = createRouter({
  history: createWebHistory(), // Для работы с history API
  routes,
});

// Логика для защиты маршрутов
router.beforeEach((to, from, next) => {
  let user = null;
  try {
    user = JSON.parse(localStorage.getItem('user'));
  } catch (error) {
    console.error('Ошибка при парсинге данных пользователя:', error);
  }

  // Если маршрут требует авторизации, но пользователь не авторизован, перенаправляем на страницу логина
  if (to.meta.requiresAuth && !user) {
    next(`/login?redirect=${to.fullPath}`);
  } else {
    next(); // Если пользователь авторизован или маршрут не требует авторизации, продолжаем переход
  }
});

export default router;

