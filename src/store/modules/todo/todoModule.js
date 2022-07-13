import TodoApi from "../../../services/todo-api";

export const todoModule = {
  state: {
    todos: [],
    todo: {},
    isLoading: true,
    error: "",
  },
  mutations: {
    setTodos(state, todos) {
      state.todos = todos;
    },
    setTodo(state, todo) {
      state.todo = todo;
    },
    setIsLoading(state, load) {
      state.isLoading = load;
    },
    setError(state, error) {
      state.error = error;
    },
    addTodo(state, data) {
      state.todos.unshift(data);
    },
    deleteTodo(state, id) {
      state.todos = state.todos.filter((item) => item.id !== id);
    },
  },
  actions: {
    async getTodos({ state, commit }) {
      try {
        const data = await TodoApi.getTodos();
        commit("setTodos", data.data);
        commit("setIsLoading", false);
      } catch (error) {
        commit("setError", error.message);
        commit("setIsLoading", false);
      }
    },
    async getTodo({ state, commit }, id) {
      try {
        const data = await TodoApi.getTodo(id);
        commit("setTodo", data.data);
        commit("setIsLoading", false);
      } catch (error) {
        commit("setError", error.message);
        commit("setIsLoading", false);
      }
    },
    async createTodo({ state, commit }, todo) {
      try {
        const newTodo = await TodoApi.createTodo(todo);
        commit("addTodo", newTodo.data);
      } catch (error) {
        commit("setError", error.message);
      }
    },
    async removeTodo({ state, commit }, id) {
      try {
        await TodoApi.removeTodo(id);
        commit("deleteTodo", id);
      } catch (error) {
        commit("setError", error.message);
      }
    },
    async updateTodo({ state, commit }, todo) {
      try {
        const up = await TodoApi.updateTodo(todo);
        commit("setTodo", up.data);
      } catch (error) {
        commit("setError", error.message);
      }
    },
  },
  namespaced: true,
};
