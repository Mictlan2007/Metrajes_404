const searchInput = document.getElementById('video-search');

if (searchInput) {
  searchInput.addEventListener('input', () => {
    const value = searchInput.value.trim().toLowerCase();
    const cards = document.querySelectorAll('.recommendation-item');

    cards.forEach((card) => {
      const text = card.textContent.toLowerCase();
      const show = !value || text.includes(value);
      card.style.display = show ? 'grid' : 'none';
    });
  });
}
