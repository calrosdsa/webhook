import {useCookies } from 'react-cookie';
import { useAppDispatch, useAppSelector } from '../context/reduxHooks';
import axios, { AxiosResponse } from 'axios';
import { uiActions } from '../context/slices/ui-slice';
import { initAuth } from '../context/actions/authActions';
import { toast } from 'react-toastify';
import { FormEvent, useState } from 'react';

interface Props {
     login:string | (string | null)[] | null | undefined
     continu2:string | (string | null)[] | null | undefined
     isAuthenticated:boolean
     authLoading:boolean
     postUrl:string
     isAndroid:boolean
}
const LoginButton = ({login,continu2,isAuthenticated,authLoading,postUrl,isAndroid}:Props) =>{
  const ui = useAppSelector(state=>state.ui)
  const auth = useAppSelector(state=>state.auth)
  const [token1,setToken1] = useState('')
  const dispatch = useAppDispatch()
  const username = auth.username.replace(/ /g,"_").replaceAll(".","")
  const app_id = process.env.app_id as string
  const app_secret = process.env.app_secret as string
  const password = "201120"
  const [name,setName] = useState("marca")
  const [pass,setPass] = useState("201120")

  // const [token,setToken] = useState('')
    const [cookies, setCookie ] = useCookies<any>(['name']);


    const fetchMyAPI=async()=> {
      dispatch(uiActions.setLoading(true))
      try{
        console.log(`Usuario para validar ${auth.username}`)
        const response = await axios.get('https://teclu.com/ApiFb_validatelike.php?name='+auth.username)
        console.log('res for validatelike',response)
        const dioLike = response.data
        console.log(typeof dioLike)
        console.log(dioLike)
        if(dioLike == 403){
          console.log('fail al validar like ')
          getAccessNetwork()
        }
        if(dioLike){
          getAccessNetwork()
        }else{
          dispatch(uiActions.setLoading(false))
          toast.info(
            <div>
              <p className='text-sm'>Por favor, déle me gusta a nuestra
            <a href={isAndroid ? 'https://www.facebook.com/Yacimientos/': postUrl} 
            target="_blank" rel="noreferrer" 
            className='underline text-facebook cursor-pointer font-medium'> última publicación </a>
            en facebook
              </p>
            </div> 
          )}
        }catch(err){
          console.log('error al validar like')
          console.log(err)
        }
        }

    const getAccessNetwork = async()=>{
      const switch_url =login || cookies.switch_url
      // const continue_url =continu2 || cookies.continue_url
      console.log('Switch Url ',switch_url)
      console.log('si dio like')
      // let link =document.createElement('a');
      try{
        // const res =  await axios.get('/api/send',{username,password,switch_url});
        sendToSwitch(switch_url,username,password)
        // console.log(res)
        dispatch(uiActions.setLoading(false))
        // link.href = 'https://google.com';
        // link.click();
        // if(res.status == 200){
          // console.log(res)
          // console.log("EXITOSO")
      }catch(err){
        dispatch(uiActions.setLoading(false))
        console.log('fail to request access network')
        console.log(err)
      //   console.log("Error")
      //   link.href = 'https://google.com';
      //   link.click();
      //   dispatch(uiActions.setLoading(false))
        }
    }

   
    const sendToSwitch = (url:string,username:string,password:string)=>{
      try{
        // const formData =new FormData()
        // formData.append('username',username)
        // formData.append('password',password)

        const res = axios.post(`${url}/`,{username,password})
        console.log(res)
      }catch(err){
        console.log('fallo al conseguir acceso a la red')
        console.log(err)
      }
    }
    
    const onLoginClick = async() => {
      setCookie('switch_url',login,{
        path:'/',
        maxAge:60*60,
      })
      setCookie('continue_url',continu2,{
        path:'/',
        maxAge:60*60,
      })
      if(typeof window != 'undefined'){
      const url = window.location.origin + '/'
      let link = document.createElement('a')
      link.href =`https://www.facebook.com/v15.0/dialog/oauth?client_id=${app_id}&redirect_uri=${url}&state={st=state123abc,ds=123456789}`
      link.click()
      }
      }

     async function sendRequest () {
      
      const send = await axios.post("http://portal.teclumobility.com:8181/login.html",{
        body:new URLSearchParams("username=Carlos&password=12ab34cd")
      })
      console.log(send)
        // console.log("sending request")
        //     let form = document.createElement("form");
        //     let element1 = document.createElement("input"); 
        //     let element2 = document.createElement("input");  
        //     let element3 = document.createElement("input");  
    
    
        //     form.method = "POST";
        //     form.action = "http://192.0.2.1/login.html";   
    
        //     element1.value="marca";
        //     element1.name="username";
        //     form.appendChild(element1);  
    
        //     element2.value="201120";
        //     element2.name="password";
        //     form.appendChild(element2);
    
            
        //     element3.value="4";
        //     element3.type = "hidden";
        //     element3.name="buttonClicked";
        //     form.appendChild(element3);
    
        //     document.body.appendChild(form);
    
        //     form.submit();
        // console.log(username)
        
        // window.location.replace(window.location.origin + '/about/') {% endcomment %}
        }
    
      return(
      <>
      {isAuthenticated == false ?
        <div onClick={()=>sendRequest()}
        className='flex  px-2 sm:px-3 mx-1 rounded-2xl h-10 items-center p-2 bg-facebook cursor-pointer'>
             <span 
             className=' font-semibold text-sm sm:text-base text-white'>Continuar Navegando </span>
        </div>
        :
        <div 
        onClick={onLoginClick}
        className='flex h-10 pr-2 sm:px-2 mx-1 rounded-2xl bg-facebook  items-center cursor-pointer relative'>
          {authLoading  ?
              <svg aria-hidden="true" 
          className=" w-6 h-6 text-gray-200 animate-spin fill-facebook mx-2 z-10"
          viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
          <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
          </svg>
        :
        <svg
        xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="40px" height="48px"><path fill="#039be5"
        d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"/><path fill="#fff" 
        d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"/></svg>
      }      
             <span 
             className='text-white font-semibold  text-sm sm:text-base'
             >{ui.buttonText}
             </span>
        </div>
          }
      </>
    )
}

export default LoginButton;