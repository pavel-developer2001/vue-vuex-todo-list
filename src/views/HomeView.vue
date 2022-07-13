<template>
  <CreateTodo />
  <div v-show="isLoading">Loading...</div>
  <div v-show="error">{{ error }}</div>
  <div v-for="todo in todos" :key="todo.id" v-show="!isLoading && !error">
    <router-link :to="todo.id"> {{ todo.text }}</router-link>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import {
  todosSelect,
  todoIsLoading,
  todoError,
} from "../store/modules/todo/todoSelector";
import CreateTodo from "../components/CreateTodo.vue";
export default {
  components: { CreateTodo },
  mounted() {
    this.getTodos();
  },
  computed: {
    ...mapState({
      todos: todosSelect,
      isLoading: todoIsLoading,
      error: todoError,
    }),
  },
  methods: {
    ...mapActions({
      getTodos: "todo/getTodos",
    }),
  },
};
</script>
<style></style>
