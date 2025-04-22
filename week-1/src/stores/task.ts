import { defineStore } from 'pinia'

let nextId = 1

export const useTaskStore = defineStore('todo', {
  state: () => ({
    todos: [] as { id: number; text: string }[],
  }),
  actions: {
    onAddTask(text: string) {
      this.todos.push({ id: nextId++, text })
    },
    onRemoveTask(id: number) {
      this.todos = this.todos.filter((todo) => todo.id !== id)
    },
  },
})
