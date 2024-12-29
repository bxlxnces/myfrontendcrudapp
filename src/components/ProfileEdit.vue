<template>
    <div class="profile-edit">
      <h1>Редактировать профиль</h1>
      <form @submit.prevent="saveProfile">
        <div>
          <label for="username">Имя пользователя:</label>
          <input v-model="editedProfile.username" id="username" type="text" required />
        </div>
        <div>
          <label for="email">Email:</label>
          <input v-model="editedProfile.email" id="email" type="email" required />
        </div>
        <div>
          <label for="age">Возраст:</label>
          <input v-model="editedProfile.age" id="age" type="number" min="1" max="120" required />
        </div>
        <div>
          <label for="bio">О себе:</label>
          <textarea v-model="editedProfile.bio" id="bio" rows="4"></textarea>
        </div>
        <button type="submit">Сохранить изменения</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ProfileEdit',
    props: {
      username: String,
      email: String,
      age: Number,
      bio: String,
    },
    data() {
      return {
        editedProfile: {
          username: this.username || '',
          email: this.email || '',
          age: this.age || null,
          bio: this.bio || '',
        },
      };
    },
    methods: {
  saveProfile() {
    // Валидация данных перед отправкой
    if (this.isValidProfile(this.editedProfile)) {
      this.$emit('save-profile', this.editedProfile); // Отправляем изменения наверх
      this.$router.push('/profile'); // Переход на страницу профиля после сохранения
    } else {
      this.error = 'Пожалуйста, заполните все обязательные поля корректно.'; // Сообщение об ошибке в компоненте
    }
  },
  isValidProfile(profile) {
    // Проверка обязательных полей
    return (
      profile.username.trim() !== '' &&
      profile.email.trim() !== '' &&
      this.isValidEmail(profile.email) && // Проверка на правильность email
      profile.age > 0 &&
      profile.age <= 120
    );
  },
  isValidEmail(email) {
    // Регулярное выражение для проверки валидности email
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailPattern.test(email);
  },
},

  };
  </script>
  
  <style scoped>
  /* Добавляем базовые стили для формы */
  .profile-edit {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 8px;
    background-color: #f9f9f9;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }
  
  form div {
    margin-bottom: 10px;
  }
  
  label {
    display: block;
    margin-bottom: 5px;
    color: #333;
  }
  
  input,
  textarea {
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 14px;
  }
  
  button {
    background-color: #28a745;
    color: white;
    border: none;
    padding: 10px 15px;
    border-radius: 4px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #218838;
  }
  </style>
  