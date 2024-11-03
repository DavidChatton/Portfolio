import './style.css';
import { ProfileHeader } from './components/ProfileHeader.js';
import { LocationContact } from './components/LocationContact.js';
import { AnimationSection } from './components/AnimationSection.js';
import { SkillsList } from './components/SkillsList.js';
import { ProjectList } from './components/ProjectList.js';
import { initializeModals } from './utils/modalManager.js';

document.addEventListener('DOMContentLoaded', () => {
    const app = document.getElementById('app');
    app.classList.add('grid', 'gap-4', 'lg:grid-cols-3', 'p-8', 'h-screen', 'bg-site');

    // Ajout des composants statiques
    app.innerHTML = ProfileHeader();
    app.innerHTML += AnimationSection();
    app.innerHTML += SkillsList();
    
    // Ajout des composants dynamiques
    app.appendChild(LocationContact());
    app.appendChild(ProjectList());

    // Initialisation des modals
    initializeModals();
});