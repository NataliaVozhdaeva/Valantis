import { getFields } from './getData';

const additionalItem = new Set();
const catalog = document.querySelector('.cards');
const limit = 50;

const getAllItemsAmount = async () => {
  const res = await getFields();
  return await res.result;
};
const dataFromFields = await getAllItemsAmount();
const itemsAmount = dataFromFields.length;
const lastPageNum = Math.ceil(itemsAmount / limit);
const fileredData = dataFromFields.filter((element) => element != null);
const brands = new Set(fileredData);
console.log(brands);

export { catalog, limit, additionalItem, lastPageNum, brands };
