import axios from 'axios';
import { API_ENDPOINTS, BASE_URL, PER_PAGE } from './constants';

axios.defaults.baseURL = BASE_URL;

export async function getCategories() {
  const { data } = await axios(`${API_ENDPOINTS.CATEGORIES}`);
  return data;
}

export async function getProducts(currentPage) {
  const skip = (currentPage - 1) * PER_PAGE;
  const { data } = await axios(`${API_ENDPOINTS.PRODUCTS}?limit=${PER_PAGE}&skip=${skip}`);
  return data;
}

export async function getProductList(category, currentPage) {
  const skip = (currentPage - 1) * PER_PAGE;
  const { data } = await axios(`${API_ENDPOINTS.CATEGORY_LIST}${category}?limit=${PER_PAGE}&skip=${skip}`);
  return data;
}

export async function getId(id) {
  const {data} = await axios(`${API_ENDPOINTS.PRODUCT_BY_ID}${id}`)
  return data;
}
