import {
  getCategories,
  getId,
  getProductList,
  getProducts,
} from './products-api';
import {
  clearProdutsList,
  renderCategories,
  renderModal,
  renderProducts,
} from './render-function';
import { openModal } from './modal';
import { showError } from './helpers';

let currentPage = 1;

export async function initialHome() {
  try {
    const categories = await getCategories();
    renderCategories(categories);
    const { products, total, limit, skip } = await getProducts(currentPage);
    renderProducts(products);
  } catch (error) {
    showError(error);
  }
}

export async function handlerClickCategory(event) {
  const btn = event.target.closest('.categories__btn');
  if (!btn) {
    return;
  }
  clearProdutsList();
  const currentText = btn.textContent;
  try {
    if (currentText === 'All') {
      const { products, total, limit, skip } = await getProducts(currentPage);
      renderProducts(products);
    } else {
      const { products, total, limit, skip } = await getProductList(
        currentText,
        currentPage
      );
      renderProducts(products);
    }
  } catch (error) {
    showError(error);
  }
}

export async function onProductClick(event) {
  const card = event.target.closest('.products__item');
  if (!card) return;
  const productId = Number(card.dataset.id);
  try {
    const product = await getId(productId);
    renderModal(product);
    openModal();
  } catch (error) {
    showError(error);
  }
}
