import { createCatalogPage } from './createCatalogPage';
import { limit, catalog } from './consts';

// const applyBtn = document.querySelector('.btn_filter');
// const filterByNameField = document.querySelector('.filter-item_name');

const searchBrandsBtn = document.querySelector('.btn_filter__brand');
const filterByBrands = document.querySelector('.filter-item_brand');

const filterItems = () => {
  catalog.innerHTML = '';
  const request = filterByBrands.value;
  createCatalogPage(limit, 0, request);
};

searchBrandsBtn.addEventListener('click', filterItems);

export { filterItems };
