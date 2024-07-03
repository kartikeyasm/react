import { createSlice, nanoid } from "@reduxjs/toolkit";
import { act } from "react";
// nanoid is used to create unique id

const initialState={
    toDos: [{id: 1, text: "Hello World"}]
}

export const toDoSlice=createSlice({
    name: 'toDO',
    initialState,
    reducers: {
        addToDo: (state, action)=>{    // State=> Updated state value from the store  ; Action=> Action.payload
            const toDo={
                id: nanoid(), 
                text: action.payload
            }
            state.toDos.push(toDo)
        },
        removeToDo: (state, action)=>{
            state.toDos = state.toDos.filter((toDo) => toDo.id !== action.payload);
        },
    }
})

export const {addToDo, removeToDo}=toDoSlice.actions

export default toDoSlice.reducer