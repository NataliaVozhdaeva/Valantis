import { createCard } from './createCard';
import { getData, getCard } from './getData';

export const createCatalog = async () => {
  const data = await getData();
  const cardContent = await getCard(data.result);

  // console.log('data length', data.result.length);
  // console.log('cardContent length', cardContent.result.length);
  console.log(cardContent);

  const catalog = document.querySelector('.cards');
  cardContent.forEach((el) => {
    catalog.appendChild(createCard(el.product, el.id, el.price, el.brand));
  });
};
