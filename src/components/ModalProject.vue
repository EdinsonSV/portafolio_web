<template>
    <div class="w-full flex items-center gap-4 justify-center flex-col-reverse md:flex-row">
        <div class="laptop">
            <div class="screen">
                <img :src="currentImage" alt="" class="w-full h-full object-cover slide">
                <div class="header"></div>
            </div>
            <div class="keyboard"></div>
        </div>
        <div class="relative flex justify-center h-[150px] w-[80px] border-2 border-black rounded-xl bg-gray-50">
            <span class="border border-black bg-black w-10 h-1 rounded-br-lg rounded-bl-lg z-50"></span>
            <img :src="phoneImage" alt="" class="w-full h-full object-cover absolute rounded-[10px] top-0 left-0">
            <span class="absolute -right-1 top-[18px] border-2 border-black h-3.5 rounded-md"></span>
            <span class="absolute -right-1 bottom-[90px] border-2 border-black h-5 rounded-md"></span>
        </div>
    </div>
    <div class="flex flex-col items-start mt-8">
        <h3 class="text-base md:text-lg font-bold text-left">{{nombreEmpresa}}</h3>
        <h5 class="text-sm text-gray-600">RUC : <span class="font-bold">{{ ruc }}</span></h5>
        <a :href="'https://' + url" target="_blank" class="font-bold inline-flex items-center gap-2 text-blue-600 text-sm">
            <slot name="icon">
                <svg class="text-base mt-[2px] text-blue-600" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em"
                    viewBox="0 0 24 24">
                    <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                        stroke-width="2">
                        <path stroke-dasharray="48" stroke-dashoffset="48" d="M11 5h-6v14h14v-6">
                            <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="48;0" />
                        </path>
                        <path stroke-dasharray="12" stroke-dashoffset="12" d="M13 11l7 -7">
                            <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s"
                                values="12;0" />
                        </path>
                        <path stroke-dasharray="8" stroke-dashoffset="8" d="M21 3h-6M21 3v6">
                            <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.8s" dur="0.2s"
                                values="8;0" />
                        </path>
                    </g>
                </svg>
            </slot>{{ url }}
        </a>
        <hr class="w-full my-2 bg-gray-600">
        <div class="text-left text-sm" v-html="mensaje"></div>
    </div>
</template>

<script>
import { ref, onMounted } from 'vue';

export default {
    props: {
        images: Array,
        phoneImage: String,
        nombreEmpresa: String,
        ruc: String,
        url: String,
        mensaje: String
    },
    setup(props) {
        const currentImage = ref(props.images[0]);
        let index = 0;

        const changeImage = () => {
            index = (index + 1) % props.images.length;
            currentImage.value = props.images[index];
        };

        onMounted(() => {
            setInterval(changeImage, 2000);
        });

        return {
            currentImage
        };
    }
};
</script>

<style scoped>
.screen {
  border-radius: 10px; /* Originalmente 20px */
  box-shadow: inset 0 0 0 1px #c8cacb, inset 0 0 0 5px #000;
  height: 159px; /* Originalmente 318px */
  width: 259px; /* Originalmente 518px */
  margin: 0 auto;
  padding: 4.5px 4.5px 11.5px 4.5px; /* Originalmente 9px 9px 23px 9px */
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  transform-style: preserve-3d;
  transform: perspective(500px) rotateX(0deg);
  transform-origin: 50% 100%;
}
.screen::before {
  content: "";
  width: 259px; /* Originalmente 518px */
  height: 6px; /* Originalmente 12px */
  position: absolute;
  background: linear-gradient(#979899, transparent);
  top: -1.5px;
  transform: rotateX(90deg);
  border-radius: 2.5px 2.5px;
}
.header {
  width: 50px; /* Originalmente 100px */
  height: 6px; /* Originalmente 12px */
  position: absolute;
  background-color: #000;
  top: 5px; /* Ajuste proporcional */
  left: 50%;
  transform: translate(-50%, -0%);
  border-radius: 0 0 3px 3px;
}
.screen::after {
  background: linear-gradient(to bottom, #272727, #0d0d0d);
  border-radius: 0 0 10px 10px; /* Originalmente 20px */
  bottom: 1px; /* Ajuste proporcional */
  content: "";
  height: 12px; /* Originalmente 24px */
  left: 1px; /* Ajuste proporcional */
  position: absolute;
  width: 257px; /* Originalmente 514px */
}

.keyboard {
  background: radial-gradient(circle at center, #e2e3e4 85%, #a9abac 100%);
  border: solid #a0a3a7;
  border-radius: 1px 1px 6px 6px;
  border-width: 0.5px 1px 0 1px; /* Mitad del borde original */
  box-shadow: inset 0 -1px 4px 0 #6c7074;
  height: 12px; /* Originalmente 24px */
  margin-top: -5px; /* Ajuste proporcional */
  position: relative;
  width: 310px; /* Originalmente 620px */
  z-index: 9;
}
.keyboard::after {
  background: #e2e3e4;
  border-radius: 0 0 5px 5px; /* Originalmente 10px */
  box-shadow: inset 0 0 2px 1px #babdbf;
  content: "";
  height: 5px; /* Originalmente 10px */
  left: 50%;
  margin-left: -30px; /* Originalmente -60px */
  position: absolute;
  top: 0;
  width: 60px; /* Originalmente 120px */
}
.keyboard::before {
  background: 0 0;
  border-radius: 0 0 1.5px 1.5px; /* Mitad del original */
  bottom: -1px; /* Ajuste proporcional */
  box-shadow: -135px 0 #272727, 125px 0 #272727;
  content: "";
  height: 1px; /* Originalmente 2px */
  left: 50%;
  margin-left: -5px; /* Originalmente -10px */
  position: absolute;
  width: 20px; /* Originalmente 40px */
}
</style>