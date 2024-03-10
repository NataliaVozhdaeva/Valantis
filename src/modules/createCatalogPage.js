import { createCard } from './createCard';
import { getData, getCard, getFilteredArray } from './getData';
import { pagination } from './pagination';
import { catalog, additionalItem, lastPageNum, limit } from './consts';
import { filterItems } from './filterCards';

let identifier;
let filteredCatalog = [];
let filteredItemIndex = 0;

let currentFilteredPage = 1;
let lastFilteredPage;

const createFilterPaginatinBtn = (classNames, text = 1) => {
  const filteredPaginationBtn = document.createElement('btn');
  filteredPaginationBtn.className = classNames;
  filteredPaginationBtn.textContent = text;
  return filteredPaginationBtn;
};

const pagePlusFiltered = () => {
  console.log('nextPageBtn');
};

const pageToEndFiltered = () => {
  const currentFilteredPage = lastFilteredPage;
  console.log('currentFilteredPage ', currentFilteredPage);
  paginationForFiltered(currentFilteredPage);
  const lastPageItemsAmount = filteredCatalog.length % limit;
  catalog.innerHTML = '';
  createCards(filteredCatalog.slice(-(lastPageItemsAmount - additionalItem.size)));
};

const paginationForFiltered = (currentFilteredPage) => {
  const pagination = document.querySelector('.pagination');
  pagination.innerHTML = '';

  const filteredPaginationBtnCurrent = createFilterPaginatinBtn('btn pagination-btn fpb_current', currentFilteredPage);
  pagination.append(filteredPaginationBtnCurrent);

  const filteredPaginationBtnNext = createFilterPaginatinBtn('btn pagination-btn fpb_next', '>');
  pagination.append(filteredPaginationBtnNext);
  filteredPaginationBtnNext.addEventListener('click', pagePlusFiltered);

  const filteredPaginationBtnToEnd = createFilterPaginatinBtn('btn pagination-btn fpb_finish', '>>');
  pagination.append(filteredPaginationBtnToEnd);
  filteredPaginationBtnToEnd.addEventListener('click', pageToEndFiltered);

  // btnToStart.addEventListener('click', () => {
  //   console.log('btnToStart');
  // });

  // btnToEnd.addEventListener('click', () => {
  //   nextPageBtn.setAttribute('disabled', 'true');
  //   btnToEnd.setAttribute('disabled', 'true');
  //   prevPageBtn.removeAttribute('disabled');
  //   btnToStart.removeAttribute('disabled');

  //   lastPage = Math.ceil(filteredCatalog.length / limit);
  //   currentPageEl.textContent = lastPage;

  //   catalog.innerHTML = '';
  //   const lastPageItemsAmount = (filteredCatalog.length % limit) - additionalItem.size;

  //   createCards(filteredCatalog.slice(-1, lastPageItemsAmount));
  // });
};

const getFilteredCards = async (userRequest) => {
  filteredCatalog.length = 0;
  const request = userRequest;

  const data = await getFilteredArray(request);
  const info = await getCard(data);

  console.log('info ', info);
  console.log('info length ', info.length);

  filteredCatalog.push(...info);

  console.log('filteredCatalog ', filteredCatalog.length);
  console.log('filteredCatalog flat ', filteredCatalog.flat());

  lastFilteredPage = Math.ceil(filteredCatalog.length / limit);
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
  console.log('content ', content.length);

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

export const createCatalogPage = async (countForLimit = limit, countForOffset = 0, isFiltered = null) => {
  const filterSubmit = document.querySelector('.btn_filter');
  filterSubmit.setAttribute('disabled', 'true');
  const filterRequest = isFiltered;

  const data = filterRequest ? await getFilteredCards(filterRequest) : await getInfo(countForLimit, countForOffset);
  isFiltered ? await createCards(data.slice(0, limit)) : await createCards(data);
  if (isFiltered) filteredItemIndex = limit;

  // В запросе на первые 50 id для первой страницы возвращается одинаковый id под индексами 25 и 26 (58a3eff4-e06d-468d-9130-d3092a2574a5)
  // (и на каждый приходится по 2 карточки в запросе айтемов - то есть 4 карточки "Золотые серьги СССР с бриллиантами")
  // => приходится дозапрашивать еще одну карточку (из следующих 50) и сдвигать оффсет.
  // Так как такие штуки могут встречаться и дальше в базе, будем проверять каждую страницу.

  if (
    !isFiltered &&
    document.getElementsByClassName('card').length < limit &&
    document.querySelector('.pagination-btn_current').textContent != lastPageNum
  ) {
    const additionalimit = limit - document.querySelectorAll('.card').length;
    const additionatData = await getInfo(additionalimit, countForOffset + countForLimit);
    await createCards(additionatData, true);
  }

  if (
    isFiltered &&
    document.getElementsByClassName('card').length < limit &&
    filteredCatalog.flat().length > 50 &&
    document.querySelector('.pagination-btn_current').textContent != lastFilteredPage
  ) {
    const additionalimit = limit - document.querySelectorAll('.card').length;
    await createCards(filteredCatalog.slice(filteredItemIndex, filteredItemIndex + additionalimit), true);
    filteredItemIndex = filteredItemIndex + additionalimit;
  }

  isFiltered ? paginationForFiltered(currentFilteredPage) : pagination();
  filterSubmit.removeAttribute('disabled');
};
