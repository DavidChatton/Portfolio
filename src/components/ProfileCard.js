// src/components/ProfileCard.js
import profileImage from "../../assets/images/Image-profil.webp";
import mapImage from "../../assets/images/map.webp";
import resume from "../../assets/documents/CV-CODA.pdf"

export function ProfileCard() {
  const profileCard = document.createElement("div");
  profileCard.innerHTML = `
   <!-- Début de la carte de profil -->
   <div class="grid gap-4 lg:grid-cols-3 bg-site">
       <div class="relative lg:row-span-1">
           <div class="absolute inset-px rounded-lg bg-dark lg:rounded-[2rem]">
       </div>
   <div class="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
      <div class="relative min-h-[30rem] w-full grow [container-type:inline-size] max-lg:mx-auto max-lg:max-w-sm">
      </div>
    </div>
    <div
      class="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 lg:rounded-[2rem]">
      <div class="relative w-full h-full">
      <img src="${profileImage}" alt="Profile Picture" class="profile-picture w-full h-full object-cover">

      <div class="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black/70 via-transparent to-transparent">
        <div class="flex flex-col">
          <h1 class="text-5xl font-bold text-white mb-0 leading-none">David</h1>
          <h1 class="text-5xl font-bold text-white">Chatton</h1>
        </div>
        <p class="text-lg text-gray-300 mt-4">Développeur Web Fullstack avec 3 ans d'expérience sur différents langages. Expérimenté en création de solutions pour le web, mobile et services.</p>
        <div class="flex flex-wrap justify-start gap-3 mt-4 ">
          <span class="bg-gray-800 text-gray-300 px-4 py-2 rounded-full text-sm">29 ans</span>
          <span class="bg-gray-800 text-gray-300 px-4 py-2 rounded-full text-sm">UX/UI</span>
          <span class="bg-gray-800 text-gray-300 px-4 py-2 rounded-full text-sm">Web 3D</span>
          <span class="bg-gray-800 text-gray-300 px-4 py-2 rounded-full text-sm">Figma</span>
        </div>
      </div>
    </div>
    </div>
  </div>

  <div class="relative lg:row-span-2">
    <div class="absolute inset-px rounded-lg bg-white lg:rounded-[2rem]"></div>
    <div
      class="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
      <div class="relative min-h-[30rem] w-full grow">
        <div
          class="absolute bottom-0 left-10 right-0 top-10 overflow-hidden rounded-tl-xl bg-gray-900 shadow-2xl">
          <div class="flex bg-gray-800/40 ring-1 ring-white/5">
            <div
              class="-mb-px flex text-sm font-medium leading-6 text-gray-400">
              <div
                class="border-b border-r border-b-white/20 border-r-white/10 bg-white/5 px-4 py-2 text-white">
                NotificationSetting.jsx
              </div>
              <div class="border-r border-gray-600/10 px-4 py-2">App.jsx</div>
            </div>
          </div>
          <div class="px-6 pb-14 pt-6">
          </div>
        </div>
      </div>
    </div>
    <div
      class="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-b-[2rem] lg:rounded-[2rem] bg-dark">
    </div>
  </div>
  <div class="relative lg:row-span-1">
    <div class="absolute inset-px rounded-lg bg-white lg:rounded-[2rem]"></div>
    <div
      class="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">

      <div class="flex flex-1 items-center justify-center px-8 max-lg:pb-12 max-lg:pt-10 sm:px-10 lg:pb-2">
      </div>
    </div>
    <div
      class="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-t-[2rem]">
    </div>
  </div>
  <div class="relative lg:row-span-1">
    <div class="absolute inset-px rounded-lg bg-dark lg:rounded-[2rem]">
      <div class="location-info relative w-full h-[125px] rounded-lg bg-secondary">
        <img src="${mapImage}" alt="Map Picture" class="w-full h-auto rounded-lg">
        <div class="absolute inset-0 flex flex-col justify-center items-start top-0 left-3 right-0">
          <p class="text-lg text-text font-bold">France, Orléans</p>
          <p class="text-sm text-gray-400 mt-2">10:34 UTC+2</p>
        </div>
      </div>

        <div class="flex gap-4 justify-center w-full mt-8">
      <button id="contact-button" class="bg-white text-black font-semibold px-6 py-3 rounded-full transition-all hover:bg-gray-200 shadow-md">Contact</button>

      <button onclick="window.open('https://github.com/DavidChatton', '_blank')" class="bg-gray-800 text-gray-300 font-semibold px-6 py-3 rounded-full transition-all hover:bg-gray-700 shadow-md">Github</button>
      
      <a href="${resume}" download class="border border-white text-white font-semibold px-6 py-3 rounded-full transition-all hover:bg-white hover:text-black shadow-md text-center">CV</a>

    </div>

    <div id="contact-modal" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 hidden z-50">
      <div class="relative bg-white p-8 rounded-lg shadow-lg w-80">
        <button id="close-modal" class="absolute top-2 right-2 text-black text-3xl font-bold hover:bg-gray-200 rounded-full p-1">&times;</button>
        <h2 class="text-2xl font-bold mb-4 text-center">Contact Me</h2>
        <div class="flex flex-col gap-4">

          <a href="https://www.linkedin.com/in/david-chatton/" target="_blank" class="bg-blue-600 text-white font-semibold px-4 py-2 rounded-full text-center">LinkedIn</a>

          <a href="mailto:davidchatton.dev@gmail.com" class="bg-gray-800 text-white font-semibold px-4 py-2 rounded-full text-center">Email</a>

          <a href="tel:0638141812" class="bg-green-600 text-white font-semibold px-4 py-2 rounded-full text-center">Phone</a>
        </div>
      </div>
    </div>
    </div>
  </div>


  <div class="relative lg:row-span-1">
    <div class="absolute inset-px rounded-lg bg-white max-lg:rounded-t-[2rem]">
    </div>
    <div
      class="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
      <div class="px-8 pt-8 sm:px-10 sm:pt-10">
        <p class="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit maiores
          impedit.
        </p>
      </div>
      <div
        class="flex flex-1 items-center justify-center px-8 max-lg:pb-12 max-lg:pt-10 sm:px-10 lg:pb-2">
        <img
          class="w-full max-lg:max-w-xs"
          src="https://tailwindui.com/plus/img/component-images/bento-03-performance.png"
          alt=""/>
      </div>
    </div>
    <div
      class="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-t-[2rem]">
    </div>
  </div>
</div>
`;

  // Gestion de la modal de contact
  const contactButton = profileCard.querySelector("#contact-button");
  const contactModal = profileCard.querySelector("#contact-modal");
  const closeModalButton = profileCard.querySelector("#close-modal");

  // Vérifier que le bouton de contact et la modal existent avant d'ajouter les écouteurs d'événements
  if (contactButton && contactModal && closeModalButton) {
    contactButton.addEventListener("click", () => {
      contactModal.classList.remove("hidden");
    });
  }

  closeModalButton.addEventListener("click", () => {
    contactModal.classList.add("hidden");
  });

  
  return profileCard;
}