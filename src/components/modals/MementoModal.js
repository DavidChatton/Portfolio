export function MementoModal({ mementoVideo, pmaIcon, mampIcon, macIcon, gitIcon, githubIcon, responsivelyappIcon, vscodeIcon, browserIcon }) {
    const modal = document.createElement('div');
    modal.id = "modalMemento";
    modal.className = "fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 hidden modal-backdrop";
    
    modal.innerHTML = `
        <div class="relative bg-white rounded-lg p-8 max-w-2xl w-full" onclick="event.stopPropagation()">
        <button class="close-modal-btn absolute top-3 right-2 text-black text-3xl font-bold hover:bg-gray-200 rounded-full p-1 z-50">&times;</button>
            
            <!-- Vidéo du projet -->
            <div class="mb-4 relative z-10">
                <video class="w-full h-auto rounded-lg" controls>
                    <source src="${mementoVideo}" type="video/mp4">
                    Ton navigateur ne supporte pas les vidéos HTML5.
                </video>
            </div>

            <!-- Description du projet -->
            <h2 class="text-2xl font-bold mb-2">L'intérêt du projet</h2>
            <p class="text-gray-700 mb-2">
                Memento est une application web permettant de créer et gérer vos post-its virtuels pour ne plus oublier vos idées.
            </p>
            <!-- Environnement Technique -->
            <h3 class="text-lg font-semibold mb-2">Environnement Technique</h3>

            <!-- Section Environnement Technique -->
            <div class="grid grid-cols-2 gap-4 my-2">
                <!-- Front-end -->
                <div>
                    <h4 class="text-md font-semibold mb-2">Front-end</h4>
                    <div class="my-1 space-y-2">
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
                <div>
                    <h4 class="text-md font-semibold mb-2">Back-end</h4>
                    <div class="my-1 space-y-2">
                        <span class="inline-flex items-center justify-center whitespace-nowrap rounded-full px-3 py-0.5 text-xs text-white font-semibold border"
                            style="border-color: #464B8A; background-color: #787CB4;">PHP</span>
                        <span class="inline-flex items-center justify-center whitespace-nowrap rounded-full px-3 py-0.5 text-xs font-semibold border"
                            style="border-color: #12668E; background-color: transparent;">
                            <span style="color: #147993;">My</span><span style="color: #E59115;">SQL</span>
                        </span>
                    </div>
                </div>
            </div>

            <!-- Environnement -->
            <h3 class="text-lg font-semibold mb-2">Environnement</h3>
            <div class="flex space-x-4 items-center mb-2">
                <div class="flex items-center mx-1">
                    <img src="${pmaIcon}" alt="PhpMyAdmin Icon" class="w-10 h-10 mr-1">
                    <span class="text-gray-700">PhpMyAdmin</span>
                </div>
                <div class="flex items-center mx-1">
                    <img src="${mampIcon}" alt="MAMP Icon" class="w-10 h-10 mr-1">
                    <span class="text-gray-700">MAMP</span>
                </div>
                <div class="flex items-center mx-1">
                    <img src="${macIcon}" alt="Mac OS Icon" class="w-10 h-10 mr-1">
                    <span class="text-gray-700">Mac OS</span>
                </div>
            </div>

            <!-- Outils utilisés -->
            <h3 class="text-lg font-semibold mb-2">Outils</h3>
            <div class="space-y-2 mb-2">
                <div class="flex justify-around items-center">
                    <img src="${gitIcon}" alt="Git Icon" class="w-10 h-10 mr-1">
                    <span class="text-gray-700">Git</span>
                    <img src="${githubIcon}" alt="Github Icon" class="w-10 h-10 mr-1">
                    <span class="text-gray-700">Github</span>
                    <img src="${responsivelyappIcon}" alt="Responsively-App Icon" class="w-8 h-8 mr-1">
                    <span class="text-gray-700">Responsively App</span>
                    <img src="${vscodeIcon}" alt="Visual studio code Icon" class="w-10 h-10 mr-1">
                    <span class="text-gray-700">Visual Studio Code</span>
                </div>
            </div>

            <h4 class="text-lg font-semibold mb-2">Date de réalisation</h4>
            <p>Février 2024</p>

            <!-- Liens vers le projet -->
            <div class="flex flex-col sm:flex-row justify-start gap-4 mt-2">
                <a href="https://memento.davidchatton-dev.fr/?page=register" target="_blank" 
                   class="text-black border border-gray-400 px-4 py-2 rounded hover:bg-blue-600 transition-all text-center inline-flex items-center space-x-2">
                    <img src="${browserIcon}" alt="browser icon" class="w-10 h-10">
                    <span>Voir le site</span>
                </a>
                <a href="https://github.com/DavidChatton/Memento" target="_blank" 
                   class="bg-gray-400 text-black px-4 py-2 rounded hover:bg-gray-700 transition-all text-center inline-flex items-center gap-2">
                    <img src="${githubIcon}" alt="GitHub" class="w-10 h-10"> Voir le Projet
                </a>
            </div>
        </div>
    `;
    
    return modal;
}