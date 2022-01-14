<template>
    <h1>Aprendiendo Slots</h1>
    <button @click="openModal">Abrir Modal</button>

    <modal title="Hola Mundo" v-if="isOpen" @on:close="closeModal">
        <template v-slot:footer>
            <button @click="closeModal">Salir</button>
        </template>
        <template v-slot:header>
            <h2>Titulo del Modal</h2>
        </template>
        <template v-slot:body>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </template>
        <template v-slot:exposed="slotProps">
            <h2>
                {{ slotProps.newTitle }}
            </h2>
        </template>
    </modal>
    <!-- <modal>
        <h2>Titulo del Modal</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        <button>Salir</button>
    </modal> -->
</template>

<script>
import { defineAsyncComponent, ref } from "vue";
export default {
    components: {
        Modal: defineAsyncComponent(() => import("@/components/Modal.vue")),
    },
    setup() {
        const isOpen = ref(false);
        

        return {
            isOpen,
            openModal: () => isOpen.value = true,
            closeModal: () => isOpen.value = false,
        }
    },
};
</script>

<style></style>
