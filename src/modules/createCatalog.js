import { createCard } from './createCard';
import { getData, getCard } from './getData';

export const createCatalogPage = async () => {
  const data = await getData();
  const cardContent = await getCard(data);

  const catalog = document.querySelector('.cards');
  let identifier;
  cardContent.forEach((el) => {
    if (identifier !== el.id) {
      identifier = el.id;
      catalog.appendChild(createCard(el.product, el.id, el.price, el.brand));
    }
  });

  if (document.querySelectorAll('.card').length < 50) {
    console.log('alarm', document.querySelectorAll('.card').length);

    const count = 50 - document.querySelectorAll('.card').length;
    const data = await getData(count, 50);
    const cardContent = await getCard(data);
    cardContent.forEach((el) => {
      if (identifier !== el.id) {
        identifier = el.id;
        catalog.appendChild(createCard(el.product, el.id, el.price, el.brand));
      }
    });
  }
};
