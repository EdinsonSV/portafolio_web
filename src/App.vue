<script setup>
import { ref, onMounted } from 'vue'
import Inicio from './components/Inicio.vue'
import About from './components/About.vue'
import Proyectos from './components/Proyectos.vue'
import Contacto from './components/Contacto.vue'

let isSticky = false;
const toogle = ref(false);

const handleScroll = () => {
    const header = document.getElementById('topHeader');
    const flotante = document.getElementById('flotante');

    const headerTop = header.getBoundingClientRect().top;

    if (headerTop <= 0 && !isSticky) {
        header.classList.add('shadow-lg', 'shadow-gray-700/40');
        isSticky = true;
        flotante.classList.add('flex');
        flotante.classList.remove('hidden');
    } else if (headerTop > 0 && isSticky) {
        header.classList.remove('shadow-lg', 'shadow-gray-700/40');
        isSticky = false;
        flotante.classList.add('hidden');
        flotante.classList.remove('flex');
    }
};

onMounted(() => {
    window.addEventListener('scroll', handleScroll);

    const follower = document.querySelector('.follow');

    document.addEventListener('mousemove', (event) => {
        const mouseX = event.clientX;
        const mouseY = event.clientY;

        follower.style.transform = `translate(${mouseX - 16}px, ${mouseY - 16}px)`;
    });
})
</script>

<template>
    <div class="follow fixed z-[10000] w-8 h-8 rounded-full border-2 border-gray-200 justify-center items-center hidden md:flex pointer-events-none">
        <div class="w-2 h-2 bg-gray-400 rounded-full"></div>
    </div>
    <div @click="scrollToElementTop()" class="fixed bottom-4 right-4 hidden justify-center items-center p-2 bg-blue-700 rounded-full z-[1000] cursor-pointer" id="flotante">
        <svg class="text-white text-2xl" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 21c-1.654 0-3-1.346-3-3v-4.764c-1.143 1.024-3.025.979-4.121-.115a3 3 0 0 1 0-4.242L12 1.758l7.121 7.121a3 3 0 0 1 0 4.242c-1.094 1.095-2.979 1.14-4.121.115V18c0 1.654-1.346 3-3 3M11 8.414V18a1.001 1.001 0 0 0 2 0V8.414l3.293 3.293a1.023 1.023 0 0 0 1.414 0a1 1 0 0 0 0-1.414L12 4.586l-5.707 5.707a1 1 0 0 0 0 1.414a1.023 1.023 0 0 0 1.414 0z"/></svg>
    </div>
    <div class="bg-[#15202b] bg-cover bg-center bg-no-repeat bg-[url('/public/IMG/fondoInicio.jpg')]">
        <div class="mx-auto py-8 px-8 md:px-16" style="background-image: linear-gradient(182deg, #00000012 60%, #1a191d 100%);">
            <Inicio />
        </div>
    </div>
    <div class="flex flex-col">
        <header class="bg-[#1B1A1E] sticky top-0 left-0 lg:py-4 pt-4 lg:px-8 md:px-16 z-50" id="topHeader">
            <nav class="flex flex-col justify-between items-center lg:flex-row max-w-7xl m-auto w-full">
                <div class="flex justify-between items-center w-full px-8 lg:px-0 pb-4 lg:pb-0">
                    <div class="cursor-pointer" @click="scrollToElementTop()">
                        <img src="/public/IMG/logo_SV.png" alt="imgInicio" class="w-12">
                    </div>
                    <div class="lg:hidden flex">
                        <svg v-if="!toogle" @click="toogle = true" class="text-white text-3xl" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5L12 12L19 5M12 12H12M5 19L12 12L19 19"><animate fill="freeze" attributeName="d" dur="0.2s" values="M5 5L12 12L19 5M12 12H12M5 19L12 12L19 19;M5 5L12 5L19 5M5 12H19M5 19L12 19L19 19"/></path></svg>
                        <svg v-if="toogle" @click="toogle = false" class="text-white text-3xl" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5L12 5L19 5M5 12H19M5 19L12 19L19 19"><animate fill="freeze" attributeName="d" dur="0.2s" values="M5 5L12 5L19 5M5 12H19M5 19L12 19L19 19;M5 5L12 12L19 5M12 12H12M5 19L12 12L19 19"/></path></svg>
                    </div>
                </div>
                <div class="lg:flex hidden">
                    <ul class="flex gap-8 text-xs font-bold">
                        <li>
                            <p @click="scrollToElementTop()" class="text-white hover:text-gray-400 cursor-pointer">INICIO</p>
                        </li>
                        <li>
                            <p @click="scrollToElement('experiencia')" class="text-white hover:text-gray-400 cursor-pointer">EXPERIENCIA</p>
                        </li>
                        <li>
                            <p @click="scrollToElement('proyectos')" class="text-white hover:text-gray-400 cursor-pointer">PROYECTOS</p>
                        </li>
                        <li>
                            <p @click="scrollToElement('contacto')" class="text-white hover:text-gray-400 cursor-pointer">CONTACTO</p>
                        </li>
                    </ul>
                </div>
                <div v-if="toogle" class="flex lg:hidden w-full px-8">
                    <ul class="flex flex-col text-xs font-bold w-full">
                        <li @click="toogle = false" class="text-center w-full border-y py-4 border-gray-500">
                            <p @click="scrollToElementTop()" class="text-white hover:text-gray-400 cursor-pointer">INICIO</p>
                        </li>
                        <li @click="toogle = false" class="text-center w-full border-b py-4 border-gray-500">
                            <p @click="scrollToElementMovile('experiencia')" class="text-white hover:text-gray-400 cursor-pointer">EXPERIENCIA</p>
                        </li>
                        <li @click="toogle = false" class="text-center w-full border-b py-4 border-gray-500">
                            <p @click="scrollToElementMovile('proyectos')" class="text-white hover:text-gray-400 cursor-pointer">PROYECTOS</p>
                        </li>
                        <li @click="toogle = false" class="text-center w-full py-4">
                            <p @click="scrollToElementMovile('contacto')" class="text-white hover:text-gray-400 cursor-pointer">CONTACTO</p>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>

        <div class="max-w-7xl mx-auto py-8 px-8 md:px-16 w-full">
            <About />
        </div>

        <div class="max-w-7xl mx-auto py-8 px-8 md:px-16 w-full">
            <Proyectos />
        </div>
        
        <div class="w-full bg-[#0c1018]">
            <Contacto />
        </div>
    </div>
</template>

<script>
export default {
  methods: {
    scrollToElement(id) {
      const element = document.getElementById(id);
      if (element) {
        // Obtener la posición del elemento
        const elementTop = element.getBoundingClientRect().top + window.scrollY;

        window.scrollTo({
          top: elementTop - 80,
          behavior: 'smooth'
        });
      }
    },
    scrollToElementMovile(id) {
      const element = document.getElementById(id);
      if (element) {
        // Obtener la posición del elemento
        const elementTop = element.getBoundingClientRect().top + window.scrollY;

        window.scrollTo({
          top: elementTop - 280,
          behavior: 'smooth'
        });
      }
    },
    scrollToElementTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }
  }
}
</script>