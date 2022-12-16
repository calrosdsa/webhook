import axios, { AxiosResponse } from "axios"

import { AnyAction } from "redux";
// import 'react-toastify/dist/ReactToastify.css';
import { ThunkAction } from "redux-thunk";
// import authService from "../../data/service/authService"
import authSlice from "../slices/auth-slice";
import { RootState } from "../store";
// import { uiActions } from "../slices/ui-slice";
// import { NextRouter } from "next/router";
import { useCookies } from "react-cookie";

export const authActions = authSlice.actions
export const initAuth = (accessToken:string) :ThunkAction<void,RootState,undefined,AnyAction> =>{
    return async(dispatch,getState)=>{
        const [cookies ,setCookie] = useCookies<any>(['name'])
        try{
            dispatch(authActions.setAuthLoading(true))
            const userRes =await axios.get(`https://graph.facebook.com/v15.0/me?fields=id%2Cname&access_token=${accessToken}`)
            // const username = userRes.data.name
            // const validateLike = await axios.get(`https://teclu.com/validatelike.php?name=${username}`)
            setCookie('name',userRes.data.name,{
                path:'/',
                maxAge:60*60
              })
              console.log('cookie',cookies.name)
            dispatch(authActions.setAuthLoading(false))
            dispatch(authActions.setAuthenticated(true))
            // setToken(response.authResponse.accessToken)
            // console.log(response)
            // console.log('Login response',response)
        }catch(err:any){
            dispatch(authActions.setAuthLoading(false))
            console.log('fail auth')
            console.log('ERROR',err.response.data.success)
        }
    }
}

export const validateLike = async()=>{
    const validateLike = await axios.get(`https://teclu.com/validatelike.php?name=${username}`)
    const hasLike:boolean = validateLike.data
}

export const getDataUser = async(accessToken:string):Promise<AxiosResponse<any, any>>=>{
    const userRes =await axios.get(`https://graph.facebook.com/v15.0/me?fields=id%2Cname&access_token=${accessToken}`)
    // const username = userRes.data.name
    // const validateLike = await axios.get(`https://teclu.com/validatelike.php?name=${username}`)
    // const hasLike:boolean = validateLike.data
    return userRes
}
  