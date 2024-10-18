import Map from "../../assets/images/map.webp";
import resume from "../../assets/documents/CV-CODA.pdf";

export function LocationContact() {
  return `
  <div class="relative rounded-lg bg-dark">
    <img src="${Map}" alt="Map Picture" class="rounded-lg">
    <div class="absolute inset-0 flex flex-col justify-center items-start -top-24 left-3">
      <p class="text-lg text-white font-bold">France, Orléans</p>
      <p class="text-sm text-gray-400 mt-2">10:34 UTC+2</p>
    </div>
    
    <div class="flex gap-4 justify-center w-full mt-8">
      <button id="contact-button" class="bg-white text-black font-semibold px-6 py-3 rounded-full transition-all hover:bg-gray-200 shadow-md">Contact</button>

      <button onclick="window.open('https://github.com/DavidChatton', '_blank')" class="bg-gray-800 text-gray-300 font-semibold px-6 py-3 rounded-full transition-all hover:bg-gray-700 shadow-md">Github</button>
      
      <a href="${resume}" download title="CV-DavidChatton" class="border border-white text-white font-semibold px-6 py-3 rounded-full transition-all hover:bg-white hover:text-black shadow-md text-center">CV</a>
    </div>

    <div id="contact-modal" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 hidden z-50">
      <div class="relative bg-white p-8 rounded-lg shadow-lg w-80">
        <button id="close-modal" class="absolute top-2 right-2 text-black text-3xl font-bold hover:bg-gray-200 rounded-full p-1">×</button>
        <h2 class="text-2xl font-bold mb-4 text-center">Me Contacter</h2>
        <div class="flex flex-col gap-4">
          <a href="https://www.linkedin.com/in/david-chatton/" target="_blank" class="bg-blue-600 text-white font-semibold px-4 py-2 rounded-full text-center">LinkedIn</a>
          <a href="mailto:davidchatton.dev@gmail.com" class="bg-gray-800 text-white font-semibold px-4 py-2 rounded-full text-center">Email</a>
          <a href="tel:0638141812" class="bg-green-600 text-white font-semibold px-4 py-2 rounded-full text-center">Portable</a>
        </div>
      </div>
    </div>
  </div>
  `;
}