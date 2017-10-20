export const STORAGE_KEY = 'todos-vuejs'

export const state = {
    todos: JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '[]')
}

export const mutations = {
    addTodo (state,{text}){
        state.todos.push({
            test,
            done:false
        })
    },

    deleteTodo (state,{ todo }) {
        state.todos.splice(state.todos.indexOf(todo),1)
    },

    // 切换
    toggleTodo (state, { todo }) {
        todo.done = !todo.done
    },

    editTodo (state, { todo, value}) {
        todo.text = value
    },

    //切换全部
    toggleAll(state, { done }){
        state.todos.forEach((todo)=>{
            todo.done = done
        })
    },

    clearCompleted (state) {
        state.todos = state.todos.filter(todo => !todo.done)
    }
}

























