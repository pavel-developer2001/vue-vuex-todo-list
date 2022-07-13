import instance from "../app/axios";

export default class TodoApi {
  static async getTodos() {
    return await instance.get("/todos");
  }
  static async getTodo(id) {
    return await instance.get("/todos/" + id);
  }
  static async createTodo(todo) {
    return await instance.post("/todos", todo);
  }
  static async updateTodo(todo) {
    return await instance.patch("/todos/" + todo.id, todo);
  }
  static async removeTodo(id) {
    return await instance.delete("/todos/" + id);
  }
}
