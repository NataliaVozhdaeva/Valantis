import { createCatalogPage } from './createCatalogPage';
import { limit, catalog, filters } from './consts';

const filterSection = document.querySelector('.filter');

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
  if (element.classList.contains('btn')) {
    catalog.innerHTML = '';

    const filterKey = e.target.dataset.filter;
    const filterValue = getCategory(filterKey);
    const request = { filterBy: filterKey, value: filterValue };

    console.log('filtered request ', request);

    request.value ? createCatalogPage(limit, 0, request) : createCatalogPage(limit, 0, null);
  }
};

filterSection.addEventListener('click', filterItems);

export { filterItems };
