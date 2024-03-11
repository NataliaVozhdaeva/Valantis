import { createCard } from './createCard';
import { getData, getCard, getFilteredProducts, getFilteredBrands, getFilteredPrices } from './getData';
import { pagination } from './pagination';
import { createLoader } from './createLoader';
import { filterItems } from './filterCards';
import { createPagination } from './creatingPagination';
import {
  catalog,
  lastPageNum,
  limit,
  filters,
  notToGoBack,
  notToGoFuther,
  toGoBackLong,
  toGoFutherLong,
  toGoBackShort,
  toGoFutherShort,
  hangListeners,
} from './consts';

let identifier;
let currentFilteredPage = 1;
let filteredIds = [];
let lastFilteredPage;
let additionalItem;

const pagePlusFiltered = async () => {
  currentFilteredPage++;
  catalog.innerHTML = '';

  document.querySelector('.pagination-btn_current').textContent = currentFilteredPage;
  catalog.append(createLoader());

  const from = limit * (currentFilteredPage - 1) + additionalItem.size;
  const to = from + limit;
  const currentIds = filteredIds.slice(from, to);
  const nextPageData = await getFilteredCards(currentIds);

  createCards(nextPageData);
  document.getElementById('cards_loader').classList.add('hidden');
  toGoBackShort();

  if (currentFilteredPage === lastFilteredPage) {
    notToGoFuther();
  }
};

//Пагинацию для данных, сортируемых на стороне клиента решила сделать отдельную, так как создание страницы
//предполагает обращение к серверу, а в случае с фильтром он не умеет учитывать смещение и лимит,
//а забирать всю пачку данных может быть накладно - вдруг у нас миллионы товаров?

const pageMinusFiltered = async () => {
  currentFilteredPage--;
  catalog.innerHTML = '';

  document.querySelector('.pagination-btn_current').textContent = currentFilteredPage;
  catalog.append(createLoader());

  const from = currentFilteredPage == 1 ? 0 : limit * (currentFilteredPage - 1) + additionalItem.size;
  const to = currentFilteredPage == 1 ? from + limit + additionalItem.size : from + limit;
  const currentIds = filteredIds.slice(from, to);
  const nextPageData = await getFilteredCards(currentIds);
  createCards(nextPageData);

  document.getElementById('cards_loader').classList.add('hidden');
  toGoFutherShort();

  if (currentFilteredPage == 1) {
    notToGoBack();
  }
};

const pageToStartFiltered = async () => {
  currentFilteredPage = 1;
  catalog.innerHTML = '';

  document.querySelector('.pagination-btn_current').textContent = currentFilteredPage;
  catalog.append(createLoader());

  const from = 0;
  const to = from + limit + additionalItem.size;
  const currentIds = filteredIds.slice(from, to);
  const nextPageData = await getFilteredCards(currentIds);
  createCards(nextPageData);

  document.getElementById('cards_loader').classList.add('hidden');
  toGoFutherLong();
};

const pageToEndFiltered = async () => {
  currentFilteredPage = lastFilteredPage;
  catalog.innerHTML = '';

  document.querySelector('.pagination-btn_current').textContent = currentFilteredPage;
  catalog.append(createLoader());

  const from =
    additionalItem.size === 0
      ? limit * (currentFilteredPage - 1)
      : limit * (currentFilteredPage - 1) + additionalItem.size;

  const to = filteredIds.length;
  const currentIds = filteredIds.slice(from, to);
  const nextPageData = await getFilteredCards(currentIds);

  createCards(nextPageData);

  document.getElementById('cards_loader').classList.add('hidden');
  toGoBackLong();
};

const paginationForFiltered = (pageNum) => {
  createPagination();
  hangListeners(pageToStartFiltered, pageMinusFiltered, pagePlusFiltered, pageToEndFiltered);

  if (pageNum == lastFilteredPage) {
    notToGoFuther();
  }
};

const getFilteredInfo = async (userRequest) => {
  const request = userRequest;
  let data;

  switch (userRequest.filterBy) {
    case 'brand':
      data = await getFilteredBrands(request.value);
      break;

    case 'price':
      data = await getFilteredPrices(request.value);
      break;

    default:
      data = await getFilteredProducts(request.value);
      break;
  }

  filteredIds = data;
  lastFilteredPage = Math.ceil(filteredIds.length / limit);
  return await getFilteredCards(filteredIds.slice(0, limit));
};

