import { UiState } from "../../data/models/redux-models/ui-model";
import { createSlice,PayloadAction } from "@reduxjs/toolkit";


const initialUiState :UiState ={
    loading:false,
    errorMessage:"",
    buttonText:"Continuar con facebook",
    isMobile:false,
    initLoading:true
}

const uiSlice = createSlice({
    name:'ui',
    initialState:initialUiState,
    reducers:{
        setLoading(state,action:PayloadAction<boolean>){
            state.loading = action.payload
        },
        setButtonText(state,action:PayloadAction<string>){
            state.buttonText = action.payload
        },
        setDevice(state,action:PayloadAction<boolean>){
            state.isMobile = action.payload
        },
        setInitLoading(state,action:PayloadAction<boolean>){
            state.initLoading = action.payload
        }
      
    }
})


export const uiActions = uiSlice.actions

export default uiSlice