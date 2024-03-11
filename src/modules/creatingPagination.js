const createPaginationBtn = (classNames, text) => {
  const filteredPaginationBtn = document.createElement('btn');
  filteredPaginationBtn.className = classNames;
  filteredPaginationBtn.textContent = text;
  return filteredPaginationBtn;
};

export const createPagination = () => {
  const pagination = document.querySelector('.pagination');
  pagination.innerHTML = '';

  const btnToStart = createPaginationBtn('pagination-btn pagination-btn_start btn', '<<');
  pagination.append(btnToStart);

  const btnPrev = createPaginationBtn('pagination-btn pagination-btn_prev btn', '<');
  pagination.append(btnPrev);

  btnToStart.setAttribute('disabled', true);
  btnPrev.setAttribute('disabled', true);

  const btnCurrent = createPaginationBtn('pagination-btn pagination-btn_current btn', '1');
  pagination.append(btnCurrent);

  const btnNext = createPaginationBtn('pagination-btn pagination-btn_next btn', '>');
  pagination.append(btnNext);

  const btnToEnd = createPaginationBtn('pagination-btn pagination-btn_finish btn', '>>');
  pagination.append(btnToEnd);
};
