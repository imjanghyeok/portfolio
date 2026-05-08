export function renderProfile(p) {
  document.querySelector('.hero .eyebrow').textContent = p.eyebrow;
  document.querySelector('.hero h1').textContent = p.headline;
  document.querySelector('.hero-description').textContent = p.description;
  document.querySelector('.hero-actions .btn-secondary').href = p.resumeUrl;
  document.querySelector('.hero-card .card-header span:last-child').textContent = p.status;

  const profileList = document.querySelector('.profile-list');
  profileList.innerHTML = `
    <li><strong>Name</strong><span>${p.name}</span></li>
    <li><strong>Role</strong><span>${p.role}</span></li>
    <li><strong>Focus</strong><span>${p.focus}</span></li>
    <li><strong>GitHub</strong><span><a href="https://github.com/${p.github}" target="_blank">@${p.github}</a></span></li>
    <li><strong>Blog</strong><span><a href="${p.blog}" target="_blank">Tistory</a></span></li>
    <li><strong>Email</strong><span><a href="mailto:${p.email}">${p.email}</a></span></li>
  `;
}
