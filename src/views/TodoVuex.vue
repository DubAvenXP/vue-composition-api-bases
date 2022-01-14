<template>
    <h1>Lista de tareas de Thanos</h1>
    <h4>Pendientes: {{ pending.length }}</h4>
    <hr />

    <button
        @click="currentTab = 'all'"
        :class="{ active: currentTab === 'all' }"
    >
        Todos
    </button>
    <button
        @click="currentTab = 'pending'"
        :class="{ active: currentTab === 'pending' }"
    >
        Pendientes
    </button>
    <button
        @click="currentTab = 'completed'"
        :class="{ active: currentTab === 'completed' }"
    >
        Completados
    </button>

    <div>
        <ul>
            <li
                v-for="todo in getTodosByTab"
                :key="todo.id"
                :class="{ completed: todo.completed }"
                @dblclick="toggleTodo(todo.id)"
            >
                {{ todo.text }}
            </li>
        </ul>
    </div>

    <button @click="openModal">Crear ToDo</button>
    <modal v-if="isOpenModal" @on:close="closeModal">
        <template v-slot:header>
            <h4>Crear un nuevo ToDo</h4>
        </template>
        <template v-slot:body>
            <form @submit.prevent="createTodo">
                <input name="newTodo" id="newTodo" v-model="newTodo"/>
            </form>
        </template>
        <!-- <template v-slot:footer>
            <br>
            <button @click="createTodo">Crear</button>
        </template> -->
    </modal>
</template>

<script>
import { useTodos } from "@/composables/useTodos";
import { defineAsyncComponent } from "vue";

export default {
    components: {
        Modal: defineAsyncComponent(() => import("@/components/Modal.vue")),
    },
    setup() {
        const {
            currentTab,
            pending,
            all,
            completed,
            toggleTodo,
            getTodosByTab,
            openModal,
            closeModal,
            isOpenModal,
            createTodo,
            newTodo,
        } = useTodos();

        return {
            currentTab,
            pending,
            toggleTodo,
            getTodosByTab,
            openModal,
            closeModal,
            isOpenModal,
            createTodo,
            newTodo,
        };
    },
};
</script>

<style scoped>
div {
    display: flex;
    justify-content: center;
    text-align: center;
}
ul {
    width: 300px;
    text-align: left;
}
li {
    cursor: pointer;
    margin: 15px 0;
}
.active {
    background-color: #2c3e50;
    color: #fff;
}
.completed {
    text-decoration: line-through;
}
</style>
