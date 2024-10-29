<template>
    <div class="bg-[#f3f4f6] h-72 relative muestraHover">
        <img :src="imgSrc" :alt="imgAlt" class="h-72 object-contain object-center" />
        <div
            class="h-72 w-full absolute top-0 left-0 bg-gray-800/30 p-4 sombra_div opacity-0 transition-opacity duration-[500ms] pointer-events-none">
            <div class="flex flex-col justify-between h-full w-full">
                <div>
                    <h5>{{ name }}</h5>
                    <p>RUC: <span class="font-bold">{{ ruc }}</span></p>
                </div>
                <div @click="openModal(modalId)"
                    class="py-2 px-4 bg-blue-600 max-w-max text-sm rounded-full flex gap-2 items-center cursor-pointer">
                    Ver más
                    <slot name="icon">
                        <svg class="text-base text-white" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em"
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
                    </slot>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        name: { type: String, required: true },
        ruc: { type: String, required: true },
        imgSrc: { type: String, required: true },
        imgAlt: { type: String, default: '' },
        modalId: { type: Number, required: true },
    },
    methods: {
        openModal(id) {
            this.$emit('openModal', id);
        },
    },
};
</script>

<style scoped>
.sombra_div{
    background-image: linear-gradient(182deg, #00000012 60%, #1a191d 100%);
}

.muestraHover:hover > .absolute {
    opacity: 1;
    pointer-events: auto;
}
</style>