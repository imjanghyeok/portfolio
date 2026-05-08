export function renderSkills(skills) {
  const skillGrid = document.querySelector('.skill-grid');
  skillGrid.innerHTML = skills.map(s => `
    <article class="skill-card">
      <h3>${s.category}</h3>
      <div class="tag-list">
        ${s.tags.map(tag => `<span>${tag}</span>`).join('')}
      </div>
    </article>
  `).join('');
}
