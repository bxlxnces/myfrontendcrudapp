<template>
  <div class="profile-page">
    <h1>Профиль</h1>
    <div class="profile-info" v-if="profile.username">
      <p><strong>Имя пользователя:</strong> {{ profile.username }}</p>
      <p><strong>Email:</strong> {{ profile.email }}</p>
      <p><strong>Возраст:</strong> {{ profile.age }}</p>
      <p><strong>О себе:</strong> {{ profile.bio }}</p>
    </div>
    <p v-else>Данные профиля не найдены.</p>
    <router-link to="/profile/edit" class="edit-button">Редактировать профиль</router-link>
  </div>
</template>

<script>
import axios from '@/axios'; // Импортируем настроенный axios

export default {
  data() {
    return {
      profile: {
        username: '',
        email: '',
        age: null,
        bio: '',
      },
    };
  },
  created() {
    this.fetchProfileData();
  },
  methods: {
    async fetchProfileData() {
      try {
        const response = await axios.get('/profile'); // Путь к вашему API для получения профиля
        this.profile = response.data;
      } catch (error) {
        console.error('Ошибка при загрузке данных профиля:', error);
        // Можно добавить уведомление пользователю о проблеме
      }
    },
  },
};
</script>

<style scoped>
.profile-page {
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.profile-info p {
  font-size: 16px;
  margin: 10px 0;
}

.edit-button {
  display: inline-block;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  margin-top: 20px;
}

.edit-button:hover {
  background-color: #0056b3;
}
</style>

