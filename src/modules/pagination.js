import { createCatalogPage } from './createCatalogPage';
import { catalog, limit, additionalItem, lastPageNum } from './consts';

const currentPageEl = document.querySelector('.pagination-btn_current');
let currentPage = 1;

const nextPageBtn = document.querySelector('.pagination-btn_next');
const prevPageBtn = document.querySelector('.pagination-btn_prev');
const btnToStart = document.querySelector('.pagination-btn_start');
const btnToEnd = document.querySelector('.pagination-btn_finish');

const pagePlus = () => {
  currentPage++;
  currentPageEl.textContent = currentPage;

  if (currentPage === 2) {
    prevPageBtn.removeAttribute('disabled');
    btnToStart.removeAttribute('disabled');
  }

  if (currentPage === lastPageNum) {
    nextPageBtn.setAttribute('disabled', 'true');
    btnToEnd.setAttribute('disabled', 'true');
  }

  catalog.innerHTML = '';

  additionalItem.size === 0
    ? createCatalogPage(limit, limit * (currentPage - 1))
    : createCatalogPage(limit, limit * (currentPage - 1) + additionalItem.size);
};

const pageMinus = () => {
  currentPage--;
  currentPageEl.textContent = currentPage;

  if (currentPage === 1) {
    prevPageBtn.setAttribute('disabled', 'true');
    btnToStart.setAttribute('disabled', 'true');
  }

  if (currentPage === lastPageNum - 1) {
    nextPageBtn.removeAttribute('disabled');
    btnToEnd.removeAttribute('disabled');
  }

  catalog.innerHTML = '';

  if (additionalItem.size === 0) {
    createCatalogPage(limit, limit * (currentPage - 1));
  } else {
    currentPage !== 1
      ? createCatalogPage(limit, limit * (currentPage - 1) + additionalItem.size)
      : createCatalogPage(limit, 0);
  }
};

const pageToFirst = () => {
  prevPageBtn.setAttribute('disabled', 'true');
  btnToStart.setAttribute('disabled', 'true');
  nextPageBtn.removeAttribute('disabled');
  btnToEnd.removeAttribute('disabled');

  currentPage = 1;
  currentPageEl.textContent = currentPage;

  catalog.innerHTML = '';

  createCatalogPage(limit, limit * currentPage - limit);
};

const pageToEnd = () => {
  nextPageBtn.setAttribute('disabled', 'true');
  btnToEnd.setAttribute('disabled', 'true');
  prevPageBtn.removeAttribute('disabled');
  btnToStart.removeAttribute('disabled');

  currentPage = lastPageNum;
  currentPageEl.textContent = currentPage;

  catalog.innerHTML = '';

  additionalItem.size === 0
    ? createCatalogPage(limit, limit * (currentPage - 1))
    : createCatalogPage(limit, limit * (currentPage - 1) + additionalItem.size);
};

export const pagination = () => {
  nextPageBtn.addEventListener('click', pagePlus);
  prevPageBtn.addEventListener('click', pageMinus);
  btnToStart.addEventListener('click', pageToFirst);
  btnToEnd.addEventListener('click', pageToEnd);
};
