<template>
  <div id="app">
    <v-app>
      <v-app-bar app color="primary" dark>
        <v-toolbar-title>Магазин</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn text to="/" class="nav-link">
          <v-icon left>mdi-store</v-icon> Товары
        </v-btn>
        <v-btn text to="/cart" class="nav-link">
          <v-icon left>mdi-cart</v-icon> Корзина
          <v-badge v-if="cart.length > 0" color="red" :content="cart.length" />
        </v-btn>
        <v-btn text to="/favorites" class="nav-link">
          <v-icon left>mdi-heart</v-icon> Избранное
          <v-badge v-if="favorites.length > 0" color="red" :content="favorites.length" />
        </v-btn>
        <v-btn text to="/profile" class="nav-link">
          <v-icon left>mdi-account</v-icon> Профиль
        </v-btn>
        <v-btn text to="/admin" class="nav-link">
          <v-icon left>mdi-cog</v-icon> Админ панель
        </v-btn>
      </v-app-bar>

      <v-main>
        <router-view
          :cart="cart"
          :total-price="totalPrice"
          :favorites="favorites"
          :customer-name="customerName"
          :customer-email="customerEmail"
          @add-to-cart="addToCart"
          @remove-from-cart="removeFromCart"
          @remove-from-favorites="removeFromFavorites"
        />
      </v-main>
    </v-app>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cart: [],
      totalPrice: 0,
      favorites: [],
      customerName: "Иван Иванов",
      customerEmail: "ivan@example.com",
    };
  },
  methods: {
    addToCart(item) {
      this.cart.push(item);
      this.updateTotalPrice();
    },
    removeFromCart(item) {
      const index = this.cart.findIndex((cartItem) => cartItem.id === item.id);
      if (index !== -1) {
        this.cart.splice(index, 1);
        this.updateTotalPrice();
      }
    },
    updateTotalPrice() {
      this.totalPrice = this.cart.reduce((total, item) => total + item.price, 0);
    },
    removeFromFavorites(item) {
      const index = this.favorites.findIndex((favItem) => favItem.id === item.id);
      if (index !== -1) {
        this.favorites.splice(index, 1);
      }
    },
  },
};
</script>

<style scoped>
.nav-link {
  text-transform: none;
}

v-badge {
  margin-left: 10px;
}
</style>
