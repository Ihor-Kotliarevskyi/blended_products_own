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
import {
  hideLoader,
  hideLoadMoreBtn,
  showError,
  showInfo,
  showLoader,
  showLoadMoreBtn,
} from './helpers';
import refs from './refs';
import { PER_PAGE } from './constants';

let currentPage = 1;
let currentText = '';

export async function initialHome() {
  try {
    const categories = await getCategories();
    renderCategories(categories);
    currentText = 'All';
    const allBtn = refs.categories.children[0].children[0];
    allBtn.classList.add('categories__btn--active');
    showLoader();
    const { products, total, limit, skip } = await getProducts(currentPage);
    renderProducts(products);
    showLoadMoreBtn();
  } catch (error) {
    showError(error);
  } finally {
    hideLoader();
  }
}

export async function handlerClickCategory(event) {
  const btn = event.target.closest('.categories__btn');
  if (!btn) {
    return;
  }

  const categoriesChildrenArrey = [...event.currentTarget.children];
  categoriesChildrenArrey.map(child => {
    child.children[0].classList.remove('categories__btn--active');
  });

  clearProdutsList();
  btn.classList.add('categories__btn--active');
  currentPage = 1;
  currentText = btn.textContent;
  showLoader();
  try {
    if (currentText === 'All') {
      const { products, total, limit, skip } = await getProducts(currentPage);
      if (!products.length) {
        refs.notFound.classList.add('not-found--visible');
        hideLoadMoreBtn();
        return;
      }
      if (limit < PER_PAGE) {
        hideLoadMoreBtn();
        showInfo("We're sorry, but you've reached the end of search results.");
      } else {
        showLoadMoreBtn();
      }
      renderProducts(products);
    } else {
      const { products, total, limit, skip } = await getProductList(
        currentText,
        currentPage
      );
      if (!products.length) {
        refs.notFound.classList.add('not-found--visible');
        hideLoadMoreBtn();
        return;
      }
      if (limit < PER_PAGE) {
        hideLoadMoreBtn();
        showInfo("We're sorry, but you've reached the end of search results.");
      } else {
        showLoadMoreBtn();
      }
      renderProducts(products);
    }
  } catch (error) {
    showError(error);
  } finally {
    hideLoader();
  }
}

export async function onLoadMoreClick(event) {
  event.preventDefault();
  currentPage++;
  showLoader();
  try {
    if (currentText == 'All') {
      const { products, total, limit, skip } = await getProducts(currentPage);
      if (limit < PER_PAGE) {
        hideLoadMoreBtn();
        showInfo("We're sorry, but you've reached the end of search results.");
      } else {
        showLoadMoreBtn();
      }
      renderProducts(products);
    } else {
      const { products, total, limit, skip } = await getProductList(
        currentText,
        currentPage
      );
      if (limit < PER_PAGE) {
        hideLoadMoreBtn();
        showInfo("We're sorry, but you've reached the end of search results.");
      } else {
        showLoadMoreBtn();
      }
      renderProducts(products);
    }
  } catch (error) {
    showError(error);
  } finally {
    hideLoader();
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
