import { createCard } from './createCard';
import { getData, getCard } from './getData';
import { pagination } from './pagination';
import { catalog } from './consts';

let identifier;

const createCards = async (countForLimit, countForOffset) => {
  const data = await getData(countForLimit, countForOffset);
  const cardContent = await getCard(data);

  cardContent.forEach((el) => {
    //TODO упорядочить список если api будет возвращать неупорядоченный

    if (identifier !== el.id) {
      identifier = el.id;
      catalog.appendChild(createCard(el.product, el.id, el.price, el.brand));
    }
  });
};

export const createCatalogPage = async (countForLimit, countForOffset) => {
  await createCards(countForLimit, countForOffset);

  if (document.querySelectorAll('.card').length < 50) {
    const limit = 50 - document.querySelectorAll('.card').length;

    await createCards(limit, 50);
  }

  pagination();
};
