export const BASE_URL = 'https://dummyjson.com';

//API ендпоінти:

export const API_ENDPOINTS = {
  CATEGORIES: '/products/category-list', // - отримати список категорій продуктів
  PRODUCTS: '/products', //  - отримати всі продукти з пагінацією (?limit=10&skip=10)
  CATEGORY_LIST: '/products/category/', // - отримати продукти по категорії
  PRODUCT_BY_ID: '/products/', // - отримати один продукт по ID
  PRODUCT_BY_QUERY: '/products/search', //  - пошук продукту по ключовому слову (?q=nail)
};

export const PER_PAGE = 12;

// https://dummyjson.com/docs/products - документація бекенду, розділ продукти
