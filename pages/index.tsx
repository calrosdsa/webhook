import {useCookies } from 'react-cookie'
import { useEffect, useState } from "react";
import Image from 'next/image';
import LandingPage from '../components/LandingPage';
import { useAppDispatch, useAppSelector } from '../context/reduxHooks';
import { uiActions } from '../context/slices/ui-slice';
import { authActions } from '../context/slices/auth-slice';
import axios from 'axios';
import queryString from "query-string";


export default function Home() {
  const [cookies, setCookie,removeCookie ] = useCookies<any>(['name']);
  const dispatch = useAppDispatch()
  const ui = useAppSelector(state => state.ui.loading)
  const isAuthenticated = useAppSelector(state => state.auth.isAuthenticated)
  const email = cookies.name
  const id = cookies.id
  const username = 'marca'
  const password = "201120"

  const changeState = () => {
    dispatch(authActions.setAuthenticated(true))
  }

  useEffect(()=>{
    if(isAuthenticated){
      dispatch(uiActions.setButtonText("Ir a al ultimo post"))
        // console.log("exist")
      }
  },[isAuthenticated])
  const fetchMyAPI=async()=> {
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
    const response = await axios.get("https://graph.facebook.com/v15.0/111114835172863?fields=feed.limit(1)%7Blikes%7D&access_token=EAALZALdJy4pQBACqEPw6hyiocvmj9HXvUg4uKIQZCuGIzZCmmZBguUhhcrp0cZBfZCNfWgDtIllf1N6YZBBHYrrwhJ3JyhFKHcL70lAJTBtwbJZCH4J5SpTgOe39g1oZCMoQccdDA9hN5FOQEMnhLhRDR9PZCfA8yujKvOxfhz5fliZBOIC4mgHDxhDX262UgZC1h3dIs97LuRBEZAwZDZD")
    console.log(response.data)
    const validation =  response.data.feed.data[0].likes.data.map((item:any)=>item.name).includes(nameUser)
    if(validation){
        const sendRequest = await axios.post(login_url,{username,password,continue_url})
        console.log(sendRequest)
    }else{
      console.log('No diste like')
    }
      if(response.data.feed.data[0])
    console.log(response)
  }
 
  

  useEffect(() => {
    // console.log(id)
    //https://teclu.com/validatelike.php?id=113209743565830
   
    if (typeof window !== 'undefined') {
      // console.log(queryString.parse(window.location.search))
      // const parsed = queryString.parse(window.location.search)
      // console.log(parsed)
      window.fbAsyncInit = () => {
          window.FB.init({
              appId            : '801740780921492',
              autoLogAppEvents : true,
              xfbml            : true,
              version          : 'v15.0'
            });
      };
    }
      (function (d, s, id) {
          var js:any, fjs:any = d.getElementsByTagName(s)[0];
          if (d.getElementById(id)) { return; }
          js = d.createElement(s); js.id = id;
          js.src = "https://connect.facebook.net/en_US/sdk.js";
          fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
      }, []);

  return (
      <div className='relative h-screen w-full noselect'>
        {/* <button  className='absolute bg-white p-10 z-10'
        onClick={changeState}>CHANGE ESTATE</button> */}
        <img 
        className='w-full h-screen blur-sm absolute'
        src='/images/background.jpg'
        />   
        <LandingPage/>
        </div>
  );
};


//https://76.76.21.241/?cmd=login&mac=ac:12:03:9c:ae:05&essid=radius&ip=172.31.98.4&apname=40%3Ae3%3Ad6%3Acc%3A62%3Aa8&apmac=40%3Ae3%3Ad6%3Acc%3A62%3Aa8&vcname=SetMeUp-CC%3A62%3AA8&switchip=securelogin.arubanetworks.com&url=http%3A%2F%2Fwww.msftconnecttest.com%2Fredirect

//https://community.arubanetworks.com/community-home/digestviewer/viewthread?MID=16648#bmbd935f86-6b5b-4ee5-9a0d-33b606b01d67

//https://login.webhook-murex.vercel.app/swarm.cgi