import { createStore } from "vuex";
import { todoModule } from "./modules/todo/todoModule";

const store = createStore({
  modules: {
    todo: todoModule,
  },
});

export default store;
