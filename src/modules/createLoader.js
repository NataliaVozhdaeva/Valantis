export const createLoader = () => {
  const loaderWrapper = document.createElement('li');
  loaderWrapper.id = 'cards_loader';
  const loader = document.createElement('div');
  loader.className = 'loader';
  loaderWrapper.append(loader);

  return loaderWrapper;
};
