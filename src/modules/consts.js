import { getFields } from './getData';

const additionalItem = new Set();
const catalog = document.querySelector('.cards');
const limit = 50;

// let filteredItems = new Set();

const getAllItemsAmount = async () => {
  const res = await getFields();
  return await res.result.length;
};

const itemsAmount = await getAllItemsAmount();
const lastPageNum = Math.ceil(itemsAmount / limit);

export { catalog, limit, additionalItem, lastPageNum };
