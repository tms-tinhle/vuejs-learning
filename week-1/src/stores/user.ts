import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => ({
    name: "John Doe",
    age: 25,
  }),
  getters: {
    isAdult: (state) => state.age >= 18,
  },
  actions: {
    onUpdateName(newName: string) {
      this.name = newName;
    }
  }
});
