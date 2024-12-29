<template>
  <div class="cart-page">
    <h3>Корзина</h3>
    <ul class="cart-list">
      <li v-for="cartItem in cart" :key="cartItem.id" class="cart-item">
        <img :src="cartItem.image" :alt="cartItem.name" width="100" height="100">
        <span>{{ cartItem.name }} - {{ cartItem.price.toLocaleString() }}₸</span>
        <button @click="removeFromCart(cartItem)">Удалить</button>
      </li>
    </ul>

    <h4>Итого: {{ totalPrice.toLocaleString() }}₸</h4>

    <div class="navigation">
      <router-link to="/">Вернуться к покупкам</router-link>
      <button @click="$emit('proceed-to-checkout')" class="checkout-button">Оформить заказ</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    cart: {
      type: Array,
      required: true,
    },
    totalPrice: {
      type: Number,
      required: true,
    },
  },
  methods: {
    removeFromCart(item) {
      this.$emit('remove-from-cart', item);
    },
  },
};
</script>

<style scoped>
.cart-page {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #f9f9f9;
}

h3, h4 {
  color: #333;
}

.cart-list {
  list-style: none;
  padding: 0;
  margin-bottom: 20px;
}

.cart-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border: 1px solid #eaeaea;
  border-radius: 4px;
  background-color: #fff;
  margin-bottom: 10px;
}

button {
  padding: 5px 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 3px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}

.navigation {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

.checkout-button {
  background-color: #28a745;
}

.checkout-button:hover {
  background-color: #218838;
}
</style>
