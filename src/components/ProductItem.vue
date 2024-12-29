<template>
    <div class="product-item">
      <img :src="item.image" :alt="item.name" class="item-image" />
      <div class="item-info">
        <h4>{{ item.name }}</h4>
        <p>{{ item.price }}₸</p>
        <button @click="addToCart" class="add-to-cart-btn">Добавить в корзину</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      item: {
        type: Object,
        required: true
      }
    },
    methods: {
      addToCart() {
        this.$emit('add-to-cart', this.item);
      }
    }
  };
  </script>
  
  <style scoped>
  .product-item {
    display: flex;
    align-items: center;
    border: 1px solid #eaeaea;
    border-radius: 4px;
    padding: 10px;
    margin-bottom: 10px;
    background-color: #fff;
  }
  
  .item-image {
    width: 100px; /* Настройте по необходимости */
    margin-right: 15px;
  }
  
  .add-to-cart-btn {
    padding: 10px 15px;
    border: none;
    border-radius: 4px;
    background-color: #28a745;
    color: white;
    cursor: pointer;
    transition: background-color 0.2s;
  }
  
  .add-to-cart-btn:hover {
    background-color: #218838;
  }
  </style>
  