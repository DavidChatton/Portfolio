import Map from "../../assets/images/map.webp";
import resume from "../../assets/documents/CV-CODA.pdf";

export function LocationContact() {
    const locationContact = document.createElement('div');
    locationContact.className = 'relative rounded-lg bg-dark z-10';
    
    locationContact.innerHTML = `
        <img src="${Map}" alt="Map Picture" class="rounded-lg">
        <div class="absolute inset-0 flex flex-col justify-center items-start -top-24 left-3 z-0">
            <p class="text-lg text-white font-bold">France, Orléans</p>
            <p class="text-sm text-gray-400 mt-2">10:34 UTC+2</p>
        </div>
        
        <div class="flex gap-4 justify-center w-full mt-8">
            <button data-modal-open="contact-modal" class="relative bg-white text-black font-semibold px-6 py-3 rounded-full transition-all hover:bg-gray-200 shadow-md z-20">Contact</button>
            <button onclick="window.open('https://github.com/DavidChatton', '_blank')" class="bg-gray-800 text-gray-300 font-semibold px-6 py-3 rounded-full transition-all hover:bg-gray-700 shadow-md z-20">Github</button>
            <a href="${resume}" download ="CV-DavidChatton" title="CV-DavidChatton" class="border border-white text-white font-semibold px-6 py-3 rounded-full transition-all hover:bg-white hover:text-black shadow-md text-center z-20">CV</a>

        
        </div>
    `;
    
    return locationContact;
}
