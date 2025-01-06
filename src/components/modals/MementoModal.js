export function MementoModal({ mementoVideo, pmaIcon, mampIcon, macIcon, gitIcon, githubIcon, responsivelyappIcon, vscodeIcon, browserIcon }) {
    const modal = document.createElement('div');
    modal.id = "modalMemento";
    // Ajout de classes pour la gestion du scroll et du centrage adaptatif
    modal.className = "fixed inset-0 bg-black bg-opacity-75 flex items-start md:items-center justify-center z-50 hidden modal-backdrop overflow-y-auto py-4";
    
    modal.innerHTML = `
        <!-- Conteneur principal avec gestion de la taille et du scroll -->
        <div class="relative bg-white rounded-lg p-4 md:p-8 w-[95%] md:max-w-2xl mx-auto max-h-[90vh] overflow-y-auto" onclick="event.stopPropagation()">
            <!-- Bouton de fermeture positionné de manière fixe -->
            <button class="close-modal-btn absolute top-2 right-2 text-black text-3xl font-bold hover:bg-gray-200 rounded-full p-1 z-50">&times;</button>
            
            <!-- Section vidéo avec optimisations pour mobile -->
            <div class="mb-4 relative z-10">
                <video class="w-full h-auto rounded-lg" controls playsinline>
                    <source src="${mementoVideo}" type="video/mp4">
                    Ton navigateur ne supporte pas les vidéos HTML5.
                </video>
            </div>

            <!-- Section description avec texte responsive -->
            <div class="space-y-4">
                <div>
                    <h2 class="text-xl md:text-2xl font-bold mb-2">L'intérêt du projet</h2>
                    <p class="text-gray-700 text-sm md:text-base">
                        Memento est une application web permettant de créer et gérer vos post-its virtuels pour ne plus oublier vos idées.
                    </p>
                </div>

                <!-- Section environnement technique avec grille responsive -->
                <div>
                    <h3 class="text-lg font-semibold mb-2">Environnement Technique</h3>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <!-- Front-end -->
                        <div class="space-y-2">
                            <h4 class="text-md font-semibold">Front-end</h4>
                            <div class="flex flex-wrap gap-2">
                                <span class="inline-flex items-center justify-center whitespace-nowrap rounded-full px-3 py-0.5 text-xs text-white font-semibold"
                                    style="border: 2px solid #E4522E; background-color: #F26A3D;">HTML5</span>
                                <span class="inline-flex items-center justify-center whitespace-nowrap rounded-full px-3 py-0.5 text-xs text-white font-semibold border"
                                    style="border-color: #264CE5; background-color: #2764F1;">CSS3</span>
                                <span class="inline-flex items-center justify-center whitespace-nowrap rounded-full px-3 py-0.5 text-xs text-black font-semibold border"
                                    style="border-color: #EBCC39; background-color: #FFDF30;">JavaScript</span>
                                <span class="inline-flex items-center justify-center whitespace-nowrap rounded-full px-3 py-0.5 text-xs text-white font-semibold border"
                                    style="border-color: #8E64A5; background-color: #A48EBE;">SweetAlert 2</span>
                            </div>
                        </div>

                        <!-- Back-end -->
                        <div class="space-y-2">
                            <h4 class="text-md font-semibold">Back-end</h4>
                            <div class="flex flex-wrap gap-2">
                                <span class="inline-flex items-center justify-center whitespace-nowrap rounded-full px-3 py-0.5 text-xs text-white font-semibold border"
                                    style="border-color: #464B8A; background-color: #787CB4;">PHP</span>
                                <span class="inline-flex items-center justify-center whitespace-nowrap rounded-full px-3 py-0.5 text-xs font-semibold border"
                                    style="border-color: #12668E; background-color: transparent;">
                                    <span style="color: #147993;">My</span><span style="color: #E59115;">SQL</span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Section environnement avec icônes adaptatives -->
                <div>
                    <h3 class="text-lg font-semibold mb-2">Environnement</h3>
                    <div class="flex flex-wrap gap-4 items-center">
                        <div class="flex items-center gap-2">
                            <img src="${pmaIcon}" alt="PhpMyAdmin" class="w-8 h-8 object-contain">
                            <span class="text-sm md:text-base text-gray-700">PhpMyAdmin</span>
                        </div>
                        <div class="flex items-center gap-2">
                            <img src="${mampIcon}" alt="MAMP" class="w-8 h-8 object-contain">
                            <span class="text-sm md:text-base text-gray-700">MAMP</span>
                        </div>
                        <div class="flex items-center gap-2">
                            <img src="${macIcon}" alt="Mac OS" class="w-8 h-8 object-contain">
                            <span class="text-sm md:text-base text-gray-700">Mac OS</span>
                        </div>
                    </div>
                </div>

                <!-- Section outils avec grille responsive -->
                <div>
                    <h3 class="text-lg font-semibold mb-2">Outils</h3>
                    <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
                        <div class="flex flex-col md:flex-row items-center gap-2">
                            <img src="${gitIcon}" alt="Git" class="w-8 h-8 object-contain">
                            <span class="text-sm md:text-base text-gray-700">Git</span>
                        </div>
                        <div class="flex flex-col md:flex-row items-center gap-2">
                            <img src="${githubIcon}" alt="Github" class="w-8 h-8 object-contain">
                            <span class="text-sm md:text-base text-gray-700">Github</span>
                        </div>
                        <div class="flex flex-col md:flex-row items-center gap-2">
                            <img src="${responsivelyappIcon}" alt="Responsively App" class="w-8 h-8 object-contain">
                            <span class="text-sm md:text-base text-gray-700 text-center md:text-left">Responsively App</span>
                        </div>
                        <div class="flex flex-col md:flex-row items-center gap-2">
                            <img src="${vscodeIcon}" alt="VS Code" class="w-8 h-8 object-contain">
                            <span class="text-sm md:text-base text-gray-700">VS Code</span>
                        </div>
                    </div>
                </div>

                <!-- Section date et liens avec disposition adaptative -->
                <div class="space-y-4">
                    <div>
                        <h4 class="text-lg font-semibold mb-2">Date de réalisation</h4>
                        <p class="text-sm md:text-base">Février 2024</p>
                    </div>

                    <div class="flex flex-col sm:flex-row gap-4">
                        <a href="https://memento.davidchatton-dev.fr/?page=register" 
                           target="_blank" 
                           class="flex items-center justify-center gap-2 px-4 py-2 border border-gray-400 rounded hover:bg-blue-600 hover:text-white transition-all">
                            <img src="${browserIcon}" alt="Voir le site" class="w-8 h-8 object-contain">
                            <span class="text-sm md:text-base">Voir le site</span>
                        </a>
                        <a href="https://github.com/DavidChatton/Memento" 
                           target="_blank" 
                           class="flex items-center justify-center gap-2 px-4 py-2 bg-gray-400 rounded hover:bg-gray-700 hover:text-white transition-all">
                            <img src="${githubIcon}" alt="GitHub" class="w-8 h-8 object-contain">
                            <span class="text-sm md:text-base">Voir le Projet</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    return modal;
}