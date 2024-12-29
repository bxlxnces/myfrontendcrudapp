<template>
    <div class="admin-categories">
      <h1>Управление категориями</h1>
      
      <div class="category-list">
        <h2>Список категорий</h2>
        <ul>
          <li v-for="category in categories" :key="category.id">
            <span>{{ category.name }}</span>
            <button @click="editCategory(category.id)">Редактировать</button>
            <button @click="deleteCategory(category.id)">Удалить</button>
          </li>
        </ul>
      </div>
  
      <div class="category-form">
        <h2>{{ isEditMode ? 'Редактировать категорию' : 'Добавить новую категорию' }}</h2>
        <form @submit.prevent="saveCategory">
          <div>
            <label for="category-name">Название категории</label>
            <input
              v-model="categoryName"
              type="text"
              id="category-name"
              placeholder="Введите название категории"
              required
            />
          </div>
          <div>
            <button type="submit">{{ isEditMode ? 'Сохранить' : 'Добавить' }}</button>
          </div>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        categories: [], // Список категорий
        categoryName: '', // Название новой категории
        isEditMode: false, // Режим редактирования
        currentCategoryId: null, // Текущий редактируемый ID
      };
    },
    methods: {
      // Загрузка списка категорий
      loadCategories() {
        // Здесь замените на реальный API запрос, если нужно
        this.categories = [
          { id: 1, name: 'Электроника' },
          { id: 2, name: 'Одежда' },
          { id: 3, name: 'Дом и сад' },
        ];
      },
      
      // Режим редактирования категории
      editCategory(id) {
        const category = this.categories.find(cat => cat.id === id);
        if (category) {
          this.categoryName = category.name;
          this.isEditMode = true;
          this.currentCategoryId = id;
        }
      },
  
      // Сохранение новой или отредактированной категории
      saveCategory() {
        if (this.isEditMode) {
          // Редактирование существующей категории
          const category = this.categories.find(cat => cat.id === this.currentCategoryId);
          if (category) {
            category.name = this.categoryName;
          }
          this.isEditMode = false;
        } else {
          // Добавление новой категории
          const newCategory = {
            id: this.categories.length + 1,
            name: this.categoryName,
          };
          this.categories.push(newCategory);
        }
        this.categoryName = ''; // Очищаем поле ввода
      },
  
      // Удаление категории
      deleteCategory(id) {
        this.categories = this.categories.filter(cat => cat.id !== id);
      },
    },
    mounted() {
      // Загружаем категории при монтировании компонента
      this.loadCategories();
    },
  };
  </script>
  
  <style scoped>
  .admin-categories {
    padding: 20px;
  }
  
  .category-list {
    margin-bottom: 20px;
  }
  
  .category-list ul {
    list-style-type: none;
    padding: 0;
  }
  
  .category-list li {
    display: flex;
    justify-content: space-between;
    margin: 5px 0;
  }
  
  .category-list button {
    margin-left: 10px;
  }
  
  .category-form {
    border-top: 2px solid #ddd;
    padding-top: 20px;
  }
  
  .category-form input {
    padding: 5px;
    margin-bottom: 10px;
  }
  
  .category-form button {
    padding: 10px 15px;
    background-color: #007bff;
    color: white;
    border: none;
    cursor: pointer;
  }
  
  .category-form button:hover {
    background-color: #0056b3;
  }
  </style>
  