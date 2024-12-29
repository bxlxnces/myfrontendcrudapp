<template>
    <div class="admin-products">
      <h1>Управление продуктами</h1>
  
      <!-- Кнопка для добавления нового продукта -->
      <div class="actions">
        <router-link to="/admin/product-form" class="btn add-product-btn">
          Добавить продукт
        </router-link>
      </div>
  
      <!-- Таблица продуктов -->
      <table class="products-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Название</th>
            <th>Цена</th>
            <th>Категория</th>
            <th>Действия</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="product in products" :key="product.id">
            <td>{{ product.id }}</td>
            <td>{{ product.name }}</td>
            <td>{{ product.price }} ₽</td>
            <td>{{ product.category }}</td>
            <td>
              <router-link :to="'/admin/product/' + product.id" class="btn view-btn">Просмотр</router-link>
              <router-link :to="'/admin/product-form/' + product.id" class="btn edit-btn">Редактировать</router-link>
              <button @click="deleteProduct(product.id)" class="btn delete-btn">Удалить</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  export default {
    name: 'AdminProducts',
    data() {
      return {
        products: [
          { id: 1, name: 'Товар 1', price: 1000, category: 'Электроника' },
          { id: 2, name: 'Товар 2', price: 2000, category: 'Одежда' },
          { id: 3, name: 'Товар 3', price: 1500, category: 'Бытовая техника' },
          // Здесь можно подгрузить реальные данные с сервера
        ],
      };
    },
    methods: {
      deleteProduct(productId) {
        // Здесь должна быть логика для удаления продукта
        alert(`Продукт с ID ${productId} удален`);
        this.products = this.products.filter(product => product.id !== productId);
      },
    },
  };
  </script>
  
  <style scoped>
  .admin-products {
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 8px;
  }
  
  h1 {
    font-size: 24px;
    margin-bottom: 20px;
  }
  
  .actions {
    margin-bottom: 20px;
    text-align: right;
  }
  
  .btn {
    padding: 10px 15px;
    margin: 5px;
    border: none;
    border-radius: 5px;
    text-decoration: none;
    color: white;
    cursor: pointer;
  }
  
  .add-product-btn {
    background-color: #4caf50;
  }
  
  .view-btn {
    background-color: #2196f3;
  }
  
  .edit-btn {
    background-color: #ff9800;
  }
  
  .delete-btn {
    background-color: #f44336;
  }
  
  .products-table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
  }
  
  .products-table th, .products-table td {
    padding: 12px;
    text-align: left;
    border-bottom: 1px solid #ddd;
  }
  
  .products-table th {
    background-color: #4caf50;
    color: white;
  }
  
  .products-table tr:hover {
    background-color: #f1f1f1;
  }
  </style>
  