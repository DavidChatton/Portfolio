import pythonIcon from "../../assets/icones/icon-python.png";
import javascriptIcon from "../../assets/icones/icon-javascript.png";
import wordpressIcon from "../../assets/icones/icon-wordpress.png";
import phpIcon from "../../assets/icones/icon-php.png";
import symfonyIcon from "../../assets/icones/icon-symfony.png";
import laravelIcon from "../../assets/icones/icon-laravel.png";
import bootstrapIcon from "../../assets/icones/icon-bootstrap.png";
import tailwindIcon from "../../assets/icones/icon-tailwindcss.png";
import mysqlIcon from "../../assets/icones/icon-mysql.png";

export function SkillsList () {
  return `
  <div class="relative lg:row-span-1 rounded-lg bg-dark max-lg:rounded-t-[2rem] p-4">
    <div class="flex flex-wrap justify-between gap-4">

      <button class="group relative bg-zinc-800 p-4 rounded-lg shadow-md text-center w-fit transition-transform transform hover:scale-125 hover:bg-zinc-500 hover:shadow-lg">
          <img src="${pythonIcon}" alt="icone-python" class="h-16 mx-auto">
          <span class="absolute left-1/2 transform -translate-x-1/2 bottom-[-0px] text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">Python</span>
      </button>

      <button class="group relative bg-zinc-800 p-4 rounded-lg shadow-md text-center w-fit transition-transform transform hover:scale-125 hover:bg-zinc-500 hover:shadow-lg">
          <img src="${javascriptIcon}" alt="icone-javascript" class="h-16 mx-auto">
          <span class="absolute left-1/2 transform -translate-x-1/2 bottom-[-0px] text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">Javascript</span>
      </button>

      <button class="group relative bg-zinc-800 p-4 rounded-lg shadow-md text-center w-fit transition-transform transform hover:scale-125 hover:bg-zinc-500 hover:shadow-lg">
          <img src="${wordpressIcon}" alt="icone-wordpress" class="h-16 mx-auto">
          <span class="absolute left-1/2 transform -translate-x-1/2 bottom-[-0px] text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">Wordpress</span>
      </button>

      <button class="group relative bg-zinc-800 p-4 rounded-lg shadow-md text-center w-fit transition-transform transform hover:scale-125 hover:bg-zinc-500 hover:shadow-lg">
          <img src="${phpIcon}" alt="icone-php" class="h-16 mx-auto">
          <span class="absolute left-1/2 transform -translate-x-1/2 bottom-[-0px] text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">PHP</span>
      </button>

      <button class="group relative bg-zinc-800 p-4 rounded-lg shadow-md text-center w-fit transition-transform transform hover:scale-125 hover:bg-zinc-500 hover:shadow-lg">
          <img src="${symfonyIcon}" alt="icone-symfony" class="h-16 mx-auto">
          <span class="absolute left-1/2 transform -translate-x-1/2 bottom-[-0px] text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">Symfony</span>
      </button>

      <button class="group relative bg-zinc-800 p-4 rounded-lg shadow-md text-center w-fit transition-transform transform hover:scale-125 hover:bg-zinc-500 hover:shadow-lg">
          <img src="${laravelIcon}" alt="icone-laravel" class="h-16 mx-auto">
          <span class="absolute left-1/2 transform -translate-x-1/2 bottom-[-0px] text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">Laravel</span>
      </button>

      <button class="group relative bg-zinc-800 p-4 rounded-lg shadow-md text-center w-fit transition-transform transform hover:scale-125 hover:bg-zinc-500 hover:shadow-lg">
          <img src="${bootstrapIcon}" alt="icone-bootstrap" class="h-16 mx-auto">
          <span class="absolute left-1/2 transform -translate-x-1/2 bottom-[-0px] text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">Bootstrap</span>
      </button>

      <button class="group relative bg-zinc-800 p-4 rounded-lg shadow-md text-center w-fit transition-transform transform hover:scale-125 hover:bg-zinc-500 hover:shadow-lg">
          <img src="${tailwindIcon}" alt="icone-tailwind" class="h-16 mx-auto">
          <span class="absolute left-1/2 transform -translate-x-1/2 bottom-[-0px] text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">TailwindCss</span>
      </button>

      <button class="group relative bg-zinc-800 p-4 rounded-lg shadow-md text-center w-fit transition-transform transform hover:scale-125 hover:bg-zinc-500 hover:shadow-lg">
          <img src="${mysqlIcon}" alt="icone-mysql" class="h-16 mx-auto">
          <span class="absolute left-1/2 transform -translate-x-1/2 bottom-[-0px] text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">MySql</span>
      </button>

    </div>
  </div>
  `;
}
