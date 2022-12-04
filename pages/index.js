import {useCookies } from 'react-cookie'
import { useEffect } from "react";

export default function Home() {
  // const [session, loading] = useSession()
  // const [providers, setProviders] = useState({});
  // const [isLoggedin, setIsLoggedin] = useState(false);
  const [cookies, setCookie, removeCookie] = useCookies(['name']);
 
  const onLoginClick = () => {
    if (typeof window !== 'undefined') {
      window.FB.login(function(response) {
        console.log(response)
        if (response.authResponse) {
         console.log('Welcome!  Fetching your information.... ');
         FB.api(
          '/me',
          'GET',
          {"fields":"email,name"},
          function(response) {
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
    }, {scope: 'email,user_likes'});
};
}

const CheckStatus = () =>{
  if(window != "undefined"){
    FB.getLoginStatus(function(response) {
      console.log(response)
      // statusChangeCallback(response);
  });
  }
}

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.fbAsyncInit = () => {
          window.FB.init({
              appId            : '694102408690400',
              autoLogAppEvents : true,
              xfbml            : true,
              version          : 'v11.0'
          });
      };
    }
      (function (d, s, id) {
          var js, fjs = d.getElementsByTagName(s)[0];
          if (d.getElementById(id)) { return; }
          js = d.createElement(s); js.id = id;
          js.src = "https://connect.facebook.net/en_US/sdk.js";
          fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));
      // onLoginClick()
  }, []);

  return (
      <div>
        <button onClick={onLoginClick}>Login with Facebook</button>
        <button onClick={CheckStatus}>Comprobar inicio de session</button>
        </div>
  );
};


