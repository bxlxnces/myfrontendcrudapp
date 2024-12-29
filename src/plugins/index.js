/**
 * plugins/index.js
 *
 * Automatically included in `./main.js`
 */

import vuetify from './vuetify'
import router from '@/router'

/**
 * Регистрация всех плагинов
 * @param {import('vue').App} app
 */
export function registerPlugins(app) {
  app.use(vuetify) // Подключаем Vuetify
  app.use(router)  // Подключаем Vue Router
}
