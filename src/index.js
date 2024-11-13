import './style.css';
import { ProfileHeader } from './components/ProfileHeader.js';
import { LocationContact } from './components/LocationContact.js';
import { AnimationSection } from './components/AnimationSection.js';
import { SkillsList } from './components/SkillsList.js';
import { ProjectList } from './components/ProjectList.js';
import { initializeModals } from './utils/modalManager.js';
import { showTechProjects } from './utils/modalManager.js'

document.addEventListener('DOMContentLoaded', () => {
    const app = document.getElementById('app');
    
    // Layout mobile
    const mobileLayout = document.createElement('div');
    mobileLayout.className = 'flex flex-col gap-4 lg:hidden bg-site';
    mobileLayout.innerHTML = ProfileHeader();
    mobileLayout.innerHTML += SkillsList();
    mobileLayout.appendChild(ProjectList());

    // Layout desktop (votre layout original)
    const desktopLayout = document.createElement('div');
    desktopLayout.className = 'hidden lg:grid lg:grid-cols-3 lg:gap-4 lg:p-8 lg:h-screen bg-site';
    desktopLayout.innerHTML = ProfileHeader();
    desktopLayout.innerHTML += AnimationSection();
    desktopLayout.innerHTML += SkillsList();
    desktopLayout.appendChild(LocationContact());
    desktopLayout.appendChild(ProjectList());

    // Ajout des deux layouts
    app.appendChild(mobileLayout);
    app.appendChild(desktopLayout);

    // Initialisation des modals
    initializeModals();
    showTechProjects();
});