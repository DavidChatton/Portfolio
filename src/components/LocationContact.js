import Map from "../../assets/images/map.webp";
import resume from "../../assets/documents/CV-CODA.pdf";

export function ContactButtons() {
    return `
        <div class="flex flex-col sm:flex-row gap-3 px-4 pb-4 p-4">
            <button data-modal-open="contact-modal" class="w-full sm:w-auto bg-white text-black font-semibold px-6 py-3 rounded-full transition-all hover:bg-gray-200 shadow-md z-20">Contact</button>
            <button onclick="window.open('https://github.com/DavidChatton', '_blank')" class="w-full sm:w-auto bg-gray-800 text-gray-300 font-semibold px-6 py-3 rounded-full transition-all hover:bg-gray-700 shadow-md z-20">Github</button>
            <a href="${resume}" download="CV-DavidChatton" title="CV-DavidChatton" class="w-full sm:w-auto border border-white text-white font-semibold px-6 py-3 rounded-full transition-all hover:bg-white hover:text-black shadow-md text-center z-20">Télécharger mon CV</a>
        </div>
    `;
}
export function MapSection() {
    const formatTime = () => {
        const options = { timeZone: 'Europe/Paris', hour: '2-digit', minute: '2-digit', hour12: false };
        const time = new Date().toLocaleTimeString('fr-FR', options);
        return `${time} UTC+2`;
    };

    return `
        <div class="px-4 pb-4">
            <div class="relative bg-zinc-800/50 rounded-xl overflow-hidden">
                <img src="${Map}" alt="Map Picture" class="w-full h-32 object-cover">
                <div class="absolute bottom-10 left-4">
                    <h3 class="text-xl font-bold text-white">France, Orléans</h3>
                    <p class="text-gray-400 text-sm" id="orleans-time-mobile">${formatTime()}</p>
                </div>
            </div>
        </div>
    `;
}

export function LocationContact() {
    const locationContact = document.createElement('div');
    locationContact.className = 'relative bg-dark rounded-xl lg:mt-0 lg:rounded-[1rem]';

    const formatTime = () => {
        const options = { timeZone: 'Europe/Paris', hour: '2-digit', minute: '2-digit', hour12: false };
        const time = new Date().toLocaleTimeString('fr-FR', options);
        return `${time} UTC+2`;
    };

    
    locationContact.innerHTML = `
        <!-- Version Mobile/Tablette -->
        <div class="lg:hidden">
            <div class="p-4 sm:p-6 bg-zinc-800/50 rounded-xl">
                <div class="flex items-center justify-between">
                    
                    <div>
                    <img src="${Map}" alt="Map Picture" class="rounded-t-lg w-full">
                        <p class="text-lg text-white font-bold">France, Orléans</p>
                        <p class="text-sm text-gray-400" id="orleans-time-mobile">${formatTime()}</p>
                    </div>
                    <div class="w-2 h-2 rounded-full bg-white/50"></div>
                </div>
            </div>

            <div class="flex flex-col sm:flex-row gap-3 p-4 sm:p-6">
                <button data-modal-open="contact-modal" class="w-full sm:w-auto bg-white text-black font-semibold px-6 py-3 rounded-full transition-all hover:bg-gray-200 shadow-md z-20">Contact</button>
                <button onclick="window.open('https://github.com/DavidChatton', '_blank')" class="w-full sm:w-auto bg-gray-800 text-gray-300 font-semibold px-6 py-3 rounded-full transition-all hover:bg-gray-700 shadow-md z-20">Github</button>
                <a href="${resume}" download="CV-DavidChatton" title="CV-DavidChatton" class="w-full sm:w-auto border border-white text-white font-semibold px-6 py-3 rounded-full transition-all hover:bg-white hover:text-black shadow-md text-center z-20">CV</a>
            </div>
        </div>

        <!-- Version Desktop -->
        <div class="hidden lg:block">
            <img src="${Map}" alt="Map Picture" class="rounded-t-lg w-full">
            <div class="absolute inset-0 flex flex-col justify-center items-start -top-28 left-6 z-0">
                <p class="text-lg text-white font-bold">France, Orléans</p>
                <p class="text-sm text-gray-400 mt-2" id="orleans-time">${formatTime()}</p>
            </div>
            
            <div class="flex gap-4 justify-center w-full mt-8">
                <button data-modal-open="contact-modal" class="relative bg-white text-black font-semibold px-6 py-3 rounded-full transition-all hover:bg-gray-200 shadow-md z-20">Contact</button>
                <button onclick="window.open('https://github.com/DavidChatton', '_blank')" class="bg-gray-800 text-gray-300 font-semibold px-6 py-3 rounded-full transition-all hover:bg-gray-700 shadow-md z-20">Github</button>
                <a href="${resume}" download="CV-DavidChatton" title="CV-DavidChatton" class="border border-white text-white font-semibold px-6 py-3 rounded-full transition-all hover:bg-white hover:text-black shadow-md text-center z-20">CV</a>
            </div>
        </div>
    `;

    setInterval(() => {
        const timeElements = locationContact.querySelectorAll('#orleans-time, #orleans-time-mobile');
        timeElements.forEach(element => {
            if (element) {
                element.textContent = formatTime();
            }
        });
    }, 60000);
    
    return locationContact;
}