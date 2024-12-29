<template>
  <div class="user-profile">
    <h2>Профиль пользователя</h2>
    <div class="profile-info">
      <img class="profile-image" src="https://zefirka.net/wp-content/uploads/2021/02/kotik-pisko-kotoryj-poxozh-na-kota-v-sapogax-iz-shreka-1.jpg" alt="Avatar" /> <!-- Путь к изображению по умолчанию -->
      <div class="user-details">
        <p><strong>Имя:</strong> {{ customerName }}</p>
        <p><strong>Электронная почта:</strong> {{ customerEmail }}</p>
        <router-link
          :to="{ name: 'profile-edit', params: { username: customerName, email: customerEmail } }"
        >
          <button class="edit-button">Редактировать профиль</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    customerName: String,
    customerEmail: String,
  },
  methods: {
    // Метод для обновления данных профиля
    updateProfile(updatedData) {
      this.$emit('update-profile', updatedData);
    },
  },
};
</script>

<style scoped>
.user-profile {
  max-width: 600px;
  margin: 20px auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f9f9f9;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.profile-info {
  display: flex;
  align-items: center;
}

.profile-image {
  width: 100px; /* Фиксированная ширина */
  height: 100px; /* Фиксированная высота */
  border-radius: 50%; /* Округлая форма */
  object-fit: cover; /* Сохраняем пропорции изображения */
  margin-right: 20px;
  border: 2px solid #28a745; /* Обводка для выделения изображения */
}

.user-details {
  flex: 1;
}

h2 {
  margin: 0;
  color: #2c3e50;
  text-align: center; /* Центрируем заголовок */
}

p {
  margin: 5px 0;
  color: #555;
}

.edit-button {
  background-color: #28a745;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.edit-button:hover {
  background-color: #218838; /* Темнее при наведении */
}
</style>
