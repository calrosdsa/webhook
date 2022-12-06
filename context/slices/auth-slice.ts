import { createSlice,PayloadAction } from "@reduxjs/toolkit";
import { AuthModel } from "../../data/models/redux-models/auth-model";



const initialAuthState:AuthModel = {
    loading:false,
    isAuthenticated:false,

}

const authSlice = createSlice({
    name:'auth',
    initialState:initialAuthState,
    reducers:{
        setLoading(state,action:PayloadAction<boolean>){
            state.loading = action.payload
        },
        setAuthenticated(state,action:PayloadAction<boolean>){
            state.isAuthenticated = action.payload
        }
    }
})

export const authActions = authSlice.actions

export default authSlice