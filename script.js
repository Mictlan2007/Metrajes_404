const filterButtons = document.querySelectorAll('.filter-pill');
const cards = document.querySelectorAll('.video-card');
const searchInput = document.getElementById('video-search');

const applyFilters = () => {
  const activeFilter = document.querySelector('.filter-pill.active')?.dataset.filter || 'all';
  const query = searchInput.value.trim().toLowerCase();

  cards.forEach((card) => {
    const category = card.dataset.category;
    const title = card.dataset.title.toLowerCase();
    const matchesCategory = activeFilter === 'all' || category === activeFilter;
    const matchesSearch = !query || title.includes(query);

    card.classList.toggle('hidden', !(matchesCategory && matchesSearch));
  });
};

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    filterButtons.forEach((btn) => btn.classList.toggle('active', btn === button));
    applyFilters();
  });
});

searchInput.addEventListener('input', applyFilters);

