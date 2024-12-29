import axios from 'axios';

// Устанавливаем базовый URL для всех запросов
axios.defaults.baseURL = 'http://127.0.0.1'; // Замените на ваш бэкэнд URL

// Устанавливаем токен по умолчанию, если он есть в localStorage
const token = localStorage.getItem('token');
if (token) {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

export default axios;
