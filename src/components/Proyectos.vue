<script setup>
import { ref } from 'vue';
import CompanyCard from './CompanyCard.vue';
import ModalProject from './ModalProject.vue';

const showModal = ref(false);
const selectedProject = ref(null);

const openModal = (projectNumber) => {
  selectedProject.value = projectNumber;
  showModal.value = true;
};

const closeModal = () => {
  showModal.value = false;
  selectedProject.value = null;
};

const project1Images = ['/IMG/avicolasaucedo.com.png', '/IMG/avicolasaucedo_Escritorio.png'];
const project2Images = ['/IMG/avicolabrialemagisac.com.png', '/IMG/avicolabrialemagisac_Escritorio.png'];
const project3Images = ['/IMG/seacorp.balinsa.com.png', '/IMG/seacorp.balinsa_Escritorio.png'];
</script>

<template>
    <div id="proyectos">
        <h2 class="text-3xl lg:text-6xl font-bold text-gray-50 text-center py-8 mb-8" data-aos="fade-up">PROYECTOS</h2>
        <div class="max-w-7xl mx-auto">
            <div class="text-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2" data-aos="fade-up">
                <CompanyCard
                    name="INVERSIONES SAUCEDO PERU E.I.R.L."
                    ruc="20601646944"
                    imgSrc="/IMG/avicolasaucedo.com.png"
                    imgAlt="avicolasaucedo.com"
                    :modalId="1"
                    @openModal="openModal"
                />
                <CompanyCard
                    name="BRIALEMAGI SOCIEDAD ANONIMA CERRADA"
                    ruc="20612079065"
                    imgSrc="/IMG/avicolabrialemagisac.com.png"
                    imgAlt="avicolabrialemagisac.com"
                    :modalId="2"
                    @openModal="openModal"
                />
                <CompanyCard
                    name="SEACORP PERU S.A.C."
                    ruc="20506548188"
                    imgSrc="/IMG/seacorp.balinsa.com.png"
                    imgAlt="seacorp.balinsa.com"
                    :modalId="3"
                    @openModal="openModal"
                />
            </div>
        </div>

        <div v-if="showModal" class="fixed z-[1000] inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div class="bg-white p-8 rounded-md max-w-3xl w-full max-h-[80vh] text-center relative overflow-auto">
                <div class="absolute top-2 right-2">
                    <button @click="closeModal" class="bg-red-600 text-white w-8 h-8 rounded flex justify-center items-center">
                    <svg class="text-2xl" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                        <g fill="none" stroke="currentColor" stroke-dasharray="16" stroke-dashoffset="16" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                        <path d="M7 7l10 10">
                            <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="16;0" />
                        </path>
                        <path d="M17 7l-10 10">
                            <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.4s" dur="0.4s" values="16;0" />
                        </path>
                        </g>
                    </svg>
                    </button>
                </div>
                <h3 class="text-2xl tracking-[0.025em] font-bold mt-8 md:mt-0 mb-8">DETALLES DEL PROYECTO</h3>
                
                <ModalProject v-if="selectedProject === 1" 
                    :images="project1Images" 
                    phoneImage="/IMG/telefono_avicolasaucedo.com.png" 
                    nombreEmpresa = "INVERSIONES SAUCEDO PERU E.I.R.L."
                    url="avicolasaucedo.com"
                    ruc = "20601646944"
                    mensaje="Este proyecto incluye el desarrollo de dos aplicaciones complementarias: una aplicación de escritorio y una web, que forman un sistema de gestión avícola integral.<br /><br />
                            La aplicación de escritorio se utiliza en el camal para registrar de manera precisa las ventas, optimizando el proceso de registro. Por su parte, la aplicación web procesa estos datos y permite la gestión de cuentas de clientes, análisis de la eficiencia en el despacho de productos, y control de ventas e inventario.<br /><br />
                            El sistema ayuda a la empresa a monitorear la merma de productos, calcular ganancias y tomar decisiones basadas en datos. Además, permite identificar clientes que no cumplen con los pagos, facilitando el seguimiento y gestión de cuentas por cobrar. También proporciona informes sobre tendencias de ventas y rendimiento de productos, lo que permite a la empresa ajustar su estrategia de comercialización.<br /><br />
                            Con estas herramientas, se maximizan la rentabilidad y la satisfacción del cliente, asegurando una respuesta ágil a las demandas del mercado y mejorando la relación con los clientes a través de un análisis proactivo."
                />
                <ModalProject v-if="selectedProject === 2" 
                    :images="project2Images" 
                    phoneImage="/IMG/telefono_avicolabrialemagisac.com.png" 
                    nombreEmpresa = "BRIALEMAGI SOCIEDAD ANONIMA CERRADA"
                    url="avicolabrialemagisac.com"
                    ruc = "20612079065"
                    mensaje="Este proyecto consiste en el desarrollo de un sistema de gestión avícola avanzado que incluye una aplicación de escritorio y una web, ofreciendo una solución integral para la empresa.<br /><br />
                            Además de las funcionalidades de registro las ventas, este sistema permite gestionar las cuentas con proveedores, facilitando el seguimiento de pagos y compras. Incluye una caja chica para llevar un control financiero más detallado, así como un registro de pedidos que optimiza el proceso de abastecimiento.<br /><br />
                            Asimismo, se proporciona un resumen del dinero total gastado en compras y lo obtenido de las ventas, permitiendo un análisis claro de la rentabilidad del negocio. La aplicación también incluye el control de la planilla de los trabajadores, asegurando una gestión eficiente de los recursos humanos.<br /><br />
                            Este sistema robusto no solo maximiza la rentabilidad y la satisfacción del cliente, sino que también ofrece herramientas para una toma de decisiones informada y proactiva, fortaleciendo así la operatividad de la empresa."
                />
                <ModalProject v-if="selectedProject === 3" 
                    :images="project3Images" 
                    phoneImage="/IMG/telefono_seacorp.balinsa.com.png" 
                    nombreEmpresa = "SEACORP PERU S.A.C."
                    url="seacorp.balinsa.com"
                    ruc = "20506548188"
                    mensaje="Este proyecto consta de dos aplicaciones: una de escritorio y otra web, diseñadas para optimizar la industria pesquera.<br /><br />
                            La aplicación de escritorio registra detalladamente todo el producto procesado por los trabajadores, asegurando un control exhaustivo. La aplicación web permite visualizar estos datos, facilitando el cálculo de pagos a cada empleado por el producto procesado.<br /><br />
                            Además, genera reportes diarios y semanales por servicio, lo que ayuda a identificar la productividad de cada proceso y a tomar decisiones informadas para mejorar la eficiencia y maximizar la rentabilidad de la empresa."
                />
            </div>
        </div>

    </div>
</template>