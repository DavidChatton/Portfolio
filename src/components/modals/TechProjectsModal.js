export function TechProjectsModal(tech, projects) {
    const modal = document.createElement('div');
    modal.id = "tech-projects-modal";
    modal.className = "fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 hidden modal-backdrop";
    
    modal.innerHTML = `
        <div class="relative bg-white rounded-lg p-8 max-w-2xl w-full mx-4 max-h-[80vh]" onclick="event.stopPropagation()">
            <button class="close-modal-btn absolute top-3 right-2 text-black text-3xl font-bold hover:bg-gray-200 rounded-full p-1 z-50">&times;</button>
            <h2 class="text-2xl font-bold mb-6">Projets utilisant ${tech}</h2>
            
            <div class="overflow-y-auto max-h-[calc(80vh-120px)] pr-2">
                ${projects.length === 0 ? `
                    <div class="text-center py-8">
                        <p class="text-lg text-gray-600">Aucun projet n'utilise encore ${tech}</p>
                        <p class="text-sm text-gray-500 mt-2">Des projets seront bientôt ajoutés !</p>
                    </div>
                ` : `
                    <div class="space-y-4">
                        ${projects.map(project => `
                            <button class="project-details-btn w-full bg-gray-100 rounded-lg p-4 hover:shadow-lg transition-duration-300 text-left" data-project="${project.name.toLowerCase()}">
                                <div class="flex items-center gap-4">
                                    <img src="${project.image}" alt="${project.name}" class="w-12 h-12 rounded">
                                    <div>
                                        <h3 class="font-bold">${project.name}</h3>
                                        <p class="text-sm text-gray-600">${project.description}</p>
                                    </div>
                                </div>
                            </button>
                        `).join('')}
                    </div>
                `}
            </div>
        </div>
    `;

    // Les boutons de projet
    const projectButtons = modal.querySelectorAll('.project-details-btn');
    projectButtons.forEach(button => {
        button.addEventListener('click', () => {
            const projectName = button.dataset.project;
            modal.classList.add('hidden');
            const projectModal = document.getElementById(`modal${projectName.charAt(0).toUpperCase() + projectName.slice(1)}`);
            if (projectModal) {
                projectModal.classList.remove('hidden');
            }
        });
    });

    return modal;
}