export function renderPapers(papers) {
  const container = document.querySelector('.paper-list');
  if (!container) return;

  container.innerHTML = papers.map(paper => `
    <div class="paper-card">
      <div class="paper-header">
        <h3>${paper.title}</h3>
        <span class="paper-date">${paper.date}</span>
      </div>
      <p class="paper-publisher">${paper.publisher}</p>
      <p class="paper-authors">저자: ${paper.authors}</p>
      ${paper.details ? `
        <ul class="paper-details">
          ${paper.details.map(detail => `<li>${detail}</li>`).join('')}
        </ul>
      ` : ''}
    </div>
  `).join('');
}
