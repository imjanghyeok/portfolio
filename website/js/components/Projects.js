export function renderProjects(projects) {
  const projectsContainer = document.querySelector('#projects .container');
  
  // Keep the heading
  const heading = projectsContainer.querySelector('.section-heading').outerHTML;
  
  const projectsHtml = projects.map(proj => `
    <article class="project-card featured-project">
      <div class="project-content">
        <div class="project-header-meta">
          <p class="project-type">${proj.type}</p>
          <p class="project-date">${proj.date || ''}</p>
        </div>
        <h3>${proj.title}</h3>
        <p>${proj.description}</p>

        <ul class="project-points">
          ${proj.points.map(point => `<li>${point}</li>`).join('')}
        </ul>

        <div class="tag-list">
          ${proj.tags.map(tag => `<span>${tag}</span>`).join('')}
        </div>

        <div class="project-links">
          ${proj.troubleshooting && proj.troubleshooting.length > 0 
            ? `<button class="btn btn-primary btn-trouble" data-id="${proj.id}">상세 보기</button>` 
            : ''}
          <a href="${proj.links.github}" class="btn btn-secondary" target="_blank">GitHub</a>
        </div>
      </div>
    </article>
  `).join('');

  projectsContainer.innerHTML = heading + projectsHtml;

  // Add event listeners for troubleshooting modal
  const troubleButtons = document.querySelectorAll('.btn-trouble');
  troubleButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const id = e.target.getAttribute('data-id');
      const project = projects.find(p => p.id === id);
      if (project && project.troubleshooting) {
        showTroubleshootingDetail(project);
      }
    });
  });
}

function showTroubleshootingDetail(project) {
  const modalHtml = `
    <div class="modal-overlay">
      <div class="modal-content">
        <button class="modal-close">&times;</button>
        <div class="modal-body">
          <h2>## 2. 문제 해결 경험</h2>
          <br>
          ${project.troubleshooting.map((t, idx) => `
            <div class="trouble-item">
              <h3>### 경험 ${idx + 1}. ${t.title}</h3>
              
              <h4>#### 문제 상황</h4>
              <ul>
                <li>${t.situation}</li>
                <li>사용자 경험, 개발 생산성, 안정성, 성능, 유지보수성 중 어떤 문제였는지 명시: ${t.target} 문제</li>
              </ul>

              <h4>#### 원인 또는 제약</h4>
              <ul>
                <li>${t.reason}</li>
              </ul>

              <h4>#### 해결 과정</h4>
              <ul>
                <li>내가 어떤 접근을 했는지: ${t.process}</li>
                <li>author/reviewer/commenter 역할을 구분: ${t.role}</li>
              </ul>

              <h4>#### 결과</h4>
              <ul>
                <li>결과: ${t.result}</li>
              </ul>
            </div>
            ${idx < project.troubleshooting.length - 1 ? '<hr class="modal-divider">' : ''}
          `).join('')}
        </div>
      </div>
    </div>
  `;

  document.body.insertAdjacentHTML('beforeend', modalHtml);
  
  const modal = document.querySelector('.modal-overlay');
  const closeBtn = modal.querySelector('.modal-close');
  
  closeBtn.onclick = () => modal.remove();
  modal.onclick = (e) => {
    if (e.target === modal) modal.remove();
  };
}
