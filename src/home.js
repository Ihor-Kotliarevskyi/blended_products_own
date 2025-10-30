//Логіка сторінки Home

import {
  handlerClickCategory,
  initialHome,
  onLoadMoreClick,
  onProductClick,
} from './js/handlers';
import refs from './js/refs';

document.addEventListener('DOMContentLoaded', initialHome);
refs.categories.addEventListener('click', handlerClickCategory);
refs.products.addEventListener('click', onProductClick);
refs.loadMoreBtn.addEventListener('click', onLoadMoreClick);
