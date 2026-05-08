import { portfolioData } from './data/portfolioData.js';
import { renderProfile } from './components/Profile.js';
import { renderAbout } from './components/About.js';
import { renderSkills } from './components/Skills.js';
import { renderProjects } from './components/Projects.js';
import { renderContact } from './components/Contact.js';

document.addEventListener('DOMContentLoaded', () => {
  renderProfile(portfolioData.profile);
  renderAbout(portfolioData.about);
  renderSkills(portfolioData.skills);
  renderProjects(portfolioData.projects);
  renderContact(portfolioData.profile);
});
