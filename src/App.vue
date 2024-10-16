<script setup>
import { ref, onMounted } from 'vue'
import Inicio from './components/Inicio.vue'
import About from './components/About.vue'

let isSticky = false;
const toogle = ref(false);

const handleScroll = () => {
    const header = document.getElementById('experiencia');

    const headerTop = header.getBoundingClientRect().top;

    if (headerTop <= 0 && !isSticky) {
        header.classList.add('shadow-lg', 'shadow-gray-700/40');
        isSticky = true;
    } else if (headerTop > 0 && isSticky) {
        header.classList.remove('shadow-lg', 'shadow-gray-700/20');
        isSticky = false;
    }
};

onMounted(() => {
    window.addEventListener('scroll', handleScroll)
})
</script>

<template>
    <div class="bg-[#15202b] bg-cover bg-center bg-no-repeat"
        style="background-image: url('/public/IMG/tamalsen-home-cover.jpg');">
        <div class="mx-auto py-8 px-8 md:px-16" style="background-image: linear-gradient(182deg, #00000012 60%, #1a191d 100%);">
            <Inicio />
        </div>
    </div>
    <div class="flex flex-col">
        <header class="bg-[#1B1A1E] sticky top-0 left-0 lg:py-4 pt-4 lg:px-8 md:px-16 z-50" id="experiencia">
            <nav class="flex flex-col justify-between items-center lg:flex-row">
                <div class="flex justify-between items-center w-full px-8 lg:px-0 pb-4 lg:pb-0">
                    <div class="">
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
                            <a href="#inicio" class="text-white hover:text-gray-400">INICIO</a>
                        </li>
                        <li>
                            <a href="#" class="text-white hover:text-gray-400">EXPERIENCIA</a>
                        </li>
                        <li>
                            <a href="#" class="text-white hover:text-gray-400">PROYECTOS</a>
                        </li>
                        <li>
                            <a href="#" class="text-white hover:text-gray-400">CONTACTO</a>
                        </li>
                    </ul>
                </div>
                <div v-if="toogle" class="flex lg:hidden w-full px-8">
                    <ul class="flex flex-col text-xs font-bold w-full">
                        <li @click="toogle = false" class="text-center w-full border-y py-4 border-gray-500">
                            <a href="#inicio" class="text-white hover:text-gray-400">INICIO</a>
                        </li>
                        <li @click="toogle = false" class="text-center w-full border-b py-4 border-gray-500">
                            <a href="#" class="text-white hover:text-gray-400">EXPERIENCIA</a>
                        </li>
                        <li @click="toogle = false" class="text-center w-full border-b py-4 border-gray-500">
                            <a href="#" class="text-white hover:text-gray-400">PROYECTOS</a>
                        </li>
                        <li @click="toogle = false" class="text-center w-full py-4">
                            <a href="#" class="text-white hover:text-gray-400">CONTACTO</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>

        <div class="max-w-7xl mx-auto py-8 px-8 md:px-16 w-full">
            <About />
        </div>

        <!-- <div class="max-w-7xl mx-auto py-8 px-8 md:px-16 w-full">
            <About />
        </div> -->
    </div>
</template>