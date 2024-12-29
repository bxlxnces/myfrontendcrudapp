// app.js

import { createApp } from 'vue';
import ExampleComponent from './components/ExampleComponent.vue'; // Ваш компонент

const app = createApp({
  components: {
    ExampleComponent, // Регистрируем компонент Vue
  },
});

app.mount('#app');
