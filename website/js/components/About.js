export function renderAbout(a) {
  document.querySelector('#about h2').textContent = a.title;
  document.querySelector('#about .section-description').textContent = a.description;

  const featureGrid = document.querySelector('.feature-grid');
  featureGrid.innerHTML = a.features.map(f => `
    <article class="feature-card">
      <h3>${f.title}</h3>
      <p>${f.description}</p>
    </article>
  `).join('');
}
