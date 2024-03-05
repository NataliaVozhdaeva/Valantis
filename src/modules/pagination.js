import { createCatalogPage } from './createCatalogPage';
import { catalog } from './consts';
import { getFields } from './getData';

let currentPage = 1;
let limit = 50;

const nextPageBtn = document.querySelector('.pagination-btn_next');
const prevPageBtn = document.querySelector('.pagination-btn_prev');
const btnToStart = document.querySelector('.pagination-btn_start');
const btnToEnd = document.querySelector('.pagination-btn_finish');
const data = await getFields();
const goodsAmount = data.result.length;

const pagePlus = async () => {
  currentPage++;
  document.querySelector('.pagination-btn_current').textContent = currentPage;

  catalog.innerHTML = '';
  createCatalogPage(limit, limit * currentPage - limit);

  if (currentPage === 2) {
    prevPageBtn.removeAttribute('disabled');
    btnToStart.removeAttribute('disabled');
  }

  if (currentPage === Math.ceil(goodsAmount / limit)) {
    nextPageBtn.setAttribute('disabled', 'true');
    btnToEnd.setAttribute('disabled', 'true');
  }
};

const pageMinus = () => {
  currentPage--;
  document.querySelector('.pagination-btn_current').textContent = currentPage;

  catalog.innerHTML = '';
  createCatalogPage(limit, limit * currentPage - limit);

  if (currentPage === 1) {
    prevPageBtn.setAttribute('disabled', 'true');
    btnToStart.setAttribute('disabled', 'true');
  }

  if (currentPage === Math.ceil(goodsAmount / limit) - 1) {
    nextPageBtn.removeAttribute('disabled');
    btnToEnd.removeAttribute('disabled');
  }
};

const pageToFirst = () => {
  prevPageBtn.setAttribute('disabled', 'true');
  btnToStart.setAttribute('disabled', 'true');
  nextPageBtn.removeAttribute('disabled');
  btnToEnd.removeAttribute('disabled');

  currentPage = 1;
  document.querySelector('.pagination-btn_current').textContent = currentPage;

  catalog.innerHTML = '';
  createCatalogPage(limit, limit * currentPage - limit);
};

const pageToEnd = () => {
  nextPageBtn.setAttribute('disabled', 'true');
  btnToEnd.setAttribute('disabled', 'true');
  prevPageBtn.removeAttribute('disabled');
  btnToStart.removeAttribute('disabled');

  currentPage = Math.ceil(goodsAmount / limit);
  document.querySelector('.pagination-btn_current').textContent = currentPage;

  const lastLimit = goodsAmount % (currentPage - 1);
  console.log('lastLimit ', lastLimit);

  catalog.innerHTML = '';
  createCatalogPage(lastLimit, limit * currentPage - limit);
};

export const pagination = () => {
  nextPageBtn.addEventListener('click', pagePlus);
  prevPageBtn.addEventListener('click', pageMinus);
  btnToStart.addEventListener('click', pageToFirst);
  btnToEnd.addEventListener('click', pageToEnd);
};
