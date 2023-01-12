import parse from 'html-react-parser';
import ReactDOMClient  from 'react-dom/client';
import React, { useEffect, useState } from 'react';
import ClickButton from '../components/ClickButton'
import axios from 'axios';
import JsxParser from 'react-jsx-parser';
const About = ()=>{
    const [htmlc ,setHtml] = useState()
    const getHtml = async()=>{
        await axios.get('http://localhost').then((res)=>{
            console.log(res)
            setHtml(res.data)
        })
    }
    const PrintInConsole = () =>{
        console.log("printing")
    }
    const onchange=(e)=>{
        console.log(e.target.value)
    }
    var htmlFromApi =`
    <>
    <div onclick={console.log('daskd')} className="bg-gray-500 h-screen cursor-pointer">
    <button className=" bg-amber-600">Save</button>
    <button >Delete</button>
    </div>
    </>
    `
    
    

    useEffect(()=>{
        getHtml()
    },[])
    
    
    return(
        <>
        {htmlc != undefined &&
        <div>
             <JsxParser 
    bindings={{
        click:()=>PrintInConsole
    }}
    components={{ClickButton}}
    jsx={htmlFromApi}/>
        </div>
        }
        </>
    )
}
export default About;