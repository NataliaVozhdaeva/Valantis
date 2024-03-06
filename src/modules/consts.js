import { getFields } from './getData';

const catalog = document.querySelector('.cards');
const limit = 50;
const getLength = async () => {
  const res = await getFields();

  return res.result.length;
};
let data = await getLength();

const ItemsInBase = (await data) ? data : getLength();
let additionalItem = new Set();

export { catalog, limit, additionalItem, ItemsInBase };
