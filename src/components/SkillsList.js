import pythonIcon from "../../assets/icones/icon-python.png";
import pythonIconColor from "../../assets/icones/icon-python-color.png";
import javascriptIcon from "../../assets/icones/icon-javascript.png";
import javascriptIconColor from "../../assets/icones/icon-javascript-color.png";
import wordpressIcon from "../../assets/icones/icon-wordpress.png";
import wordpressIconColor from "../../assets/icones/icon-wordpress-color.png";
import phpIcon from "../../assets/icones/icon-php.png";
import phpIconColor from "../../assets/icones/icon-php-color.png";
import symfonyIcon from "../../assets/icones/icon-symfony.png";
import symfonyIconColor from "../../assets/icones/icon-symfony-color.png";
import laravelIcon from "../../assets/icones/icon-laravel.png";
import laravelIconColor from "../../assets/icones/icon-laravel-color.svg";
import bootstrapIcon from "../../assets/icones/icon-bootstrap.png";
import bootstrapIconColor from "../../assets/icones/icon-bootstrap-color.png";
import tailwindcssIcon from "../../assets/icones/icon-tailwindcss.png";
import tailwindcssIconColor from "../../assets/icones/icon-tailwindcss-color.png";
import mysqlIcon from "../../assets/icones/icon-mysql.png";
import mysqlIconColor from "../../assets/icones/icon-mysql-color.png";

