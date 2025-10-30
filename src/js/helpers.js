import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import refs from './refs';

iziToast.settings({
  timeout: 5000,
  balloon: true,
  progressBar: false,
});

export function showInfo(message) {
  iziToast.info({
    message: `${message}`,
  });
}

export function showAttention(message) {
  iziToast.success({
    title: 'Ok!',
    message: `${message}`,
  });
}
export function showWarning(message) {
  iziToast.warning({
    title: 'Attention!',
    message: `${message}`,
  });
}

export function showError(error) {
  iziToast.error({
    title: 'Ooops!',
    message: `${error.message}`,
  });
}

export function showLoadMoreBtn() {
  setTimeout(() => {
    refs.loadMoreBtn.classList.remove('is-hidden');
  }, 500);
}

export function hideLoadMoreBtn() {
  refs.loadMoreBtn.classList.add('is-hidden');
}

export function showLoader() {
  refs.loader.style.display = 'block';
  hideLoadMoreBtn();
}

export function hideLoader() {
  refs.loader.style.display = 'none';
}
