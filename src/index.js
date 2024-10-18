import './style.css';
import './styles/global.css';

import { ProfileHeader } from './components/ProfileHeader.js';
import {LocationContact} from './components/LocationContact.js';
import { AnimationSection } from './components/AnimationSection.js';
import { SkillsList } from './components/SkillsList.js';
import { ProjectList } from './components/ProjectList.js';
/* import { ProjectList } from './components/ProjectList.js';
import { SkillsList } from './components/SkillsList.js'; */
/* import { ThemeProvider } from './components/ThemeProvider.js'; */
/* // Appliquer le thème global
ThemeProvider(); */

// Appliquer les composants à la div avec l'ID "app"
const app = document.getElementById('app');
/* app.classList.add('flex', 'flex-col', 'items-center', 'gap-16', 'p-8', 'min-h-screen', 'bg-site', ); */
app.classList.add('grid', 'gap-4', 'lg:grid-cols-3', 'p-8', 'h-screen', 'bg-site');

// Ajouter tous les composants à la page principale
app.innerHTML += ProfileHeader();
app.innerHTML += AnimationSection();
app.innerHTML += SkillsList();
app.innerHTML += LocationContact();
app.innerHTML += ProjectList();
/* app.appendChild(AnimationSection());
app.appendChild(ProjectList()); */
document.addEventListener("DOMContentLoaded", () => {
// Sélectionner les éléments de la modal APRÈS avoir ajouté le composant au DOM
const contactButton = app.querySelector("#contact-button"); 
const contactModal = app.querySelector("#contact-modal");
const closeModalButton = app.querySelector("#close-modal");

// Vérifier l'existence des éléments et attacher les événements
if (contactButton && contactModal && closeModalButton) {
  console.log("Éléments de la modal trouvés."); // Confirmation que les éléments sont bien trouvés

  contactButton.addEventListener("click", () => {
    console.log("Bouton 'Contact' cliqué."); // Confirmation du clic sur le bouton
    contactModal.classList.remove("hidden");
  });

  closeModalButton.addEventListener("click", () => {
    console.log("Bouton 'Fermer' cliqué."); // Confirmation du clic sur le bouton de fermeture
    contactModal.classList.add("hidden");
  });
} else {
  console.error("Les éléments requis du composant LocationContact ne sont pas trouvés."); 
}
});