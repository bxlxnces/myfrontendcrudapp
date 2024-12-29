<template>
  <div class="order-form">
    <h2>Оформление заказа</h2>
    <!-- Фильтрация и сортировка -->
    <div class="filter-sort">
      <div class="filter">
        <label for="categoryFilter">Фильтр по категории:</label>
        <select v-model="selectedCategory" id="categoryFilter">
          <option value="">Все категории</option>
          <option v-for="category in categories" :key="category" :value="category">{{ category }}</option>
        </select>
      </div>

      <div class="sort">
        <label for="sortOrder">Сортировка по цене:</label>
        <select v-model="sortOrder" id="sortOrder">
          <option value="asc">По возрастанию</option>
          <option value="desc">По убыванию</option>
        </select>
      </div>
    </div>

    <div class="search">
      <label for="search">Поиск по названию:</label>
      <input type="text" v-model="searchQuery" id="search" placeholder="Введите название товара" />
    </div>

    <!-- Список товаров -->
    <div>
      <h3>Список товаров</h3>
      <ul class="product-list">
        <li v-for="item in filteredAndSortedItems" :key="item.id" class="product-item">
          <img :src="item.image" :alt="item.name" width="100" height="100" />
          <span>{{ item.name }} - {{ item.price.toLocaleString() }}₸</span>
          <button @click="addToCart(item)">Добавить в корзину</button>
        </li>
      </ul>
    </div>

    <!-- Корзина -->
    <h3>Корзина</h3>
    <ul class="cart-list">
      <li v-for="cartItem in cart" :key="cartItem.id" class="cart-item">
        <img v-if="cartItem.image" :src="cartItem.image" :alt="cartItem.name" width="100" height="100" />
        <span>{{ cartItem.name }} - {{ cartItem.price.toLocaleString() }}₸</span>
        <button @click="removeFromCart(cartItem)">Удалить</button>
      </li>
    </ul>

    <h4>Итого: {{ totalPrice.toLocaleString() }}₸</h4>

    <!-- Форма заказа -->
    <form @submit.prevent="submitOrder" class="order-form">
      <div>
        <label for="customerName">Ваше имя:</label>
        <input type="text" id="customerName" v-model="customerName" required />
      </div>
      <div>
        <label for="customerEmail">Email:</label>
        <input type="email" id="customerEmail" v-model="customerEmail" required />
      </div>
      <button type="submit" class="submit-button">Оформить заказ</button>
    </form>
    <p v-if="orderMessage">{{ orderMessage }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { id: 1, name: "Продукты | Snickers", price: 459, category: "Продукты", image: "https://images.satu.kz/187199380_shokoladnyj-batonchik-snickers.jpg" },
        { id: 2, name: "Продукты | Twix", price: 359, category: "Продукты", image: "https://ir-3.ozone.ru/s3/multimedia-4/c1000/6389117848.jpg" },
        { id: 3, name: "Продукты | Bounty", price: 2000, category: "Продукты", image: "https://cc.kz/upload/iblock/def/defe0152785dd344fdf209ba411feb6d.jpg" },
        { id: 4, name: "Электроника | iPhone 16", price: 650000, category: "Электроника", image: "https://www.apple.com/newsroom/images/2024/09/apple-introduces-iphone-16-and-iphone-16-plus/article/Apple-iPhone-16-hero-240909_inline.jpg.large.jpg" },
        { id: 5, name: "Сад и растения | Розы", price: 10000, category: "Сад и растения", image: "https://static.insales-cdn.com/images/products/1/4946/121484114/image.jpg" },
        { id: 6, name: "Мебель | Кресло Игровое DXRacer", price: 135990, category: "Мебель", image: "https://moon.kz/upload/iblock/1ba/lb1r6li7c7xoeme19ql4rdedbkf21h0v.jpg" },
        { id: 7, name: "Электроника | MacBook Air 2021", price: 1350000, category: "Электроника", image: "https://gadgetstore.kz/wa-data/public/shop/products/77/05/577/images/1979/1979.970.jpeg" },
        { id: 8, name: "Электроника | iPad Pro 2021", price: 850000, category: "Электроника", image: "https://nout.kz/upload/resize_cache/webp/iblock/5fc/ywwptg4zq6ewt2wxt73eirhnkgrbexwj/1.webp" },
        { id: 9, name: "Сад и растения | Букет Орхидеи", price: 25000, category: "Сад и растения", image: "https://imperiacvetov.kz/image/cache/catalog/cd1b7c62-0e97-4fd3-a927-58502f19796b-1000x1000.jpg" },
      ],
      cart: [],
      totalPrice: 0,
      customerName: '',
      customerEmail: '',
      orderMessage: '',
      selectedCategory: '',
      sortOrder: 'asc',
      searchQuery: '',
      categories: ['Продукты', 'Электроника', 'Сад и растения', 'Мебель'],
    };
  },
  computed: {
    filteredAndSortedItems() {
      let filteredItems = this.items;
      
      if (this.selectedCategory) {
        filteredItems = filteredItems.filter(item => item.category === this.selectedCategory);
      }

      if (this.searchQuery) {
        filteredItems = filteredItems.filter(item => item.name.toLowerCase().includes(this.searchQuery.toLowerCase()));
      }
      
      return filteredItems.sort((a, b) => {
        return this.sortOrder === 'asc' ? a.price - b.price : b.price - a.price;
      });
    }
  },
  methods: {
    addToCart(item) {
      this.cart.push(item);
      this.updateTotal();
    },
    removeFromCart(item) {
      const index = this.cart.indexOf(item);
      if (index > -1) {
        this.cart.splice(index, 1);
        this.updateTotal();
      }
    },
    updateTotal() {
      this.totalPrice = this.cart.reduce((total, item) => total + item.price, 0);
    },
    submitOrder() {
      if (this.customerName && this.customerEmail) {
        this.orderMessage = `Спасибо за заказ, ${this.customerName}! Мы свяжемся с вами по адресу ${this.customerEmail}.`;
        this.cart = [];
        this.totalPrice = 0;
        this.customerName = ''; // Очистка поля имени
        this.customerEmail = ''; // Очистка поля email
      }
    }
  }
};
</script>

<style scoped>
.order-form {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #f9f9f9;
}

h2, h3, h4 {
  color: #333;
}

.filter-sort {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.filter, .sort {
  flex: 1;
  margin-right: 10px;
}

.search {
  margin-bottom: 20px;
}

ul {
  list-style: none;
  padding: 0;
}

.product-list, .cart-list {
  margin-bottom: 20px;
}

.product-item, .cart-item {
  margin: 10px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border: 1px solid #eaeaea;
  border-radius: 4px;
  background-color: #fff;
}

button {
  margin-left: 10px;
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

img {
  margin-right: 10px;
}

.submit-button {
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 3px;
  cursor: pointer;
}

.submit-button:hover {
  background-color: #218838;
}
</style>
