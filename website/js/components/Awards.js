export function renderAwards(awards) {
  const container = document.querySelector('.award-list');
  if (!container) return;

  container.innerHTML = awards.map(award => `
    <div class="award-item">
      <div class="award-dot"></div>
      <div class="award-info">
        <span class="award-title">${award.title}</span>
        <span class="award-year">${award.date}</span>
      </div>
    </div>
  `).join('');
}
