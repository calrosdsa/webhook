import {useCookies } from 'react-cookie'
import { useEffect } from "react";
import Image from 'next/image';
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
    }, {scope: 'email'});
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
  const Dialog = ()=>{
    if(window != 'undefined'){
      FB.ui(
        {
          method: 'share',
          href: 'https://developers.facebook.com/docs/',
        },
        // callback
        function(response) {
          if (response && !response.error_message) {
            alert('Posting completed.');
          } else {
            alert('Error while posting.');
          }
        }
      );
    }
  }

  return (
      <div className='relative h-screen w-full'>
        <img 
        className='w-full h-screen blur-sm absolute'
        src='/images/background.jpg'
        />
        <div className='mx-auto sm:w-3/4 md:w-2/4 h-64 fixed inset-x-0 top-1/2 -translate-y-1/2 z-20 bg-white'>
        <button className=' z-20 '
         onClick={Dialog}>Login with Facebook</button>
         <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid02bZaaF79ZBxmg9GKSp8JExCYnAzcV9ktgwBtZ81i3bGGTU2eJjZ3zgfugchZGtiSl%26id%3D100085355185099&show_text=true&width=500" width="500" height="312" 
         scrolling="no" frameborder="0"
          allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
         </div>
        <button onClick={CheckStatus}>Comprobar inicio de session</button>
        </div>
  );
};


