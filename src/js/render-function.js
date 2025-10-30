import refs from './refs';

export function renderCategories(arrey) {
  const categories = ['All', ...arrey];
  const murkup = categories
    .map(
      category => `<li class="categories__item">
   <button class="categories__btn" type="button">${category}</button>
 </li>
`
    )
    .join('');
  refs.categories.innerHTML = murkup;
}

export function renderProducts(arr) {
  const markup = arr
    .map(
      ({ id, category, brand, price, title, thumbnail }) => `
  <li class="products__item" data-id="${id}">
    <img class="products__image" src="${thumbnail}" alt="${title}"/>
    <p class="products__title">${title}</p>
    <p class="products__brand"><span class="products__brand--bold">Brand: ${brand}</span></p>
    <p class="products__category">Category: ${category}</p>
    <p class="products__price">Price: ${price}$</p>
 </li>

  `
    )
    .join('');
  refs.products.insertAdjacentHTML('beforeend', markup);
}

export function clearProdutsList() {
  refs.products.innerHTML = '';
}

export function renderModal({
  price,
  title,
  thumbnail,
  tags,
  description,
  shippingInformation,
  returnPolicy,
}) {
  const markupTags = tags
    .map(tag => `<li class="modal-product__tags">${tag}</li>`)
    .join('');
  const markup = `<img class="modal-product__img" src="${thumbnail}" alt="${title}" />
      <div class="modal-product__content">
        <p class="modal-product__title">${title}</p>
        <ul class="modal-product__tags">${markupTags}</ul>
        <p class="modal-product__description">${description}</p>
        <p class="modal-product__shipping-information">Shipping: ${shippingInformation}</p>
        <p class="modal-product__return-policy">Return Policy: ${returnPolicy}</p>
        <p class="modal-product__price">Price: ${price}$</p>
        <button class="modal-product__buy-btn" type="button">Buy</button>
      </div>
`;
  refs.modalProduct.innerHTML = markup;
}