export function SkillsList () {
  return `
   <div class="relative bg-dark p-4">
    <!-- Version Mobile -->
    <div class="lg:hidden grid grid-cols-3 gap-2">
      <button class="group relative bg-zinc-800 p-2 rounded-lg aspect-square flex items-center justify-center" data-tech="Python">
         <img src="${pythonIcon}" alt="icone-python" class="w-14 h-14">
      </button>

      <button class="group relative bg-zinc-800 p-2 rounded-lg aspect-square flex items-center justify-center" data-tech="JavaScript">
          <img src="${javascriptIcon}" alt="icone-javascript" class="w-14 h-14">
      </button>

      <button class="group relative bg-zinc-800 p-2 rounded-lg aspect-square flex items-center justify-center" data-tech="WordPress">
          <img src="${wordpressIcon}" alt="icone-wordpress" class="w-14 h-14">
      </button>

      <button class="group relative bg-zinc-800 p-2 rounded-lg aspect-square flex items-center justify-center" data-tech="PHP">
          <img src="${phpIcon}" alt="icone-php" class="w-14 h-14">
      </button>

      <button class="group relative bg-zinc-800 p-2 rounded-lg aspect-square flex items-center justify-center" data-tech="Symfony">
          <img src="${symfonyIcon}" alt="icone-symfony" class="w-14 h-14">
      </button>

      <button class="group relative bg-zinc-800 p-2 rounded-lg aspect-square flex items-center justify-center" data-tech="Laravel">
          <img src="${laravelIcon}" alt="icone-laravel" class="w-14 h-14">
      </button>

      <button class="group relative bg-zinc-800 p-2 rounded-lg aspect-square flex items-center justify-center" data-tech="Bootstrap">
          <img src="${bootstrapIcon}" alt="icone-bootstrap" class="w-14 h-14">
      </button>

      <button class="group relative bg-zinc-800 p-2 rounded-lg aspect-square flex items-center justify-center" data-tech="TailwindCSS">
          <img src="${tailwindcssIcon}" alt="icone-tailwindcss" class="w-14 h-14">
      </button>

      <button class="group relative bg-zinc-800 p-2 rounded-lg aspect-square flex items-center justify-center" data-tech="MySQL">
          <img src="${mysqlIcon}" alt="icone-mysql" class="w-14 h-14">
      </button>
    </div>

    <!-- Version Desktop -->
    <div class="hidden lg:flex lg:flex-wrap lg:justify-between lg:gap-4">
      <button class="group relative bg-zinc-800 p-4 rounded-lg shadow-md text-center w-fit transition-transform transform hover:scale-125 hover:bg-zinc-600 hover:shadow-lg" data-tech="Python">
         <img src="${pythonIcon}" alt="icone-python" class="h-16 mx-auto opacity-100 transition-opacity duration-300 group-hover:opacity-0 absolute inset-0 m-auto">
          <img src="${pythonIconColor}" alt="icone-python" class="h-16 mx-auto opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <span class="absolute left-1/2 transform -translate-x-1/2 bottom-[-0px] text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">Python</span>
      </button>

      <button class="group relative bg-zinc-800 p-4 rounded-lg shadow-md text-center w-fit transition-transform transform hover:scale-125 hover:bg-zinc-500 hover:shadow-lg" data-tech="JavaScript">
          <img src="${javascriptIcon}" alt="icone-javascript" class="h-16 mx-auto opacity-100 transition-opacity duration-300 group-hover:opacity-0 absolute inset-0 m-auto">
          <img src="${javascriptIconColor}" alt="icone-javascript-color" class="h-16 mx-auto opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <span class="absolute left-1/2 transform -translate-x-1/2 bottom-[-0px] text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">Javascript</span>
      </button>

      <button class="group relative bg-zinc-800 p-4 rounded-lg shadow-md text-center w-fit transition-transform transform hover:scale-125 hover:bg-zinc-500 hover:shadow-lg" data-tech="WordPress">
          <img src="${wordpressIcon}" alt="icone-wordpress" class="h-16 mx-auto opacity-100 transition-opacity duration-300 group-hover:opacity-0 absolute inset-0 m-auto">
          <img src="${wordpressIconColor}" alt="icone-wordpress-color" class="h-16 mx-auto opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <span class="absolute left-1/2 transform -translate-x-1/2 bottom-[-0px] text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">Wordpress</span>
      </button>

      <button class="group relative bg-zinc-800 p-4 rounded-lg shadow-md text-center w-fit transition-transform transform hover:scale-125 hover:bg-zinc-500 hover:shadow-lg" data-tech="PHP">
          <img src="${phpIcon}" alt="icone-php" class="h-16 mx-auto opacity-100 transition-opacity duration-300 group-hover:opacity-0 absolute inset-0 m-auto">
          <img src="${phpIconColor}" alt="icone-php-color" class="h-16 mx-auto opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <span class="absolute left-1/2 transform -translate-x-1/2 bottom-[-0px] text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">PHP</span>
      </button>

      <button class="group relative bg-zinc-800 p-4 rounded-lg shadow-md text-center w-fit transition-transform transform hover:scale-125 hover:bg-zinc-500 hover:shadow-lg" data-tech="Symfony">
          <img src="${symfonyIcon}" alt="icone-symfony" class="h-16 mx-auto opacity-100 transition-opacity duration-300 group-hover:opacity-0 absolute inset-0 m-auto">
          <img src="${symfonyIconColor}" alt="icone-symfony-color" class="h-16 mx-auto opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <span class="absolute left-1/2 transform -translate-x-1/2 bottom-[-0px] text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">Symfony</span>
      </button>

      <button class="group relative bg-zinc-800 p-4 rounded-lg shadow-md text-center w-fit transition-transform transform hover:scale-125 hover:bg-zinc-500 hover:shadow-lg" data-tech="Laravel">
          <img src="${laravelIcon}" alt="icone-laravel" class="h-16 mx-auto opacity-100 transition-opacity duration-300 group-hover:opacity-0 absolute inset-0 m-auto">
          <img src="${laravelIconColor}" alt="icone-laravel-color" class="h-16 mx-auto opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <span class="absolute left-1/2 transform -translate-x-1/2 bottom-[-0px] text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">Laravel</span>
      </button>

      <button class="group relative bg-zinc-800 p-4 rounded-lg shadow-md text-center w-fit transition-transform transform hover:scale-125 hover:bg-zinc-500 hover:shadow-lg" data-tech="Bootstrap">
          <img src="${bootstrapIcon}" alt="icone-bootstrap" class="h-16 mx-auto opacity-100 transition-opacity duration-300 group-hover:opacity-0 absolute inset-0 m-auto">
          <img src="${bootstrapIconColor}" alt="icone-bootstrap-color" class="h-16 mx-auto opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <span class="absolute left-1/2 transform -translate-x-1/2 bottom-[-0px] text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">Bootstrap</span>
      </button>

      <button class="group relative bg-zinc-800 p-4 rounded-lg shadow-md text-center w-fit transition-transform transform hover:scale-125 hover:bg-zinc-500 hover:shadow-lg" data-tech="TailwindCSS">
           <img src="${tailwindcssIcon}" alt="icone-tailwindcss" class="h-16 mx-auto opacity-100 transition-opacity duration-300 group-hover:opacity-0 absolute inset-0 m-auto">
          <img src="${tailwindcssIconColor}" alt="icone-tailwindcss-color" class="h-16 mx-auto opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <span class="absolute left-1/2 transform -translate-x-1/2 bottom-[-0px] text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">TailwindCss</span>
      </button>

      <button class="group relative bg-zinc-800 p-4 rounded-lg shadow-md text-center w-fit transition-transform transform hover:scale-125 hover:bg-zinc-500 hover:shadow-lg" data-tech="MySQL">
          <img src="${mysqlIcon}" alt="icone-mysql" class="h-16 mx-auto opacity-100 transition-opacity duration-300 group-hover:opacity-0 absolute inset-0 m-auto">
          <img src="${mysqlIconColor}" alt="icone-mysql-color" class="h-16 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <span class="absolute left-1/2 transform -translate-x-1/2 bottom-[-0px] text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">MySql</span>
      </button>
    </div>
  </div>
  `;
}