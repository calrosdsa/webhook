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
import { uiActions } from "../slices/ui-slice";

export const authActions = authSlice.actions
export const initAuth = (
    code:string | (string | null)[] | null,
    redirect_url:string) :ThunkAction<void,RootState,undefined,AnyAction> =>{
    return async(dispatch)=>{
        const app_id = process.env.app_id as string
        const app_secret = process.env.app_secret as string
        // const [cookies ,setCookie] = useCookies<any>(['name'])
        // console.log(cookies.name)
        try{
            console.log('code',code)
            console.log('redirect',redirect_url)
            console.log('id',app_id)
            console.log('secret',app_secret)
            const facebook_url = `https://graph.facebook.com/v15.0/oauth/access_token?client_id=${app_id}&redirect_uri=${redirect_url}&client_secret=${app_secret}&code=${code}`
            console.log(facebook_url)
            const getSesseion = await axios.get(facebook_url)
            console.log(getSesseion)
            const access_token = getSesseion.data.access_token
            console.log("INIT AUTH")
            dispatch(authActions.setAuthLoading(true))
            const userRes =await axios.get(`https://graph.facebook.com/v15.0/me?fields=id%2Cname&access_token=${access_token}`)
            console.log(userRes)
            const username = userRes.data.name
            dispatch(authActions.setUsername(username))
            dispatch(authActions.setAuthLoading(false))
            dispatch(authActions.setAuthenticated(true))
            const name = username.replace(/ /g,"_").replaceAll(".","")
            const existUser = await axios.get('https://teclu.com/ApiFb_userexists.php?name='+name)
            // const response = await axios.get('https://teclu.com/ApiFb_validatelike.php?name='+username)
            // dispatch(authActions.setUserLike(response.data))

            console.log('Userexist?',existUser.data)
        }catch(err:any){
            dispatch(authActions.setAuthLoading(false))
            console.log('fail auth')
            console.log('ERROR',err.response.data.success)
        }
    }
}

export const getLink = () :ThunkAction<void,RootState,undefined,AnyAction> =>{
    return async(dispatch)=>{
        try{
            const urlRes = await axios.get('https://teclu.com/ApiFb_LinkPost.php')
            const url = urlRes.data
            dispatch(authActions.setPostUrl(url))
            console.log(url)
        }catch(err:any){
            console.log('fail fetch url ')
            console.log('ERROR',err.response.data.success)
        }
    }
}

// export const validateLike = async()=>{
//     const validateLike = await axios.get(`https://teclu.com/validatelike.php?name=${username}`)
//     const hasLike:boolean = validateLike.data
// }

// export const getDataUser = async(accessToken:string):Promise<AxiosResponse<any, any>>=>{
//     const userRes =await axios.get(`https://graph.facebook.com/v15.0/me?fields=id%2Cname&access_token=${accessToken}`)
//     // const username = userRes.data.name
//     // const validateLike = await axios.get(`https://teclu.com/validatelike.php?name=${username}`)
//     // const hasLike:boolean = validateLike.data
//     return userRes
// }
  