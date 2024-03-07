// import { getFields } from './getData';
import { data, limit } from './consts';
import { createCatalogPage } from './createCatalogPage';

const applyBtn = document.querySelector('.btn_filter');
const filterByNameField = document.querySelector('.filter-item_name');

const filterItems = () => {
  const request = filterByNameField.value;

  createCatalogPage(50, 0, request);
};

applyBtn.addEventListener('click', filterItems);

export { filterItems };
