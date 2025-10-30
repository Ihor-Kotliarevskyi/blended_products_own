import"./assets/styles-DAE99nJD.js";import{a as i,i as g}from"./assets/vendor-CEY01oKk.js";const L="https://dummyjson.com",l={CATEGORIES:"/products/category-list",PRODUCTS:"/products",CATEGORY_LIST:"/products/category/",PRODUCT_BY_ID:"/products/",PRODUCT_BY_QUERY:"/products/search"},d=12;i.defaults.baseURL=L;async function P(){const{data:t}=await i(`${l.CATEGORIES}`);return t}async function y(t){const o=(t-1)*d,{data:s}=await i(`${l.PRODUCTS}?limit=${d}&skip=${o}`);return s}async function T(t,o){const s=(o-1)*d,{data:c}=await i(`${l.CATEGORY_LIST}${t}?limit=${d}&skip=${s}`);return c}async function w(t){const{data:o}=await i(`${l.PRODUCT_BY_ID}${t}`);return o}const e={categories:document.querySelector(".categories"),products:document.querySelector(".products"),modal:document.querySelector(".modal"),modalProduct:document.querySelector(".modal-product")};function C(t){const s=["All",...t].map(c=>`<li class="categories__item">
   <button class="categories__btn" type="button">${c}</button>
 </li>
`).join("");e.categories.innerHTML=s}function p(t){const o=t.map(({id:s,category:c,brand:r,price:n,title:a,thumbnail:u})=>`
  <li class="products__item" data-id="${s}">
    <img class="products__image" src="${u}" alt="${a}"/>
    <p class="products__title">${a}</p>
    <p class="products__brand"><span class="products__brand--bold">Brand: ${r}</span></p>
    <p class="products__category">Category: ${c}</p>
    <p class="products__price">Price: ${n}$</p>
 </li>

  `).join("");e.products.insertAdjacentHTML("beforeend",o)}function v(){e.products.innerHTML=""}function R({price:t,title:o,thumbnail:s,tags:c,description:r,shippingInformation:n,returnPolicy:a}){const u=c.map(k=>`<li class="modal-product__tags">${k}</li>`).join(""),E=`<img class="modal-product__img" src="${s}" alt="${o}" />
      <div class="modal-product__content">
        <p class="modal-product__title">${o}</p>
        <ul class="modal-product__tags">${u}</ul>
        <p class="modal-product__description">${r}</p>
        <p class="modal-product__shipping-information">Shipping: ${n}</p>
        <p class="modal-product__return-policy">Return Policy: ${a}</p>
        <p class="modal-product__price">Price: ${t}$</p>
        <button class="modal-product__buy-btn" type="button">Buy</button>
      </div>
`;e.modalProduct.innerHTML=E}function S(){e.modal.classList.add("modal--is-open"),document.body.style.overflow="hidden",window.addEventListener("keydown",f),e.modal.addEventListener("click",b)}function $(){e.modal.classList.remove("modal--is-open"),document.body.style.overflow="",window.removeEventListener("keydown",f),e.modal.removeEventListener("click",b)}function f(t){t.code==="Escape"&&$()}function b(t){t.target===e.modal&&$()}g.settings({timeout:5e3,balloon:!0,progressbar:!1});function _(t){g.error({title:"Ooops!",message:`${t.message}`})}let m=1;async function O(){try{const t=await P();C(t);const{products:o,total:s,limit:c,skip:r}=await y(m);p(o)}catch(t){_(t)}}async function h(t){const o=t.target.closest(".categories__btn");if(!o)return;v();const s=o.textContent;try{if(s==="All"){const{products:c,total:r,limit:n,skip:a}=await y(m);p(c)}else{const{products:c,total:r,limit:n,skip:a}=await T(s,m);p(c)}}catch(c){_(c)}}async function A(t){const o=t.target.closest(".products__item");if(!o)return;const s=Number(o.dataset.id);try{const c=await w(s);R(c),S()}catch(c){_(c)}}document.addEventListener("DOMContentLoaded",O);e.categories.addEventListener("click",h);e.products.addEventListener("click",A);
//# sourceMappingURL=index.js.map
