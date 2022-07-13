<template lang="">
  <form @submit.prevent="addTodo">
    <input placeholder="enter text" v-model="text" />
    <button type="submit">Add Todo</button>
  </form>
</template>
<script>
import { nanoid } from "nanoid";
import { mapActions } from "vuex";
export default {
  data() {
    return {
      text: "",
    };
  },
  methods: {
    ...mapActions({
      createTodo: "todo/createTodo",
    }),
    addTodo() {
      if (!this.text) return alert("enter text");
      const data = { id: nanoid(), text: this.text };
      this.createTodo(data);
      this.text = "";
    },
  },
};
</script>
<style lang=""></style>
