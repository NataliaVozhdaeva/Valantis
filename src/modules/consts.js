import { getFields } from './getData';

const additionalItem = new Set();
const catalog = document.querySelector('.cards');
const limit = 50;
const getInfo = async () => {
  const res = await getFields();
  // if (!res) {
  //   await getInfo();
  // }
  return res.result;
};
const data = await getInfo();
// const ItemsInBase = (await data) ? data.length : getInfo();
const ItemsInBase = data.length;
export { catalog, limit, additionalItem, ItemsInBase, data };
