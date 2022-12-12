import {useCookies } from 'react-cookie'
import { useAppDispatch, useAppSelector } from '../context/reduxHooks';
import { useRouter } from 'next/router';
import { authActions } from '../context/slices/auth-slice';
import axios from 'axios'
import queryString from 'query-string'
import { useState } from 'react';
const LoginButton = () =>{
  const ui = useAppSelector(state=>state.ui)
  const dispatch = useAppDispatch()
  const router = useRouter()
  const [url,setUrl ] = useState('')
  const username = 'marca'
  const password = "201120"
    const [cookies, setCookie ] = useCookies<any>(['name']);

    const fetchMyAPI=async()=> {
      const urlFacebook = await axios.get('https://e20f-200-87-209-44.sa.ngrok.io/facebook/')

      const nameUser = cookies.name
      const queries = queryString.parse(window.location.search)
      setCookie('login_url',queries.login_url,{
        path:'/',
        maxAge:60*60,
      })
      setCookie('continue_url',queries.continue_url,{
        path:'/',
        maxAge:60*60,
      })
      const login_url =queries.login_url || cookies.login_url
      const continue_url =queries.continue_url || cookies.continue_url
    console.log(login_url)
      // const response = await axios.get(`https://teclu.com/validatelike.php?id=${id}`)
      const response = await axios.get(urlFacebook.data)
      console.log(response.data)
      const validation =  response.data.feed.data[0].likes.data.map((item:any)=>item.name).includes(nameUser)
      if(validation){
        console.log('si dio like')
          const sendRequest = await axios.post(login_url,{username,password,continue_url})
          console.log(sendRequest)
      }else{
        console.log('No diste like')
      }
        if(response.data.feed.data[0])
      console.log(response)
    }
   
    const buttonAction = async()=>{
      if(ui.buttonText == "Ir a al ultimo post"){
        //  getLikes()
        fetchMyAPI()
        const link = document.createElement('a');
        link.href = "https://www.facebook.com/134170669438105/posts/133206869534485";
        // link.target ="_blank";
        // link.click();
      }else{
        onLoginClick()
      }
    }
 


    const onLoginClick = () => {
      if (typeof window !== 'undefined') {
        window.FB.login(function(response:any) {
          console.log(response)
          if (response.authResponse) {
           console.log('Welcome!  Fetching your information.... ');
           window.FB.api(
            '/me',
            'GET',
            {},
            function(response:any) {
              console.log('RESPONSE',response)
              dispatch(authActions.setAuthenticated(true))
              // async function fetchMyAPI() {
              //   const res = await axios.get(`https://teclu.com/userexists.php?id=${response.id}`)
              //   console.log(res)
              // }
              // fetchMyAPI()
              // res;
                // Insert your code here
                setCookie('email',response.email,{
                    path:'/',
                    maxAge:60*5,
              })
              setCookie('name',response.name,{
                path:'/',
                maxAge:60*5
          })
                // console.log(response)
        setCookie('id',response.id,{ path:'/',maxAge:60*5})
            }
          );
          //  FB.api('/me', function(response) {
          //    console.log('Good to see you, ' + response.name + '.');
          //  });
          } else {
           console.log('User cancelled login or did not fully authorize.');
          }
      }, {scope: 'email'});
      window.FB.getLoginStatus(function(response:any) {
        console.log(response)
    });
  };
  }
    return(
        <div 
        className='flex  px-3 rounded-2xl bg-facebook  items-center'>
            <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="48px" height="48px"><path fill="#039be5"
             d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"/><path fill="#fff" 
             d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"/></svg>
             <span 
             onClick={buttonAction}
              className='text-white font-semibold truncate'
      >{ui.buttonText}</span>
      <input type="text" value={url} onChange={(e)=>setUrl(e.target.value)}
          className="w-full "/>
        </div>
    )
}

export default LoginButton;