import {configureStore} from '@reduxjs/toolkit'
import toDoReducer from '../features/toDO/toDOSlice'

export const store=configureStore({
    reducer: toDoReducer
}) 
