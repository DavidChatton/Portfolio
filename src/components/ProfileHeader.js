import profileImage from "../../assets/images/Image-profil.webp";

export function ProfileHeader() {
  return `
  <div class="relative w-full h-auto bg-dark lg:rounded-[2rem]">
    <img src="${profileImage}" alt="Profile Picture" class="w-full h-full object-cover rounded-lg">
    <div class="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black/70 via-transparent to-transparent">
      <h1 class="text-5xl font-bold text-white leading-none">David</h1> <!-- Simplification de la structure -->
      <h1 class="text-5xl font-bold text-white">Chatton</h1>
      <p class="text-lg text-gray-300 mt-2">Développeur Web Fullstack</p>
      <p class="text-lg text-gray-300 mt-4">Avec 3 ans d'expérience sur différents langages. Expérimenté en création de solutions pour le web, mobile et services.</p>
      <div class="flex flex-wrap gap-3 mt-4">
        <span class="bg-gray-800 text-gray-300 px-4 py-2 rounded-full text-sm">29 ans</span>
        <span class="bg-gray-800 text-gray-300 px-4 py-2 rounded-full text-sm">UX/UI</span>
        <span class="bg-gray-800 text-gray-300 px-4 py-2 rounded-full text-sm">Web 3D</span>
        <span class="bg-gray-800 text-gray-300 px-4 py-2 rounded-full text-sm">Figma</span>
      </div>
    </div>
  </div>
  `;
}
