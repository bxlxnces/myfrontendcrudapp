<template>
  <div class="auth-form">
    <h2>Регистрация</h2>
    <form @submit.prevent="register">
      <div>
        <label for="name">Имя:</label>
        <input type="text" id="name" v-model="name" required />
      </div>
      <div>
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" required />
      </div>
      <div>
        <label for="password">Пароль:</label>
        <input type="password" id="password" v-model="password" required />
      </div>
      <div>
        <label for="password_confirmation">Подтвердите пароль:</label>
        <input type="password" id="password_confirmation" v-model="password_confirmation" required />
      </div>
      <button type="submit" :disabled="isLoading">{{ isLoading ? 'Загрузка...' : 'Зарегистрироваться' }}</button>
      <p>Уже есть аккаунт? <router-link to="/login">Войти</router-link></p>
      <p v-if="error" class="error">{{ error }}</p>
    </form>
  </div>
</template>


<script>
import axios from '@/axios'; // Импортируем настроенный axios

export default {
  data() {
    return {
      name: '', // Добавляем поле для имени
      email: '',
      password: '',
      password_confirmation: '', // Добавляем подтверждение пароля
      isLoading: false,
      error: null,
    };
  },
  methods: {
    async register() {
      this.isLoading = true;
      this.error = null;

      try {
        // Отправляем данные на сервер
        const response = await axios.post('http://127.0.0.1:8000/api/register', {
          name: this.name,
          email: this.email,
          password: this.password,
          password_confirmation: this.password_confirmation,
        });

        if (response.status === 201) {
          localStorage.setItem('user', JSON.stringify(response.data.user));
          localStorage.setItem('token', response.data.token);

          this.$router.push('/'); // Редирект после успешной регистрации
        }
      } catch (err) {
        if (err.response && err.response.data) {
          this.error = err.response.data.errors
            ? Object.values(err.response.data.errors).join(', ')
            : err.response.data.message || 'Ошибка регистрации. Попробуйте снова.';
        } else {
          this.error = 'Не удалось подключиться к серверу. Пожалуйста, попробуйте позже.';
        }
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
