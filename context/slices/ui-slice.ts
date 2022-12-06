import { UiState } from "../../data/models/redux-models/ui-model";
import { createSlice,PayloadAction } from "@reduxjs/toolkit";


const initialUiState :UiState ={
    loading:false,
    errorMessage:"",
    buttonText:"Iniciar session con facebook"
}

const uiSlice = createSlice({
    name:'ui',
    initialState:initialUiState,
    reducers:{
        setLoadingDialog(state,action:PayloadAction<boolean>){
            state.loading = action.payload
        },
        setButtonText(state,action:PayloadAction<string>){
            state.buttonText = action.payload
        }
      
    }
})


export const uiActions = uiSlice.actions

export default uiSlice