<template lang="">
  <router-link to="/">Назад</router-link>
  <div v-show="error">{{ error }}</div>
  <div v-show="isLoading">Loading...</div>
  <div v-show="!isLoading && !error && !isEdit">
    <div>id: {{ todo.id }}</div>
    <p>{{ todo.text }}</p>
  </div>
  <div v-show="!isLoading && !error && !isEdit">
    <button @click="deleteTodo">Delete</button>
    <button @click="isEdit = true">Update</button>
  </div>
  <div v-show="isEdit">
    <form @submit.prevent>
      <input placeholder="enter text" v-model="text" />
      <button @click="updateDataTodo">Update Todo</button>
      <button @click="isEdit = false">Cancel</button>
    </form>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import {
  todoDataSelect,
  todoError,
  todoIsLoading,
} from "../store/modules/todo/todoSelector";
export default {
  data() {
    return {
      isEdit: false,
      text: "",
    };
  },
  computed: {
    ...mapState({
      todo: todoDataSelect,
      isLoading: todoIsLoading,
      error: todoError,
    }),
  },
  methods: {
    ...mapActions({
      getTodo: "todo/getTodo",
      removeTodo: "todo/removeTodo",
      updateTodo: "todo/updateTodo",
    }),
    deleteTodo() {
      if (confirm("You want delete todo?")) {
        this.removeTodo(this.$route.params.id);
        this.$router.push("/");
      }
    },
    updateDataTodo() {
      if (!this.text) return alert("enter text");
      const newTodoData = { id: this.todo.id, text: this.text };
      this.updateTodo(newTodoData);
      this.isEdit = false;
    },
  },
  async mounted() {
    await this.getTodo(this.$route.params.id);
    this.text = this.todo.text;
  },
};
</script>

<style lang=""></style>
