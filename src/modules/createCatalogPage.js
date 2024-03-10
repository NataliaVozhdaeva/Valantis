import { createCard } from './createCard';
import { getData, getCard, getFilteredProducts, getFilteredBrands, getFilteredPrices } from './getData';
import { pagination } from './pagination';
import { catalog, lastPageNum, limit, filters } from './consts';
import { createLoader } from './createLoader';
import { filterItems } from './filterCards';

let identifier;
export let additionalItem = new Set();
let filteredCatalog = [];
let filteredItemIndex = 0;
let lastPageItemsAmount = 0;

let currentFilteredPage = 1;
let lastFilteredPage;

// const loader = document.getElementById('cards_loader');

const createFilterPaginatinBtn = (classNames, text = 1) => {
  const filteredPaginationBtn = document.createElement('btn');
  filteredPaginationBtn.className = classNames;
  filteredPaginationBtn.textContent = text;
  return filteredPaginationBtn;
};

const pagePlusFiltered = () => {
  currentFilteredPage++;
  paginationForFiltered(currentFilteredPage);
  catalog.innerHTML = '';

  if (currentFilteredPage === lastFilteredPage) {
    createCards(filteredCatalog.slice(filteredItemIndex, filteredItemIndex + lastPageItemsAmount));
    console.log('plus to ', filteredItemIndex, filteredItemIndex + limit, 'i ', filteredItemIndex);
  } else {
    createCards(filteredCatalog.slice(filteredItemIndex, filteredItemIndex + limit));
    console.log('plus to ', filteredItemIndex, filteredItemIndex + limit, 'i ', filteredItemIndex);

    filteredItemIndex = additionalItem.size + limit * currentFilteredPage;
  }
};

const pageMinusFiltered = () => {
  currentFilteredPage = currentFilteredPage - 1;

  paginationForFiltered(currentFilteredPage);
  catalog.innerHTML = '';

  if (currentFilteredPage === 1) {
    createCards(filteredCatalog.slice(0, limit + additionalItem.size));
    filteredItemIndex = 0;
  } else {
    createCards(filteredCatalog.slice(filteredItemIndex - limit * 2, filteredItemIndex - limit));
    console.log('minus from ', filteredItemIndex - limit, filteredItemIndex, 'i ', filteredItemIndex);

    filteredItemIndex = filteredItemIndex - limit;
  }
};

const pageToEndFiltered = () => {
  currentFilteredPage = lastFilteredPage;
  paginationForFiltered(currentFilteredPage);
  catalog.innerHTML = '';
  createCards(filteredCatalog.slice(filteredCatalog.length - lastPageItemsAmount, filteredCatalog.length));

  console.log('end to ', filteredCatalog.length - lastPageItemsAmount, filteredCatalog.length, 'i ', filteredItemIndex);
  filteredItemIndex = filteredCatalog.length - lastPageItemsAmount;
  console.log('last i ', filteredItemIndex);
};

const pageToStartFiltered = () => {
  currentFilteredPage = 1;
  paginationForFiltered(currentFilteredPage);
  catalog.innerHTML = '';
  createCards(filteredCatalog.slice(0, limit + additionalItem.size));
  filteredItemIndex = 0;
};

const paginationForFiltered = (currentFilteredPage) => {
  const pagination = document.querySelector('.pagination');
  pagination.innerHTML = '';

  const filteredPaginationBtnToStart = createFilterPaginatinBtn('btn pagination-btn fpb_start', '<<');
  pagination.append(filteredPaginationBtnToStart);
  filteredPaginationBtnToStart.addEventListener('click', pageToStartFiltered);

  const filteredPaginationBtnPrev = createFilterPaginatinBtn('btn pagination-btn fpb_prev', '<');
  pagination.append(filteredPaginationBtnPrev);
  filteredPaginationBtnPrev.addEventListener('click', pageMinusFiltered);

  if (currentFilteredPage === 1) {
    filteredPaginationBtnToStart.setAttribute('disabled', true);
    filteredPaginationBtnPrev.setAttribute('disabled', true);
  }

  const filteredPaginationBtnCurrent = createFilterPaginatinBtn(
    'btn pagination-btn pagination-btn_current',
    currentFilteredPage
  );
  pagination.append(filteredPaginationBtnCurrent);

  const filteredPaginationBtnNext = createFilterPaginatinBtn('btn pagination-btn fpb_next', '>');
  pagination.append(filteredPaginationBtnNext);
  filteredPaginationBtnNext.addEventListener('click', pagePlusFiltered);

  const filteredPaginationBtnToEnd = createFilterPaginatinBtn('btn pagination-btn fpb_finish', '>>');
  pagination.append(filteredPaginationBtnToEnd);
  filteredPaginationBtnToEnd.addEventListener('click', pageToEndFiltered);

  if (currentFilteredPage === lastFilteredPage) {
    filteredPaginationBtnNext.setAttribute('disabled', true);
    filteredPaginationBtnToEnd.setAttribute('disabled', true);
  }
};

const getFilteredCards = async (userRequest) => {
  filteredCatalog.length = 0;
  additionalItem = new Set();
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

  const info = await getCard(data);

  filteredCatalog.push(...info);
  lastPageItemsAmount = filteredCatalog.length % limit;
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

  if (content.length > 0) {
    content.forEach((el) => {
      //TODO упорядочить список если api будет возвращать неупорядоченный

      if (identifier !== el.id) {
        identifier = el.id;

        if (isAdded) {
          additionalItem.add(el.id);
        }

        catalog.prepend(createCard(el.product, el.id, el.price, el.brand));
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
  filteredItemIndex = limit;

  const filterSubmit = document.querySelectorAll('.btn_filter');
  const filterRequest = isFiltered;

  filters.forEach((el) => {
    el.value = '';
  });

  filterSubmit.forEach((el) => {
    el.setAttribute('disabled', 'true');
  });

  const data = filterRequest ? await getFilteredCards(filterRequest) : await getInfo(countForLimit, countForOffset);
  isFiltered ? await createCards(data.slice(0, limit)) : await createCards(data);

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

  document.getElementById('cards_loader').classList.add('hidden');
  document.getElementById('cards_loader').classList.remove('additional');

  isFiltered ? paginationForFiltered(currentFilteredPage) : pagination();
  filterSubmit.forEach((el) => {
    el.removeAttribute('disabled');
  });
};
