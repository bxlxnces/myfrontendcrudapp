<template>
  <div class="auth-form">
    <h2>Вход</h2>
    <form @submit.prevent="login">
      <div>
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" required />
      </div>
      <div>
        <label for="password">Пароль:</label>
        <input type="password" id="password" v-model="password" required />
      </div>
      <button type="submit" :disabled="isLoading">{{ isLoading ? 'Загрузка...' : 'Войти' }}</button>
      <p>Нет аккаунта? <router-link to="/register">Зарегистрироваться</router-link></p>
      <p v-if="error" class="error">{{ error }}</p>
    </form>
  </div>
</template>

<script>
import axios from 'axios';
import { useRouter } from 'vue-router';

export default {
  data() {
    return {
      email: '',
      password: '',
      isLoading: false,
      error: null,
    };
  },
  methods: {
    async login() {
      this.isLoading = true;
      this.error = null;

      try {
        // Отправляем запрос на сервер для авторизации
        const response = await axios.post('http://127.0.0.1:8000/api/login', { 
          email: this.email, 
          password: this.password 
        });

        // Сохраняем токен и данные пользователя в localStorage
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('user', JSON.stringify(response.data.user));

        // Устанавливаем токен в глобальные заголовки axios для всех запросов
        axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;

        // Перенаправляем на главную страницу после успешной авторизации
        this.$router.push('/');
      } catch (err) {
        // Обработка ошибок авторизации
        this.error = err.response?.data?.error || 'Ошибка авторизации. Попробуйте снова.';
      } finally {
        this.isLoading = false;
      }
    },
  },
};
</script>

<style scoped>
.auth-form {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
}

.auth-form input {
  width: 100%;
  padding: 10px;
  margin: 10px 0;
}

.auth-form button {
  width: 100%;
  padding: 10px;
  background-color: #4caf50;
  color: white;
  border: none;
  cursor: pointer;
}

.auth-form button:disabled {
  background-color: #cccccc;
}

.auth-form button:hover:not(:disabled) {
  background-color: #45a049;
}

.error {
  color: red;
  font-size: 14px;
  margin-top: 10px;
}
</style>
