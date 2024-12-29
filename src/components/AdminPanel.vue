<template>
    <div class="admin-panel">
      <h1 class="admin-panel__title">Админ Панель</h1>
      <div class="admin-panel__links">
        <router-link to="/admin/products" class="admin-panel__link">Товары</router-link>
        <router-link to="/admin/categories" class="admin-panel__link">Категории</router-link>
        <router-link to="/admin/orders" class="admin-panel__link">Заказы</router-link>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'AdminPanel'
  }
  </script>
  
  <style scoped>
  .admin-panel {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background-color: #f4f7fb;
    font-family: 'Arial', sans-serif;
    color: #333;
  }
  
  .admin-panel__title {
    font-size: 2rem;
    margin-bottom: 40px;
    color: #007BFF;
    font-weight: bold;
  }
  
  .admin-panel__links {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  
  .admin-panel__link {
    font-size: 1.2rem;
    color: #007BFF;
    text-decoration: none;
    padding: 12px 24px;
    border-radius: 8px;
    background-color: #ffffff;
    border: 1px solid #007BFF;
    transition: all 0.3s ease;
  }
  
  .admin-panel__link:hover {
    background-color: #007BFF;
    color: #ffffff;
    border-color: #0056b3;
  }
  
  @media (min-width: 768px) {
    .admin-panel__links {
      flex-direction: row;
      gap: 40px;
    }
  }
  </style>
  