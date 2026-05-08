export function renderActivities(activities) {
  const container = document.querySelector('.activity-list');
  if (!container) return;

  container.innerHTML = activities.map(act => `
    <div class="activity-card">
      <div class="activity-header">
        <div class="activity-title-group">
          <h3>${act.title}</h3>
          <span class="activity-date">${act.date}</span>
        </div>
        ${act.links ? `
          <div class="activity-links">
            ${act.links.blog ? `<a href="${act.links.blog}" target="_blank" class="link-icon">Blog</a>` : ''}
            ${act.links.youtube ? `<a href="${act.links.youtube}" target="_blank" class="link-icon">YouTube</a>` : ''}
          </div>
        ` : ''}
      </div>
      <p class="activity-desc">${act.description}</p>
      ${act.details ? `
        <ul class="activity-details">
        ${act.details.map(detail => {
          const linkedDetail = detail.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" target="_blank" class="inline-link">$1</a>');
          return `<li>${linkedDetail}</li>`;
        }).join('')}
      </ul>
      ` : ''}
      ${act.story ? `<button class="btn-more" data-id="${act.id}">자세히 보기</button>` : ''}
    </div>
  `).join('');
}
