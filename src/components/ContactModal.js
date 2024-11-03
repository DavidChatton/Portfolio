export function ContactModal() {
  const modal = document.createElement("div");
  modal.id = "contact-modal";
  modal.className = "fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 hidden modal-backdrop";
  
  modal.innerHTML = `
      <div class="relative bg-white p-8 rounded-lg shadow-lg w-80" onclick="event.stopPropagation()">
          <button class="close-modal-btn absolute top-2 right-2 text-black text-3xl font-bold hover:bg-gray-200 rounded-full p-1">&times;</button>
          <h2 class="text-2xl font-bold mb-4 text-center">Me Contacter</h2>
          <div class="flex flex-col gap-4">
              <a href="https://www.linkedin.com/in/david-chatton/" target="_blank" class="bg-blue-600 text-white font-semibold px-4 py-2 rounded-full text-center">Mon LinkedIn</a>
              <a href="mailto:davidchatton.dev@gmail.com" class="bg-gray-800 text-white font-semibold px-4 py-2 rounded-full text-center">Envoyer un mail</a>
          </div>
      </div>
    `;
  return modal;
}