import './style.css';
import './styles/global.css';
import { ProfileCard } from './components/ProfileCard.js';
import { ProjectList } from './components/ProjectList.js';
import { SocialLinks } from './components/SocialLinks.js';
/* import { ThemeProvider } from './components/ThemeProvider.js'; */
/* // Appliquer le thème global
ThemeProvider(); */

// Appliquer les composants à la div avec l'ID "app"
const app = document.getElementById('app');
app.classList.add('flex', 'flex-col', 'items-center', 'gap-16', 'p-8', 'min-h-screen', 'bg-site');

// Ajouter tous les composants à la page principale
app.appendChild(ProfileCard());
app.appendChild(AnimationSection());
app.appendChild(SocialLinks());
app.appendChild(ProjectList());