const getFilteredCards = async (ids) => {
  const cardsIds = ids;
  const info = await getCard(cardsIds);

  return info;
};

const getInfo = async (countForLimit, countForOffset) => {
  const currentLimit = countForLimit;
  const currentOffset = countForOffset;
  const data = await getData(currentLimit, currentOffset);
  const info = await getCard(data);

  return info;
};

const createCards = async (cardContent, isAdded = false) => {
  const content = await cardContent;

  if (content.length > 0) {
    content.forEach((el) => {
      //TODO упорядочить список если api будет возвращать неупорядоченный

      if (identifier !== el.id) {
        identifier = el.id;

        if (isAdded) {
          additionalItem.add(el.id);
        }

        catalog.append(createCard(el.product, el.id, el.price, el.brand));
      }
    });
  } else {
    const emptyCatalogCard = document.createElement('li');
    emptyCatalogCard.className = 'empty-message';
    emptyCatalogCard.textContent = 'Похоже, в каталоге нет того, что вы ищите :(';
    catalog.appendChild(emptyCatalogCard);
  }
};

export const createCatalogPage = async (countForLimit = limit, countForOffset = 0, isFiltered = null) => {
  catalog.append(createLoader());

  let currentOffset;
  if (document.querySelector('.pagination-btn_current').textContent == 1 || isFiltered) {
    currentOffset = countForOffset;
    additionalItem = new Set();
  } else {
    currentOffset = countForOffset + additionalItem.size;
  }

  const filterSubmit = document.querySelectorAll('.btn_filter');
  const filterRequest = isFiltered;

  filterSubmit.forEach((el) => {
    el.setAttribute('disabled', 'true');
  });

  if (!isFiltered) {
    filters.forEach((el) => {
      el.value = '';
    });
  }

  const data = filterRequest ? await getFilteredInfo(filterRequest) : await getInfo(countForLimit, currentOffset);
  await createCards(data);
  document.getElementById('cards_loader').classList.add('hidden');

  // В запросе на первые 50 id для первой страницы возвращается одинаковый id под индексами 25 и 26 (58a3eff4-e06d-468d-9130-d3092a2574a5)
  // (и на каждый приходится по 2 карточки в запросе айтемов - то есть 4 карточки "Золотые серьги СССР с бриллиантами")
  // => приходится дозапрашивать еще одну карточку (из следующих 50) и сдвигать оффсет.
  // Так как такие штуки могут встречаться и дальше в базе, будем проверять каждую страницу.

  if (
    !isFiltered &&
    document.getElementsByClassName('card').length < limit &&
    document.querySelector('.pagination-btn_current').textContent != lastPageNum
  ) {
    document.getElementById('cards_loader').classList.remove('hidden');
    document.getElementById('cards_loader').classList.add('additional');

    const additionalimit = limit - document.querySelectorAll('.card').length;
    const additionatData = await getInfo(additionalimit, countForOffset + countForLimit);
    await createCards(additionatData, true);
  }

  // В отфильтрованных данных этот баг тоже есть, поэтому нужна доп.проверка.
  // Мне кажется, этот вопрос стоило бы решить на стороне бэка, чтобы не монструозить тут...

  if (isFiltered && document.getElementsByClassName('card').length < limit && filteredIds.length > 50) {
    document.getElementById('cards_loader').classList.remove('hidden');
    document.getElementById('cards_loader').classList.add('additional');
    const additionalAmount = limit - document.querySelectorAll('.card').length;
    const additionalIds = filteredIds.slice(
      limit * currentFilteredPage,
      limit * currentFilteredPage + additionalAmount
    );
    const additionatData = await getFilteredCards(additionalIds);
    await createCards(additionatData, true);
  }

  document.getElementById('cards_loader').classList.add('hidden');
  document.getElementById('cards_loader').classList.remove('additional');

  isFiltered ? paginationForFiltered('1') : pagination();
  filterSubmit.forEach((el) => el.removeAttribute('disabled'));
};
