import { MutableRefObject } from "react";

interface Props {
    onChange:(e:React.ChangeEvent<HTMLInputElement>)=>void,
    tipo:string,
    name:string,
    value:string,
    titulo:string,
    patron?:string
    errorMessage?:string;
    onKeyPress?:(e:any)=>void;
    ref?:MutableRefObject<any>
}
const InputComponent = ({
    onChange,tipo,name,value,titulo,errorMessage,patron,ref,onKeyPress
}:Props)=>{

    

    return(
         <div className="relative">
              <input ref={ref}
              required
              onKeyDown={onKeyPress}
              id={name} name={name} type={tipo}
              pattern={patron}
              onChange={onChange} 
              value={value}
              className="border-[1px] rounded-lg peer  p-2  h-14 w-full
              border-gray-500 
              text-gray-900 placeholder-transparent focus:outline-none focus:border-facebook "
              placeholder="john@doe.com" />
              <label htmlFor={name} className="absolute left-2  text-gray-500 transition-all
               peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500  -top-1
               peer-placeholder-shown:top-4
                peer-focus:-top-0 peer-focus:text-gray-500 peer-focus:text-sm">{titulo}</label>
                 <span className="text-red-500 pl-2 absolute left-0 text-sm -bottom-6 line-clamp-1"
         >{errorMessage}</span>
            </div>
    )
}

export default InputComponent;