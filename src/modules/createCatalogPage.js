import { createCard } from './createCard';
import { getData, getCard } from './getData';
import { pagination } from './pagination';
import { catalog } from './consts';
import { additionalItem } from './consts';

let identifier;

const createCards = async (countForLimit, countForOffset, isAdded = false) => {
  const data = await getData(countForLimit, countForOffset);
  const cardContent = await getCard(data);

  cardContent.forEach((el) => {
    //TODO упорядочить список если api будет возвращать неупорядоченный

    if (identifier !== el.id) {
      identifier = el.id;

      if (isAdded) {
        additionalItem.push(el.id);
      }
      catalog.appendChild(createCard(el.product, el.id, el.price, el.brand));
    }
  });

  if (document.querySelectorAll('.card').length < 50) {
    // В запросе на первые 50 id для первой страницы возвращается одинаковый id под индексами 25 и 26 (58a3eff4-e06d-468d-9130-d3092a2574a5)
    // (и на каждый приходится по 2 карточки в запросе айтемов - то есть 4 карточки "Золотые серьги СССР с бриллиантами")
    // => приходится дозапрашивать еще одну карточку (из следующих 50) и сдвигать оффсет

    const additionalimit = 50 - document.querySelectorAll('.card').length;
    await createCards(additionalimit, countForOffset + countForLimit, true);
  }
};

export const createCatalogPage = async (countForLimit = 50, countForOffset = 0) => {
  try {
    await createCards(countForLimit, countForOffset);
  } catch (catchID) {
    console.error(catchID);

    createCatalogPage(countForLimit, countForOffset);
  }

  pagination();
};
