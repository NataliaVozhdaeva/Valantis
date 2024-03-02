import { createCard } from './createCard';
import { getData, getCard } from './getData';

const createCards = async (countForLimit = 50, countForOffset = 0) => {
  const data = await getData(countForLimit, countForOffset);
  const cardContent = await getCard(data);

  const catalog = document.querySelector('.cards');
  let identifier;

  cardContent.forEach((el) => {
    if (identifier !== el.id) {
      identifier = el.id;
      catalog.appendChild(createCard(el.product, el.id, el.price, el.brand));
    }
  });
};

export const createCatalogPage = async () => {
  await createCards();

  if (document.querySelectorAll('.card').length < 50) {
    console.log('alarm', document.querySelectorAll('.card').length);

    const limit = 50 - document.querySelectorAll('.card').length;
    createCards(limit, 50);
  }
};
