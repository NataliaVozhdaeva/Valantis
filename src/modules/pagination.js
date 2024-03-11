import { createCatalogPage } from './createCatalogPage';
import { createPagination } from './creatingPagination';
import {
  catalog,
  limit,
  lastPageNum,
  notToGoBack,
  notToGoFuther,
  toGoBackLong,
  toGoFutherLong,
  toGoBackShort,
  toGoFutherShort,
  hangListeners,
} from './consts';

let currentPage = 1;

export const paginationInit = () => {
  createPagination();
  hangListeners(pageToFirst, pageMinus, pagePlus, pageToEnd);
  currentPage = 1;
};

const pagePlus = () => {
  currentPage++;
  document.querySelector('.pagination-btn_current').textContent = currentPage;

  if (currentPage === 2) {
    toGoBackShort();
  }

  if (currentPage === lastPageNum) {
    notToGoFuther();
  }

  catalog.innerHTML = '';
  createCatalogPage(limit, limit * (currentPage - 1));
};

const pageMinus = () => {
  currentPage--;
  document.querySelector('.pagination-btn_current').textContent = currentPage;

  if (currentPage === 1) {
    notToGoBack();
  }

  if (currentPage === lastPageNum - 1) {
    toGoFutherShort();
  }

  catalog.innerHTML = '';
  createCatalogPage(limit, limit * (currentPage - 1));
};

const pageToFirst = () => {
  toGoFutherLong();

  currentPage = 1;
  document.querySelector('.pagination-btn_current').textContent = currentPage;

  catalog.innerHTML = '';
  createCatalogPage(limit, limit * (currentPage - 1));
};

const pageToEnd = () => {
  toGoBackLong();

  currentPage = lastPageNum;
  document.querySelector('.pagination-btn_current').textContent = currentPage;

  catalog.innerHTML = '';
  createCatalogPage(limit, limit * (currentPage - 1));
};

export const pagination = () => {
  hangListeners(pageToFirst, pageMinus, pagePlus, pageToEnd);
};
