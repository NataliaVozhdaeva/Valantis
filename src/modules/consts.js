import { getFields } from './getData';

const catalog = document.querySelector('.cards');
const filters = document.querySelectorAll('.filter-item');
const limit = 50;

const getAllItemsAmount = async () => {
  const res = await getFields();
  return await res.result;
};
const dataFromFields = await getAllItemsAmount();
const itemsAmount = dataFromFields.length;
const lastPageNum = Math.ceil(itemsAmount / limit);
const fileredData = dataFromFields.filter((element) => element != null);
const brands = new Set(fileredData);

const toGoFutherLong = () => {
  document.querySelector('.pagination-btn_prev').setAttribute('disabled', 'true');
  document.querySelector('.pagination-btn_start').setAttribute('disabled', 'true');
  document.querySelector('.pagination-btn_next').removeAttribute('disabled');
  document.querySelector('.pagination-btn_finish').removeAttribute('disabled');
};

const toGoFutherShort = () => {
  document.querySelector('.pagination-btn_next').removeAttribute('disabled');
  document.querySelector('.pagination-btn_finish').removeAttribute('disabled');
};

const toGoBackLong = () => {
  document.querySelector('.pagination-btn_next').setAttribute('disabled', 'true');
  document.querySelector('.pagination-btn_finish').setAttribute('disabled', 'true');
  document.querySelector('.pagination-btn_prev').removeAttribute('disabled');
  document.querySelector('.pagination-btn_start').removeAttribute('disabled');
};

const toGoBackShort = () => {
  document.querySelector('.pagination-btn_prev').removeAttribute('disabled');
  document.querySelector('.pagination-btn_start').removeAttribute('disabled');
};

const notToGoFuther = () => {
  document.querySelector('.pagination-btn_next').setAttribute('disabled', 'true');
  document.querySelector('.pagination-btn_finish').setAttribute('disabled', 'true');
};

const notToGoBack = () => {
  document.querySelector('.pagination-btn_prev').setAttribute('disabled', 'true');
  document.querySelector('.pagination-btn_start').setAttribute('disabled', 'true');
};

const hangListeners = (funk1, funk2, funk3, funk4) => {
  document.querySelector('.pagination-btn_start').addEventListener('click', funk1);
  document.querySelector('.pagination-btn_prev').addEventListener('click', funk2);
  document.querySelector('.pagination-btn_next').addEventListener('click', funk3);
  document.querySelector('.pagination-btn_finish').addEventListener('click', funk4);
};

export {
  catalog,
  limit,
  lastPageNum,
  brands,
  filters,
  notToGoBack,
  notToGoFuther,
  toGoBackLong,
  toGoFutherLong,
  toGoBackShort,
  toGoFutherShort,
  hangListeners,
};
