import { createCatalogPage } from './createCatalogPage';
import { catalog } from './consts';

let currentPage = 1;
let limit = 50;

export const pagination = () => {
  const nextPageBtn = document.querySelector('.pagination-btn_next');
  const prevPageBtn = document.querySelector('.pagination-btn_prev');

  const pagePlus = () => {
    nextPageBtn.removeEventListener('click', pagePlus);
    currentPage += 1;
    document.querySelector('.pagination-btn_current').textContent = currentPage;

    catalog.innerHTML = '';
    createCatalogPage(limit, limit * currentPage - limit);

    if (currentPage === 2) {
      prevPageBtn.removeAttribute('disabled');
    }

    console.log('currentPage ', currentPage);
  };

  const pageMinus = () => {
    currentPage--;
    document.querySelector('.pagination-btn_current').textContent = currentPage;
    if (currentPage === 1) {
      prevPageBtn.setAttribute('disabled', 'true');
    }
  };

  nextPageBtn.addEventListener('click', pagePlus);
  prevPageBtn.addEventListener('click', pageMinus);
};
