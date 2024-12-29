// src/plugins/vuetify.js
import '@mdi/font/css/materialdesignicons.css'; // Подключаем иконки, если необходимо
import 'vuetify/styles'; // Подключаем стили Vuetify

import { createVuetify } from 'vuetify';

export default createVuetify({
  theme: {
    defaultTheme: 'light', // Выберите тему по умолчанию (можно настроить)
  },
});
