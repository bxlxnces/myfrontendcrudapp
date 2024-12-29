<template>
    <div>
      <h2>Добавить товар</h2>
      <form @submit.prevent="addProduct">
        <input v-model="newProduct.name" placeholder="Название товара" required />
        <textarea v-model="newProduct.description" placeholder="Описание товара" required></textarea>
        <input v-model="newProduct.price" placeholder="Цена товара" type="number" required />
        <input v-model="newProduct.image" placeholder="Изображение товара" required />
        <button type="submit">Добавить товар</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ProductForm',
    data() {
      return {
        newProduct: {
          name: '',
          description: '',
          price: '',
          image: ''
        }
      }
    },
    methods: {
      addProduct() {
        this.$axios.post('/api/products', this.newProduct)
          .then(response => {
            console.log('Товар добавлен:', response.data);
          })
          .catch(error => {
            console.error('Ошибка при добавлении товара:', error);
          });
      }
    }
  }
  </script>
  
  <style scoped>
  /* Стили для формы товара */
  </style>
  