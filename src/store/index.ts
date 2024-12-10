import { configureStore, createSlice } from "@reduxjs/toolkit";
import { boolean } from "yup";

interface FormData{
    data:{},
    endpoint:string
}

const formSlice = createSlice({
    name:'formData',
    initialState:{formData:{} as FormData,requestResponse:{} as any,isFormCompleted:false},
    reducers:{
        setFormData(state,action){
            state.formData = action.payload
        },
        setRequestResponse(state,action){
            state.requestResponse = action.payload
        },
        setIsFormCompleted(state,action){
            state.isFormCompleted = action.payload
        }
    }
})

export const actions =  formSlice.actions

const store = configureStore({
    reducer: formSlice.reducer
})

export default store
