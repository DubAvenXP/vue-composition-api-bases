import { computed, ref } from "vue";
import { useStore } from "vuex";

export const useTodos = () => {
    const store = useStore();
    const currentTab = ref("all");
    const isOpenModal = ref(false);
    const newTodo = ref("");
    return {
        currentTab,
        pending: computed(() => store.getters["pendingTodos"]),
        all: computed(() => store.getters["allTodos"]),
        completed: computed(() => store.getters["completedTodos"]),
        getTodosByTab: computed(() =>
            store.getters["getTodosByTab"](currentTab.value)
        ),
        isOpenModal,
        newTodo,
        createTodo: () => {
            store.commit("createTodo", newTodo.value);
            isOpenModal.value = false;
            newTodo.value = "";
        },
        closeModal: () => isOpenModal.value = false,
        openModal: () => isOpenModal.value = true,
        toggleTodo: (id) => store.commit("toggleTodo", id),
    };
};