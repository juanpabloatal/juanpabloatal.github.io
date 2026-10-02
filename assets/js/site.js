const filters = document.querySelectorAll('.filter');
const papers = document.querySelectorAll('.paper');

filters.forEach((filter) => {
  filter.addEventListener('click', () => {
    const category = filter.dataset.filter;

    filters.forEach((button) => button.classList.toggle('is-active', button === filter));
    papers.forEach((paper) => {
      paper.classList.toggle('is-hidden', category !== 'all' && paper.dataset.category !== category);
    });
  });
});

document.querySelector('#year').textContent = new Date().getFullYear();
