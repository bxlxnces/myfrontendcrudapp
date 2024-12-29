<template>
    <div class="logout">
      <h1>Выход</h1>
      <p>Вы успешно вышли из системы. Перенаправление...</p>
    </div>
  </template>
  
  <script>
  export default {
    created() {
      // Удаляем данные пользователя
      localStorage.removeItem('user');
      localStorage.removeItem('token');
  
      // Перенаправление на страницу входа
      this.$router.push('/login');
    },
  };
  </script>
  
  <style scoped>
  .logout {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    text-align: center;
  }
  </style>