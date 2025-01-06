export function SppModal({ macIcon, windowsIcon, gamingIcon, gdevelopIcon, itchioIcon }) {
    const modal = document.createElement('div');
    modal.id = "modalSpp";
    // Ajout de classes pour la gestion du scroll et du centrage adaptatif
    modal.className = "fixed inset-0 bg-black bg-opacity-75 flex items-start md:items-center justify-center z-50 hidden modal-backdrop overflow-y-auto py-4";
    
    modal.innerHTML = `
        <!-- Conteneur principal avec gestion de la taille et du scroll -->
        <div class="relative bg-white rounded-lg p-4 md:p-8 w-[95%] md:max-w-2xl mx-auto max-h-[90vh] overflow-y-auto" onclick="event.stopPropagation()">
            <!-- Bouton de fermeture positionné de manière fixe -->
            <button class="close-modal-btn absolute top-2 right-2 text-black text-3xl font-bold hover:bg-gray-200 rounded-full p-1 z-50">&times;</button>
            <!-- Section description avec texte responsive -->
            <div class="space-y-4">
                <div>
                    <h2 class="text-xl md:text-2xl font-bold mb-2">L'intérêt du projet</h2>
                    <p class="text-gray-700 text-sm md:text-base">
                        Super Papy Party est le fruit d'une collaboration de deux développeurs lors de la Coda_Jam 2023, est un jeu de plateformes die & retry imaginé dans le cadre du défi 'A Game By Its Cover' proposé par Coda et Pixel Players. En moins de 48h, notre équipe a donné vie à Raymond, un grand-père intrépide qui brave pièges et dangers pour retrouver sa bien-aimée Huguette.
                    </p>
                </div>

                <!-- Section environnement technique avec grille responsive -->
                <div>
                    <h3 class="text-lg font-semibold mb-2">Environnement Technique</h3>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <!-- Front-end -->
                            <div class="flex items-center gap-2">
                                <img src="${gdevelopIcon}" alt="gdevelopIcon" class="w-8 h-8 object-contain">
                                <span class="text-sm md:text-base text-gray-700">GDevelop 5</span>
                            </div>
                    </div>
                </div>

                <!-- Section environnement avec icônes adaptatives -->
                <div>
                    <h3 class="text-lg font-semibold mb-2">Environnement</h3>
                    <div class="flex flex-wrap gap-4 items-center">
                        <div class="flex items-center gap-2">
                            <img src="${macIcon}" alt="Mac OS" class="w-8 h-8 object-contain">
                            <span class="text-sm md:text-base text-gray-700">Mac OS</span>
                        </div>
                        <div class="flex items-center gap-2">
                            <img src="${windowsIcon}" alt="Windows OS" class="w-8 h-8 object-contain">
                            <span class="text-sm md:text-base text-gray-700">Windows</span>
                        </div>
                    </div>
                </div>

                <!-- Section outils avec grille responsive -->
                <div>
                    <h3 class="text-lg font-semibold mb-2">Outils</h3>
                    <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
                        <div class="flex items-center gap-2">
                            <img src="${itchioIcon}" alt="icone pour le site Itch.Io" class="w-8 h-8 object-contain">
                            <span class="text-sm md:text-base text-gray-700">Itch.Io</span>
                        </div>
                    </div>
                </div>

                <!-- Section date et liens avec disposition adaptative -->
                <div class="space-y-4">
                    <div>
                        <h4 class="text-lg font-semibold mb-2">Date de réalisation</h4>
                        <p class="text-sm md:text-base">4 et 5 Décembre 2023</p>
                    </div>

                    <div class="flex flex-col sm:flex-row gap-4">
                        <a href="https://codaschool.itch.io/jeu-5" 
                           target="_blank" 
                           class="flex items-center justify-center gap-2 px-4 py-2 border border-gray-400 rounded hover:bg-blue-600 hover:text-white transition-all">
                            <img src="${gamingIcon}" alt="voir notre jeu" class="w-8 h-8 object-contain">
                            <span class="text-sm md:text-base">Découvrir notre jeu</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    return modal;
}