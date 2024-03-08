import { getFields } from './getData';
import { createCatalogPage } from './createCatalogPage';
import { catalog, limit, additionalItem, filterTerm } from './consts';

const getInfo = async () => {
  const res = await getFields();
  return await res.result.length;
};

let currentPage = 1;
let goodsAmount = await getInfo();
const lastPage = Math.ceil(goodsAmount / limit);

console.log('goodsAmount ', goodsAmount);

const nextPageBtn = document.querySelector('.pagination-btn_next');
const prevPageBtn = document.querySelector('.pagination-btn_prev');
const btnToStart = document.querySelector('.pagination-btn_start');
const btnToEnd = document.querySelector('.pagination-btn_finish');

const pagePlus = () => {
  currentPage++;
  console.log('page+ ', filterTerm);

  document.querySelector('.pagination-btn_current').textContent = currentPage;

  if (currentPage === 2) {
    prevPageBtn.removeAttribute('disabled');
    btnToStart.removeAttribute('disabled');
  }

  if (currentPage === lastPage) {
    nextPageBtn.setAttribute('disabled', 'true');
    btnToEnd.setAttribute('disabled', 'true');
  }

  catalog.innerHTML = '';

  try {
    additionalItem.size === 0
      ? createCatalogPage(limit, limit * (currentPage - 1))
      : createCatalogPage(limit, limit * (currentPage - 1) + additionalItem.size);
  } catch (catchID) {
    console.error(catchID);
    createCatalogPage(limit, limit * (currentPage - 1));
  }
};

const pageMinus = () => {
  currentPage--;
  document.querySelector('.pagination-btn_current').textContent = currentPage;

  if (currentPage === 1) {
    prevPageBtn.setAttribute('disabled', 'true');
    btnToStart.setAttribute('disabled', 'true');
  }

  if (currentPage === lastPage - 1) {
    nextPageBtn.removeAttribute('disabled');
    btnToEnd.removeAttribute('disabled');
  }

  catalog.innerHTML = '';

  try {
    if (additionalItem.size === 0) {
      createCatalogPage(limit, limit * (currentPage - 1));
    } else {
      currentPage !== 1
        ? createCatalogPage(limit, limit * (currentPage - 1) + additionalItem.size)
        : createCatalogPage(limit, 0);
    }
  } catch (catchID) {
    console.error(catchID);
    createCatalogPage(limit, limit * currentPage - limit);
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

  try {
    createCatalogPage(limit, limit * currentPage - limit);
  } catch (catchID) {
    console.error(catchID);
    createCatalogPage(limit, limit * currentPage - limit);
  }
};

const pageToEnd = () => {
  nextPageBtn.setAttribute('disabled', 'true');
  btnToEnd.setAttribute('disabled', 'true');
  prevPageBtn.removeAttribute('disabled');
  btnToStart.removeAttribute('disabled');

  currentPage = lastPage;
  document.querySelector('.pagination-btn_current').textContent = currentPage;

  const lastLimit = goodsAmount % (currentPage - 1);

  catalog.innerHTML = '';

  try {
    // createCatalogPage(lastLimit, limit * currentPage - limit);
    additionalItem.size === 0
      ? createCatalogPage(lastLimit, limit * (currentPage - 1), null, lastPage)
      : createCatalogPage(lastLimit, limit * (currentPage - 1) + additionalItem.size, null, lastPage);
  } catch (catchID) {
    console.error(catchID);

    additionalItem.size === 0
      ? createCatalogPage(lastLimit, limit * (currentPage - 1))
      : createCatalogPage(lastLimit, limit * (currentPage - 1) + additionalItem.size);
  }
};

export const pagination = () => {
  nextPageBtn.addEventListener('click', pagePlus);
  prevPageBtn.addEventListener('click', pageMinus);
  btnToStart.addEventListener('click', pageToFirst);
  btnToEnd.addEventListener('click', pageToEnd);
};
