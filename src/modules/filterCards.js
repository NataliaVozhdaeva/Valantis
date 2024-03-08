import { createCatalogPage } from './createCatalogPage';
import { limit, filterTerm } from './consts';

const applyBtn = document.querySelector('.btn_filter');
const filterByNameField = document.querySelector('.filter-item_name');

const filterItems = () => {
  const request = filterByNameField.value;
  filterTerm.add(request);
  createCatalogPage(limit, 0, request);
};

applyBtn.addEventListener('click', filterItems);

export { filterItems };
