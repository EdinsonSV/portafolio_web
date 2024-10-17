<script setup>
import { ref, onMounted } from 'vue';

const mensajes = ['DESARROLLADOR DE APLICACIONES WEB', 'DESARROLLADOR DE APLICACIONES DE ESCRITORIO'];
const mensaje = ref('');
let mensajeActual = 0;
let escribiendo = true;

const typeMessage = () => {
  const currentMessage = mensajes[mensajeActual];
  const currentLength = mensaje.value.length;

  if (escribiendo) {
    if (currentLength < currentMessage.length) {
      mensaje.value = currentMessage.substring(0, currentLength + 1);
    } else {
      escribiendo = false;
      setTimeout(typeMessage, 1000);
      return;
    }
  } else {
    if (currentLength > 0) {
      mensaje.value = currentMessage.substring(0, currentLength - 1);
    } else {
      escribiendo = true;
      mensajeActual = (mensajeActual + 1) % mensajes.length;
    }
  }

  setTimeout(typeMessage, 100);
};

const animacion = () => {
  const luzInicio = document.getElementById('luzInicio');

  const originalTop = parseInt(window.getComputedStyle(luzInicio).top.replace('px', ''));
  const originalLeft = parseInt(window.getComputedStyle(luzInicio).left.replace('px', ''));

  let steps = 20;
  let currentStep = 0;

  const maxDesplazamiento = 40; 

  const moverAleatoriamente = () => {
    if (currentStep < steps) {
      const top = parseInt(window.getComputedStyle(luzInicio).top.replace('px', ''));
      const left = parseInt(window.getComputedStyle(luzInicio).left.replace('px', ''));

      let newTop = top + (Math.random() > 0.5 ? maxDesplazamiento / steps : -maxDesplazamiento / steps);
      let newLeft = left + (Math.random() > 0.5 ? maxDesplazamiento / steps : -maxDesplazamiento / steps);

      luzInicio.style.top = `${newTop}px`;
      luzInicio.style.left = `${newLeft}px`;

      currentStep++;
      setTimeout(moverAleatoriamente, 100);
    } else {
      regresarAPosicionOriginal(steps);
    }
  };

  const regresarAPosicionOriginal = (stepsRegreso) => {
    let step = 0;

    const regresar = () => {
      if (step < stepsRegreso) {
        const top = parseInt(window.getComputedStyle(luzInicio).top.replace('px', ''));
        const left = parseInt(window.getComputedStyle(luzInicio).left.replace('px', ''));

        let newTop = top + (originalTop - top) / (stepsRegreso - step);
        let newLeft = left + (originalLeft - left) / (stepsRegreso - step);

        luzInicio.style.top = `${newTop}px`;
        luzInicio.style.left = `${newLeft}px`;

        step++;
        setTimeout(regresar, 100);
      } else {
        currentStep = 0;
        setTimeout(moverAleatoriamente, 100);
      }
    };

    regresar();
  };
  
  moverAleatoriamente();
};

onMounted(() => {
  typeMessage();
  animacion();
});
</script>

<template>
    <div class="min-h-[calc(100vh-64px)] flex justify-center items-center relative" id="inicio">
        <div class="w-10 lg:w-11 h-10 lg:h-11 bg-[#f3900d] duration-75 rounded-full shadow-ED absolute top-[calc(100vh-91%)] left-[calc(100vw-54.4%)]" id="luzInicio"></div>
        <div class="justify-center items-center z-20">
            <div class="max-w-6xl flex flex-col gap-4 justify-center items-center">
                <h1 class="text-6xl text-center lg:text-9xl font-bold text-gray-50">EDINSON SANTOS</h1>
                <h3 class="text-xl lg:text-2xl text-center font-semibold pl-0.5 text-gray-300 min-h-8">{{ mensaje }}</h3>
                <p class="max-w-3xl text-center pl-0.5 leading-[22px] text-gray-400 text-base lg:leading-6">
                    Desarrollador <b>Full-Stack</b> con experiencia en aplicaciones <b>Web</b> y de <b>Escritorio</b>.
                    Creando soluciones personalizadas, enfocadas en funcionalidad, eficiencia y escalabilidad,
                    para proyectos que agreguen valor y cumplan con las necesidades del cliente.
                </p>
            </div>
        </div>
        <div @click="scrollToElement('experiencia')" class="absolute bottom-0">
            <div class="scrolldown">
                <div class="chevrons">
                    <div class="chevrondown"></div>
                    <div class="chevrondown"></div>
                </div>
            </div>
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
        const elementTop = element.getBoundingClientRect().top + window.pageYOffset;

        window.scrollTo({
          top: elementTop - 80,
          behavior: 'smooth'
        });
      }
    }
  }
}
</script>

<style scoped>
.shadow-ED {
    box-shadow: inset 5px -5px 15px 8px #fbbf24, -10px 10px 110px 30px #fbbe24;
}

.scrolldown {
  --color: #2563eb;
  --sizeX: 30px;
  --sizeY: 50px;
  position: relative;
  width: var(--sizeX);
  height: var(--sizeY);
  margin-left: var(sizeX / 2);
  border: calc(var(--sizeX) / 10) solid var(--color);
  border-radius: 50px;
  box-sizing: border-box;
  margin-bottom: 16px;
  cursor: pointer;
}

.scrolldown::before {
  content: "";
  position: absolute;
  bottom: 30px;
  left: 50%;
  width: 6px;
  height: 6px;
  margin-left: -3px;
  background-color: var(--color);
  border-radius: 100%;
  animation: scrolldown-anim 2s infinite;
  box-sizing: border-box;
  box-shadow: 0px -5px 3px 1px #2a547066;
}

@keyframes scrolldown-anim {
  0% {
    opacity: 0;
    height: 6px;
  }

  40% {
    opacity: 1;
    height: 10px;
  }

  80% {
    transform: translate(0, 20px);
    height: 10px;
    opacity: 0;
  }

  100% {
    height: 3px;
    opacity: 0;
  }
}

.chevrons {
  padding: 6px 0 0 0;
  margin-left: -3px;
  margin-top: 48px;
  width: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.chevrondown {
  margin-top: -6px;
  position: relative;
  border: solid var(--color);
  border-width: 0 3px 3px 0;
  display: inline-block;
  width: 10px;
  height: 10px;
  transform: rotate(45deg);
}

.chevrondown:nth-child(odd) {
  animation: pulse54012 500ms ease infinite alternate;
}

.chevrondown:nth-child(even) {
  animation: pulse54012 500ms ease infinite alternate 250ms;
}

@keyframes pulse54012 {
  from {
    opacity: 0;
  }

  to {
    opacity: 0.5;
  }
}
</style>