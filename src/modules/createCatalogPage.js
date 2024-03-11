import { createCard } from './createCard';
import { getData, getCard, getFilteredProducts, getFilteredBrands, getFilteredPrices } from './getData';
import { pagination } from './pagination';
import { catalog, lastPageNum, limit, filters } from './consts';
import { createLoader } from './createLoader';
import { filterItems } from './filterCards';

let identifier;
let additionalItem = new Set();
let currentFilteredPage = 1;
let filteredIds = [];
let lastFilteredPage;

const createFilterPaginatinBtn = (classNames, text) => {
  const filteredPaginationBtn = document.createElement('btn');
  filteredPaginationBtn.className = classNames;
  filteredPaginationBtn.textContent = text;
  return filteredPaginationBtn;
};

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

  document.querySelector('.pagination-btn_prev').removeAttribute('disabled');
  document.querySelector('.pagination-btn_start').removeAttribute('disabled');

  if (currentFilteredPage === lastFilteredPage) {
    document.querySelector('.pagination-btn_next').setAttribute('disabled', 'true');
    document.querySelector('.pagination-btn_finish').setAttribute('disabled', 'true');
  }
};

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
  document.querySelector('.pagination-btn_next').removeAttribute('disabled');
  document.querySelector('.pagination-btn_finish').removeAttribute('disabled');

  if (currentFilteredPage == 1) {
    document.querySelector('.pagination-btn_prev').setAttribute('disabled', 'true');
    document.querySelector('.pagination-btn_start').setAttribute('disabled', 'true');
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
  document.querySelector('.pagination-btn_prev').setAttribute('disabled', 'true');
  document.querySelector('.pagination-btn_start').setAttribute('disabled', 'true');
  document.querySelector('.pagination-btn_next').removeAttribute('disabled');
  document.querySelector('.pagination-btn_finish').removeAttribute('disabled');
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
  document.querySelector('.pagination-btn_prev').removeAttribute('disabled');
  document.querySelector('.pagination-btn_start').removeAttribute('disabled');
  document.querySelector('.pagination-btn_next').setAttribute('disabled', 'true');
  document.querySelector('.pagination-btn_finish').setAttribute('disabled', 'true');
};

const paginationForFiltered = (pageNum) => {
  const pagination = document.querySelector('.pagination');
  pagination.innerHTML = '';

  const filteredPaginationBtnToStart = createFilterPaginatinBtn('pagination-btn pagination-btn_start btn', '<<');
  pagination.append(filteredPaginationBtnToStart);
  filteredPaginationBtnToStart.addEventListener('click', pageToStartFiltered);

  const filteredPaginationBtnPrev = createFilterPaginatinBtn('pagination-btn pagination-btn_prev btn', '<');
  pagination.append(filteredPaginationBtnPrev);
  filteredPaginationBtnPrev.addEventListener('click', pageMinusFiltered);

  filteredPaginationBtnToStart.setAttribute('disabled', true);
  filteredPaginationBtnPrev.setAttribute('disabled', true);

  const filteredPaginationBtnCurrent = createFilterPaginatinBtn(
    'pagination-btn pagination-btn_current btn',
    currentFilteredPage
  );
  pagination.append(filteredPaginationBtnCurrent);

  const filteredPaginationBtnNext = createFilterPaginatinBtn('pagination-btn pagination-btn_next btn', '>');
  pagination.append(filteredPaginationBtnNext);
  filteredPaginationBtnNext.addEventListener('click', pagePlusFiltered);

  const filteredPaginationBtnToEnd = createFilterPaginatinBtn('pagination-btn pagination-btn_finish btn', '>>');
  pagination.append(filteredPaginationBtnToEnd);
  filteredPaginationBtnToEnd.addEventListener('click', pageToEndFiltered);

  if (pageNum === lastFilteredPage) {
    filteredPaginationBtnNext.setAttribute('disabled', true);
    filteredPaginationBtnToEnd.setAttribute('disabled', true);
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
  return await getFilteredCards(filteredIds.slice(0, limit));
};

const getFilteredCards = async (ids) => {
  lastFilteredPage = Math.ceil(filteredIds.length / limit);
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
  if (additionalItem.size === 0 || document.querySelector('.pagination-btn_current').textContent == 1) {
    currentOffset = countForOffset;
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

  if (isFiltered) {
    additionalItem = new Set();
    currentFilteredPage = 1;
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

  isFiltered ? paginationForFiltered(currentFilteredPage) : pagination();
  filterSubmit.forEach((el) => el.removeAttribute('disabled'));
};
