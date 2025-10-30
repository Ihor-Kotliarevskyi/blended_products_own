import iziToast from 'izitoast';
import "izitoast/dist/css/iziToast.min.css";

iziToast.settings({
  timeout: 5000,
  balloon: true,
  progressbar: false,
});

export function showInfo(message) {
  iziToast.info({
    title: '!',
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
