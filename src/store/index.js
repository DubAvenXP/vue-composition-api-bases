import { createStore } from 'vuex';

export default createStore({
  state: {
    todos: [
      { id: 1, text: 'Recolectar las gemas del infinito', completed: false },
      { id: 2, text: 'Gema del Alma', completed: true },
      { id: 3, text: 'Gema del Poder', completed: true },
      { id: 4, text: 'Gema de la realidad', completed: false },
      { id: 5, text: 'Conseguir nuevos secuaces competentes', completed: false },
    ],
  },
  mutations: {
    toggleTodo(state, id) {
      const todoIdx = state.todos.findIndex(todo => todo.id === id);
      state.todos[todoIdx].completed = !state.todos[todoIdx].completed;
    }
  },
  actions: {
  },
  modules: {
  },
  getters: {
    pendingTodos(state, getters, rootState) {
      return state.todos.filter(todo => !todo.completed);
    },
    allTodos(state, getters, rootState) {
      return [...state.todos];
    },
    completedTodos(state, getters, rootState) {
      return state.todos.filter(todo => todo.completed);
    },
    getTodosByTab: (_, getters) => (tab) => {
      switch (tab) {
        case 'pending': return getters.pendingTodos;
        case 'completed': return getters.completedTodos;
        case 'all': return getters.allTodos;
      }
    }

  }


});
