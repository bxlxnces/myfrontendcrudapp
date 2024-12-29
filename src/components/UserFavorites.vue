<template>
  <div class="favorites-page">
    <h3>Избранные товары</h3>
    <ul class="favorites-list">
      <li v-for="favItem in favorites" :key="favItem.id" class="favorite-item">
        <img :src="favItem.image" :alt="favItem.name" width="100" height="100">
        <span>{{ favItem.name }} - {{ favItem.price.toLocaleString() }}₸</span>
        <button @click="removeFromFavorites(favItem)">Удалить из избранного</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    favorites: {
      type: Array,
      required: true,
    }
  },
  methods: {
    removeFromFavorites(item) {
      this.$emit('remove-from-favorites', item);
    }
  }
};
</script>

<style scoped>
.favorites-page {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 5px;
}

h3 {
  color: #333;
  margin-bottom: 20px;
}

.favorites-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.favorite-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border: 1px solid #eaeaea;
  border-radius: 4px;
  margin-bottom: 10px;
  background-color: #fff;
}

button {
  padding: 5px 10px;
  background-color: #dc3545;
  color: white;
  border: none;
  border-radius: 3px;
  cursor: pointer;
}

button:hover {
  background-color: #c82333;
}
</style>
