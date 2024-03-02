export const createCard = (title, id, price, brand) => {
  const card = document.createElement('li');
  card.className = 'cards-item card';
  const cardTitle = document.createElement('h4');
  cardTitle.className = 'card-title';
  cardTitle.textContent = title;
  const cardId = document.createElement('span');
  cardId.className = 'card-id';
  cardId.textContent = `id: ${id}`;
  const cardPrice = document.createElement('span');
  cardPrice.className = 'card-price';
  cardPrice.textContent = `${price}\u00A0\u20BD`;
  const cardBrand = document.createElement('span');
  cardBrand.className = 'card-brand';
  cardBrand.textContent = brand ? `Бренд:\u00A0${brand}` : 'Бренд неизвестен';
  const cardBtn = document.createElement('button');
  cardBtn.className = 'card-btn';
  cardBtn.textContent = 'В корзину';
  const img = document.createElement('img');
  img.className = 'card-img';
  img.setAttribute('src', './assets/card-img.png');
  img.setAttribute('title', 'скоро здесь будет фото');
  img.setAttribute('alt', 'фото изделия');

  const createHandler = (child, parent = card) => {
    parent.appendChild(child);
  };

  createHandler(cardTitle);
  createHandler(img);
  createHandler(cardPrice);
  createHandler(cardId);
  createHandler(cardBrand);
  createHandler(cardBtn);

  return card;
};
