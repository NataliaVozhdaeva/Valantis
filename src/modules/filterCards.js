import { createCatalogPage } from './createCatalogPage';
import { limit, catalog } from './consts';

const applyBtn = document.querySelector('.btn_filter');
const filterByNameField = document.querySelector('.filter-item_name');

const filterItems = () => {
  catalog.innerHTML = '';
  const request = filterByNameField.value;
  createCatalogPage(limit, 0, request);
};

applyBtn.addEventListener('click', filterItems);

export { filterItems };
