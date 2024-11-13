import mementoIcon from "../../assets/icones/project/favicon.png";
import mementoVideo from "../../assets/videos/Memento-presentation.mp4";
import papypartyIcon from "../../assets/icones/project/favicon-SPP.png";
import githubIcon from "../../assets/icones/github_icon.png";
import browserIcon from "../../assets/icones/icon-browser.png";
import gitIcon from "../../assets/icones/icon-git.png";
import responsivelyappIcon from "../../assets/icones/Responsively-app.png";
import vscodeIcon from "../../assets/icones/icon-visuel-studio-code.png";
import mampIcon from "../../assets/icones/mamp.png";
import pmaIcon from "../../assets/icones/pma.png";
import macIcon from "../../assets/icones/icon-macos.png";

export function ProjectList() {
  const projectListContainer = document.createElement('div');
  projectListContainer.className = "relative lg:row-span-1 rounded-lg bg-dark lg:rounded-[1rem] p-4";
  
  projectListContainer.innerHTML = `
      <div class="max-w-lg mx-auto bg-dark rounded-2xl p-6 overflow-y-auto h-56">
          <h2 class="text-lg font-bold text-gray-200 mb-6">Mes Derniers Projets</h2>

          <!-- Card Memento -->
          <div class="flex items-center mb-4 hover:bg-[#2C2C36] hover:rounded-lg transition-all p-2 cursor-pointer" data-modal-open="modalMemento">
              <img src="${mementoIcon}" alt="icone post it" class="w-12 h-12 object-cover rounded-lg mr-4">
              <div>
                  <h3 class="text-white font-semibold">Memento</h3>
                  <p class="text-gray-400 text-sm">Une idée en tête ? Créez, gérez et organisez vos pensées avec Memento.</p>
              </div>
          </div>
      </div>
  `;
  
  return projectListContainer;
}