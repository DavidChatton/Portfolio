import { ContactModal } from '../components/ContactModal.js';
import { MementoModal } from '../components/modals/MementoModal.js';

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

    // Gestionnaire pour l'ouverture et le backdrop
    document.addEventListener('click', (event) => {
        // Gestion de l'ouverture des modals
        const openTrigger = event.target.closest('[data-modal-open]');
        if (openTrigger) {
            const modalId = openTrigger.getAttribute('data-modal-open');
            const modal = document.getElementById(modalId);
            if (modal) {
                modal.classList.remove('hidden');
                document.body.style.overflow = 'hidden';
                console.log('Modal ouverte:', modalId);
            }
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
}