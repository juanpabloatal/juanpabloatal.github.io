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

// Count PDF downloads and outbound links in GoatCounter, which only sees page views on its own.
document.addEventListener('click', (event) => {
  const link = event.target.closest('a[href]');
  if (!link || !window.goatcounter || !window.goatcounter.count) return;

  const url = new URL(link.href, location.href);
  const isFile = url.pathname.toLowerCase().endsWith('.pdf');
  const isOutbound = url.origin !== location.origin && url.protocol.startsWith('http');
  if (!isFile && !isOutbound) return;

  window.goatcounter.count({
    path: isFile ? url.pathname.split('/').pop() : url.href,
    title: link.closest('article')?.querySelector('h3')?.textContent.trim() || link.textContent.replace('↗', '').trim(),
    event: true,
  });
});
