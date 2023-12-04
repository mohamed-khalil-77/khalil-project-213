import {configureStore} from '@reduxjs/toolkit'
import useReducer  from './user/userSlice'

export const store = configureStore({
    reducer: {use:useReducer},
    middleware:(geDefaultMiddeleware)=>geDefaultMiddeleware({
        serializableCheck: false,

    })
})