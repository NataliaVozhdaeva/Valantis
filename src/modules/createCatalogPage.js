import { createCard } from './createCard';
import { getData, getCard, getFilteredArray } from './getData';
import { pagination } from './pagination';
import { catalog, limit, additionalItem, ItemsInBase } from './consts';
import { filterItems } from './filterCards';

let identifier;
let counter = 0;

const getFilteredCards = async (userRequest) => {
  const request = userRequest;
  try {
    const data = await getFilteredArray(request);
    // console.log('getFilteredCards', data);
    catalog.innerHTML = '';
    const info = await getCard(data);

    return info;
  } catch (error) {
    console.error;
    identifier = null;
    // await getFilteredCards();
  }
};

const getInfo = async (countForLimit, countForOffset) => {
  const currentLimit = countForLimit;
  const currentOffset = countForOffset;

  try {
    const data = await getData(currentLimit, currentOffset);

    // if (!data) {
    //   counter++;
    //   if (counter < 5) {
    //     await getInfo(currentLimit, currentOffset);
    //   }
    // }
    const info = await getCard(data);

    console.log('info ', info);
    return info;
  } catch (catchID) {
    console.error(catchID);
    identifier = null;
    await getInfo(currentLimit, currentOffset);
  }
};

const createCards = async (cardContent, isAdded = false) => {
  const content = await cardContent;
  // if (!content) {
  //   while (counter < 10) {
  //     counter++;
  //     await createCards();
  //   }
  // }

  if (content.length > 0) {
    content.forEach((el) => {
      //TODO упорядочить список если api будет возвращать неупорядоченный

      if (identifier !== el.id) {
        identifier = el.id;

        if (isAdded) {
          additionalItem.add(el.id);
        }
        catalog.appendChild(createCard(el.product, el.id, el.price, el.brand));
      }
    });
  } else {
    const emptyCatalogCard = document.createElement('li');
    emptyCatalogCard.className = 'empty-message';
    emptyCatalogCard.textContent = 'Похоже, в каталоге нет того, что вы ищите :(';
    catalog.appendChild(emptyCatalogCard);
  }
};

export const createCatalogPage = async (countForLimit = 50, countForOffset = 0, isFiltered = null) => {
  const filterRequest = isFiltered;
  const data = filterRequest ? await getFilteredCards(filterRequest) : await getInfo(countForLimit, countForOffset);
  await createCards(data);

  const lastPage = Math.ceil(ItemsInBase / limit);

  if (
    document.getElementsByClassName('card').length < 50 &&
    document.querySelector('.pagination-btn_current').textContent != lastPage &&
    !isFiltered
  ) {
    // В запросе на первые 50 id для первой страницы возвращается одинаковый id под индексами 25 и 26 (58a3eff4-e06d-468d-9130-d3092a2574a5)
    // (и на каждый приходится по 2 карточки в запросе айтемов - то есть 4 карточки "Золотые серьги СССР с бриллиантами")
    // => приходится дозапрашивать еще одну карточку (из следующих 50) и сдвигать оффсет.
    // Так как такие штуки могут встречаться и дальше в базе, будем проверять каждую страницу.

    const additionalimit = 50 - document.querySelectorAll('.card').length;
    const additionatData = await getInfo(additionalimit, countForOffset + countForLimit);
    createCards(additionatData, true);
  }

  pagination();
};
