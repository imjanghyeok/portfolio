import { portfolioData } from './data/portfolioData.js';
import { renderProfile } from './components/Profile.js';
import { renderAbout } from './components/About.js';
import { renderSkills } from './components/Skills.js';
import { renderProjects } from './components/Projects.js';
import { renderLearning } from './components/Learning.js';
import { renderActivities } from './components/Activities.js';
import { renderPapers } from './components/Papers.js';
import { renderAwards } from './components/Awards.js';
import { renderContact } from './components/Contact.js';

document.addEventListener('DOMContentLoaded', () => {
  // Sort function based on YYYY.MM or YYYY string inside the date field
  const sortByDateDesc = (arr) => {
    return arr.sort((a, b) => {
      const extractDate = (str) => {
        if (!str) return "0000.00";
        // Convert "현재" to "9999.99" to always show first
        if (str.includes("현재")) return "9999.99";
        const match = str.match(/\d{4}(\.\d{2})?/);
        return match ? match[0] : "0000.00";
      };
      return extractDate(b.date).localeCompare(extractDate(a.date));
    });
  };

  sortByDateDesc(portfolioData.projects);
  sortByDateDesc(portfolioData.activities);
  sortByDateDesc(portfolioData.learning);
  sortByDateDesc(portfolioData.papers);
  sortByDateDesc(portfolioData.awards);

  renderProfile(portfolioData.profile);
  renderAbout(portfolioData.about);
  renderSkills(portfolioData.skills);
  renderProjects(portfolioData.projects);
  renderLearning(portfolioData.learning);
  renderActivities(portfolioData.activities);
  renderPapers(portfolioData.papers);
  renderAwards(portfolioData.awards);
  renderContact(portfolioData.profile);

  // Theme Toggle Logic
  const themeToggle = document.getElementById('theme-toggle');
  const body = document.documentElement;
  const sunIcon = document.querySelector('.sun-icon');
  const moonIcon = document.querySelector('.moon-icon');

  const updateThemeIcon = (theme) => {
    if (theme === 'dark') {
      if(sunIcon) sunIcon.style.display = 'block';
      if(moonIcon) moonIcon.style.display = 'none';
    } else {
      if(sunIcon) sunIcon.style.display = 'none';
      if(moonIcon) moonIcon.style.display = 'block';
    }
  };

  const savedTheme = localStorage.getItem('theme') || 'dark';
  body.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const currentTheme = body.getAttribute('data-theme') || 'dark';
      const newTheme = currentTheme === 'light' ? 'dark' : 'light';
      body.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
      updateThemeIcon(newTheme);
    });
  }

  // Modal Functionality
  const modal = document.getElementById('modal');
  const modalBody = document.getElementById('modal-body');
  const closeBtn = document.querySelector('.modal-close');
  const overlay = document.querySelector('.modal-overlay');

  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('btn-more')) {
      const id = e.target.getAttribute('data-id');
      const activity = portfolioData.activities.find(a => a.id === id);
      if (activity && activity.story) {
        modalBody.innerHTML = activity.story;
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    }
  });

  const closeModal = () => {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  };

  closeBtn.addEventListener('click', closeModal);
  overlay.addEventListener('click', closeModal);
});
