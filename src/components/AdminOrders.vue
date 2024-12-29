<template>
    <div class="admin-orders-container">
      <h1 class="admin-orders-title">Заказы в админке</h1>
      <table class="admin-orders-table">
        <thead>
          <tr>
            <th>Номер заказа</th>
            <th>Клиент</th>
            <th>Сумма</th>
            <th>Статус</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="order in orders" :key="order.id">
            <td>{{ order.id }}</td>
            <td>{{ order.customer }}</td>
            <td>{{ order.total }}</td>
            <td>{{ order.status }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  export default {
    name: 'AdminOrders',
    data() {
      return {
        orders: [], // Здесь будет храниться список заказов
      };
    },
    mounted() {
      // Здесь может быть код для загрузки заказов с сервера или базы данных
      this.fetchOrders();
    },
    methods: {
      fetchOrders() {
        // Пример метода для получения данных заказов
        // Например, fetch или axios запрос к API
        this.orders = [
          { id: 1, customer: 'John Doe', total: '$50', status: 'В обработке' },
          { id: 2, customer: 'Jane Smith', total: '$80', status: 'Отправлен' },
        ];
      },
    },
  };
  </script>
  
  <style scoped>
  .admin-orders-container {
    padding: 20px;
    max-width: 1000px;
    margin: 0 auto;
    background-color: #f9f9f9;
    border-radius: 8px;
  }
  
  .admin-orders-title {
    text-align: center;
    font-size: 2rem;
    color: #333;
    margin-bottom: 20px;
  }
  
  .admin-orders-table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 20px;
  }
  
  .admin-orders-table th,
  .admin-orders-table td {
    padding: 12px;
    text-align: left;
    border: 1px solid #ddd;
  }
  
  .admin-orders-table th {
    background-color: #4CAF50;
    color: white;
  }
  
  .admin-orders-table tr:nth-child(even) {
    background-color: #f2f2f2;
  }
  
  .admin-orders-table tr:hover {
    background-color: #ddd;
  }
  
  .admin-orders-table td {
    color: #555;
  }
  </style>
  