export function renderContact(p) {
  const contactBox = document.querySelector('.contact-box');
  
  // Update links
  const links = contactBox.querySelector('.contact-links');
  links.innerHTML = `
    <a href="mailto:${p.email}">Email</a>
    <a href="https://github.com/${p.github}">GitHub</a>
    <a href="${p.blog}">Blog</a>
    <a href="${p.resumeUrl}" download>Resume</a>
    <a href="${p.portfolioUrl}" download>Portfolio</a>
  `;
}
