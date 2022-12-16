import { createSlice,PayloadAction } from "@reduxjs/toolkit";
import { AuthModel } from "../../data/models/redux-models/auth-model";



const initialAuthState:AuthModel = {
    authLoading:false,
    isAuthenticated:false,
    username:'',
    postUrl:'https://www.facebook.com/667567951730217/posts/625859722567707',
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
        },
        setUsername(state,action:PayloadAction<string>){
            state.username = action.payload
        },
        setPostUrl(state,action:PayloadAction<string>){
            state.postUrl = action.payload
        }
    }
})

export const authActions = authSlice.actions

export default authSlice