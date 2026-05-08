export function renderLearning(learningItems) {
  const container = document.querySelector('.learning-grid');
  if (!container) return;

  container.innerHTML = learningItems.map(item => `
    <article class="learning-card">
      <div class="learning-header">
        <span class="learning-type">${item.type}</span>
        <span class="learning-date">${item.date}</span>
      </div>
      <h3>${item.title}</h3>
      <p class="learning-desc">${item.description}</p>
      <ul class="learning-points">
        ${item.points.map(p => `<li>${p}</li>`).join('')}
      </ul>
      <div class="tag-list">
        ${item.tags.map(t => `<span>${t}</span>`).join('')}
      </div>
      ${item.links ? `
        <div class="learning-links">
          ${item.links.github ? `<a href="${item.links.github}" target="_blank" class="btn-link">GitHub</a>` : ''}
          ${item.links.website ? `<a href="${item.links.website}" target="_blank" class="btn-link">Website</a>` : ''}
        </div>
      ` : ''}
    </article>
  `).join('');
}
