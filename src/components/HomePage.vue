<template>
  <div class="home-page">
    <h1>Добро пожаловать на наш магазин!</h1>
    
    <!-- Форма товаров с фильтрами и поиском -->
    <OrderForm @add-to-cart="handleAddToCart" />
    
    <div v-if="cart.length > 0">
      <h2>Корзина</h2>
      <ul>
        <li v-for="(item, index) in cart" :key="index">
          {{ item.name }} - {{ item.price }} ₸
          <button @click="removeFromCart(index)">Удалить</button>
        </li>
      </ul>
      <p>Итого: {{ totalPrice }} ₸</p>
    </div>
    <div v-else>
      <p>Корзина пуста.</p>
    </div>
  </div>
</template>

<script>
import OrderForm from './OrderForm.vue'; // Импортируем компонент формы товаров

export default {
  components: {
    OrderForm,
  },
  data() {
    return {
      cart: [],
    };
  },
  computed: {
    totalPrice() {
      return this.cart.reduce((total, item) => total + item.price, 0);
    },
  },
  methods: {
    handleAddToCart(item) {
      // Добавляем товар в корзину, если он еще не добавлен
      this.cart.push(item);
    },
    removeFromCart(index) {
      this.cart.splice(index, 1);
    },
  },
};
</script>

<style scoped>
.home-page {
  padding: 20px;
  text-align: center;
}

h1 {
  font-size: 2em;
  margin-bottom: 20px;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  margin: 5px 0;
}

button {
  margin-left: 10px;
  background-color: red;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
}

button:hover {
  background-color: darkred;
}
</style>
