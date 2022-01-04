<template>
    <h1 v-if="!pokemon && !errorMessage">Buscando...</h1>
    <h1 v-else-if="errorMessage">{{ errorMessage }}</h1>
    <template v-else>
        <h1>{{ pokemon.name }}</h1>
        <img :src="pokemon.sprites.front_default" />
    </template>
    <br />
    <router-link :to="{ name: 'search-pokemon' }">Volver</router-link>
</template>

<script>
import { watch } from "vue";
import { useRoute, onBeforeRouteLeave } from "vue-router";
import { usePokemon } from "../composables/usePokemon";
export default {
    setup() {
        const route = useRoute();

        const { pokemon, errorMessage, isLoading, searchPokemon } = usePokemon(route.params.id);

        watch(
            () => route.params.id,
            () => searchPokemon(route.params.id)
        )
        
        onBeforeRouteLeave(() => {
            const answer = window.confirm('¿Seguro que quieres salir?');
            if (!answer) return false;
        })

        return {
            pokemon,
            errorMessage,
            isLoading,
        };
    },
};
</script>
