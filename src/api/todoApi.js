// Fake network delay
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const todoApi = {
    // Add a new todo (takes 1.5 seconds)
    async addTodo(text) {
        await delay(1500);

        const newTodo = {
            id: Date.now().toString(),
            text,
            completed: false,
            createdAt: new Date().toISOString()
        };
        return newTodo;
    },

    // Toggle todo completion (takes 0.8 seconds)
    async toggleTodo(id) {
        await delay(800);
        return id;
    },

    // Delete a todo (takes 1 second)
    async deleteTodo(id) {
        await delay(1000);
        return id;
    },

    // Update todo text (takes 1 second)
    async updateTodo(id, text) {
        await delay(1000);
        return { id, text };
    }
};