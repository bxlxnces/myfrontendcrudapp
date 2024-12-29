<template>
    <div>
      <h2>Добавить категорию</h2>
      <form @submit.prevent="addCategory">
        <input v-model="newCategory.name" placeholder="Название категории" required />
        <textarea v-model="newCategory.description" placeholder="Описание категории" required></textarea>
        <button type="submit">Добавить категорию</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: 'CategoryForm',
    data() {
      return {
        newCategory: {
          name: '',
          description: ''
        }
      }
    },
    methods: {
      addCategory() {
        this.$axios.post('/api/categories', this.newCategory)
          .then(response => {
            console.log('Категория добавлена:', response.data);
          })
          .catch(error => {
            console.error('Ошибка при добавлении категории:', error);
          });
      }
    }
  }
  </script>
  
  <style scoped>
  /* Стили для формы категории */
  </style>
  