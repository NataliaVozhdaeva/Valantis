import { brands } from './consts';

export const createBrandsSelect = () => {
  const selectContainer = document.querySelector('.filter-item_brand');
  brands.forEach((el) => {
    const option = document.createElement('option');
    option.setAttribute('value', el);
    option.textContent = el;
    selectContainer.append(option);
  });
};
