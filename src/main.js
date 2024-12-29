// main.js

import { createApp } from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import { registerPlugins } from '@/plugins'; // Если используете дополнительные плагины
import router from './router'; // Импортируем роутер

// Создаем приложение Vue
const app = createApp(App);

// Регистрируем плагины
registerPlugins(app);

// Используем роутер
app.use(router);

// Монтируем приложение
app.mount('#app');
