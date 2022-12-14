import { createSlice,PayloadAction } from "@reduxjs/toolkit";
import { AuthModel } from "../../data/models/redux-models/auth-model";



const initialAuthState:AuthModel = {
    authLoading:false,
    isAuthenticated:false,

}

const authSlice = createSlice({
    name:'auth',
    initialState:initialAuthState,
    reducers:{
        setAuthLoading(state,action:PayloadAction<boolean>){
            state.authLoading = action.payload
        },
        setAuthenticated(state,action:PayloadAction<boolean>){
            state.isAuthenticated = action.payload
        }
    }
})

export const authActions = authSlice.actions

export default authSlice