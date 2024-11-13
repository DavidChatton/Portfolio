import { ContactModal } from '../components/ContactModal.js';
import { MementoModal } from '../components/modals/MementoModal.js';
import { TechProjectsModal } from '../components/modals/TechProjectsModal.js';
import { projectsData } from '../data/projects.js';  // Correct

// Imports des assets
import mementoVideo from '../../assets/videos/Memento-presentation.mp4';
import pmaIcon from '../../assets/icones/pma.png';
import mampIcon from '../../assets/icones/mamp.png';
import macIcon from '../../assets/icones/icon-macos.png';
import gitIcon from '../../assets/icones/icon-git.png';
import githubIcon from '../../assets/icones/github_icon.png';
import responsivelyappIcon from '../../assets/icones/Responsively-app.png';
import vscodeIcon from '../../assets/icones/icon-visuel-studio-code.png';
import browserIcon from '../../assets/icones/icon-browser.png';

export function initializeModals() {
    const modalContainer = document.createElement('div');
    modalContainer.id = 'modal-container';
    document.body.appendChild(modalContainer);

    // Ajout des modals
    const contactModal = ContactModal();
    const mementoModal = MementoModal({
        mementoVideo,
        pmaIcon,
        mampIcon,
        macIcon,
        gitIcon,
        githubIcon,
        responsivelyappIcon,
        vscodeIcon,
        browserIcon
    });

    modalContainer.appendChild(contactModal);
    modalContainer.appendChild(mementoModal);

    // Gestionnaires d'événements pour les boutons de fermeture
    const closeButtons = modalContainer.querySelectorAll('.close-modal-btn');
    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modal = button.closest('.fixed');
            if (modal) {
                modal.classList.add('hidden');
                document.body.style.overflow = '';
                console.log('Modal fermée via bouton X');
            }
        });
    });

    // Gestionnaire unifié pour tous les clics
    document.addEventListener('click', (event) => {
        // Gestion des boutons tech
        const techButton = event.target.closest('[data-tech]');
        if (techButton) {
            const tech = techButton.dataset.tech;
            showTechProjects(tech);
            return; // Évite de déclencher les autres gestionnaires
        }

        // Gestion de l'ouverture des autres modals
        const openTrigger = event.target.closest('[data-modal-open]');
        if (openTrigger) {
            const modalId = openTrigger.getAttribute('data-modal-open');
            const modal = document.getElementById(modalId);
            if (modal) {
                modal.classList.remove('hidden');
                document.body.style.overflow = 'hidden';
                console.log('Modal ouverte:', modalId);
            }
            return;
        }

        // Fermeture en cliquant sur le backdrop
        if (event.target.classList.contains('modal-backdrop')) {
            const modal = event.target.closest('.fixed');
            if (modal) {
                modal.classList.add('hidden');
                document.body.style.overflow = '';
                console.log('Modal fermée via backdrop');
            }
        }
    });

    console.log("initializeModals appelée");
}

export function showTechProjects(tech) {
    if (!tech) {
        console.error('Technologie non définie');
        return;
    }
    // Récupérer les projets ou un tableau vide si aucun projet
    const projects = projectsData[tech] || [];
    
    // Supprimer l'ancienne modal si elle existe
    const existingModal = document.getElementById('tech-projects-modal');
    if (existingModal) {
        existingModal.remove();
    }
    // Créer et afficher la nouvelle modal
    const modal = TechProjectsModal(tech, projects);
    document.body.appendChild(modal);
    
    // AJOUT ICI : Gestionnaire d'événements pour le bouton de fermeture
    const closeButton = modal.querySelector('.close-modal-btn');
    if (closeButton) {
        closeButton.addEventListener('click', () => {
            modal.classList.add('hidden');
            document.body.style.overflow = '';
        });
    }
    
    // Petit délai pour l'animation
    setTimeout(() => {
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    }, 0);
    console.log(`Appel de showTechProjects pour la technologie : ${tech}`);
}