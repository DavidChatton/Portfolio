import profileImage from "../../assets/images/Image-profil.webp";
import { ContactButtons, MapSection } from './LocationContact.js';

export function ProfileHeader() {
  return `
  <div class="relative w-full bg-dark rounded-xl overflow-hidden">
    <!-- Version Mobile -->
    <div class="lg:hidden">
      <div class="p-4 pb-1 text-center">
        <h1 class="text-4xl font-bold text-white">David Chatton</h1>
        <h2 class="text-2xl font-semibold text-white mt-2">
          Développeur Web Fullstack
        </h2>
      </div>

      <div class="relative">
        <img src="${profileImage}" 
             alt="Profile Picture" 
             class="w-full h-[375px] object-cover object-[center_20%]">
        
        <div class="p-4 bg-dark">
          <p class="text-base text-gray-300">
            Avec plus de 3 ans d'expertise. Spécialisé dans le développement d'applications web et mobiles sur mesure, alliant performance et expérience utilisateur.
          </p>
          <div class="flex flex-wrap gap-2 mt-4 mb-2">
            <span class="bg-gray-800/50 text-gray-300 px-3 py-1.5 rounded-full text-sm">29 ans</span>
            <span class="bg-gray-800/50 text-gray-300 px-3 py-1.5 rounded-full text-sm">UX/UI</span>
            <span class="bg-gray-800/50 text-gray-300 px-3 py-1.5 rounded-full text-sm">Web 3D</span>
            <span class="bg-gray-800/50 text-gray-300 px-3 py-1.5 rounded-full text-sm">Figma</span>
          </div>
        </div>
        ${ContactButtons()}
        ${MapSection()}
      </div>
    </div>

    <!-- Version Desktop (≥lg) -->
    <div class="hidden lg:block relative w-full h-auto bg-dark lg:rounded-[1rem] overflow-hidden">
      <img src="${profileImage}" alt="Profile Picture" class="w-full h-full object-cover">
      <div class="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black/70 via-transparent to-transparent">
        <h1 class="text-5xl font-bold text-white leading-none">
          <span class="block">David</span>
          <span class="block">Chatton</span>
        </h1>
        <h2 class="text-3xl font-semibold text-white mt-3 whitespace-nowrap">
          Développeur Web Fullstack
        </h2>
        <p class="text-lg text-gray-300 mt-4">Avec plus de 3 ans d'expertise. Spécialisé dans le développement d'applications web et mobiles sur mesure, alliant performance et expérience utilisateur.</p>
        <div class="flex flex-wrap gap-3 my-4">
          <span class="bg-gray-800 text-gray-300 px-4 py-2 rounded-full text-sm">29 ans</span>
          <span class="bg-gray-800 text-gray-300 px-4 py-2 rounded-full text-sm">UX/UI</span>
          <span class="bg-gray-800 text-gray-300 px-4 py-2 rounded-full text-sm">Web 3D</span>
          <span class="bg-gray-800 text-gray-300 px-4 py-2 rounded-full text-sm">Figma</span>
        </div>
      </div>
    </div>
  </div>
  `;
}
