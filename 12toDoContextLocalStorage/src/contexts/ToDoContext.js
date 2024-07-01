import { createContext, useContext } from "react";

export const ToDoContext= createContext({
    todos: [
        {
            id:1,
            todo: " ToDo msg",
            completed: false
        }
    ],
    addToDo: (toDo)=>{},
    updateToDo: (id,toDo)=>{},
    deleteToDo: (id)=>{},
    toggleComplete: (id)=>{}
})



export const useToDo= ()=>{
    return useContext(ToDoContext)
}

export const ToDoProvider=ToDoContext.Provider