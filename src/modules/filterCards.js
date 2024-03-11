import { createCatalogPage } from './createCatalogPage';
import { limit, catalog, filters } from './consts';
import { paginationInit } from './pagination';

const filterSection = document.querySelector('.filter');
const cleanerBtn = document.querySelector('.btn_filter__clean');

const getCategory = (filterKey) => {
  let filterValue;
  filters.forEach((el) => {
    if (el.dataset.filter === filterKey) {
      filterValue = el.value;
    } else {
      el.value = '';
    }
  });
  return filterValue;
};

const filterItems = (e) => {
  const element = e.target;
  if (element.classList.contains('btn_item')) {
    const filterKey = e.target.dataset.filter;
    const filterValue = getCategory(filterKey);
    const request = { filterBy: filterKey, value: filterValue };

    if (request.value) {
      catalog.innerHTML = '';
      createCatalogPage(limit, 0, request);
    }
  }
};

const cleanFilters = () => {
  catalog.innerHTML = '';
  paginationInit();
  createCatalogPage(limit, 0, null);
};

cleanerBtn.addEventListener('click', cleanFilters);
filterSection.addEventListener('click', filterItems);

export { filterItems, cleanFilters };
