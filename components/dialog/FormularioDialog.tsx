import React,{ createElement, Fragment,SetStateAction,useEffect,useState } from 'react'
import { Dialog,Transition } from '@headlessui/react'
import InputComponent from '../InputComponent'

interface Props {
    closeDialog:()=>void
    open:boolean
}

const FormularioDialog = ({closeDialog,open}:Props) => {   
  const [email,setEmail] = useState("")


  const onChange = (e:React.ChangeEvent<HTMLInputElement>) =>{
     setEmail(e.target.value)
  }  
      useEffect(()=>{
        console.log("render")
      },[])
    return(
      <>
      
      <Transition appear show={open} as={Fragment}>
        <Dialog as="div" className="relative z-20" onClose={()=>{
            closeDialog()
            }}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto " >
            <div className="flex min-h-full items-center justify-center p-4 text-center ">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white 
                 text-left align-middle shadow-xl transition-all">
                  
                  <div className='flex flex-col px-2 py-4 space-y-3'>
                    <span className=' font-semibold border-b-[1px] border-gray-400'>
                    Formulario de solicitud de acceso
                    </span>
                  <InputComponent
                    tipo='text'
                    name='name'
                    titulo='Nombre'
                    onChange={onChange}
                    value={email}
                    />
                   
                    <InputComponent
                    tipo='email'
                    name='email'
                    titulo='Email'
                    onChange={onChange}
                    value={email}
                    />

            <span className='text-xs italic mb-2'
            >*Por favor, indique algún motivo por el cual está solicitando acceso en el campo correspondiente. 
                Esta información nos ayudará a evaluar su solicitud .</span>
        <div className="relative">
        <textarea
             rows={4} 
              className="border-[1px] rounded-lg  p-2   w-full
              border-gray-500 
              text-gray-900 placeholder-transparent focus:outline-none focus:border-facebook "
              placeholder="john@doe.com" />
            
            </div>



        <div className='flex  px-2 sm:px-3 mt-1  rounded-xl h-10 items-center p-2 cursor-pointer justify-center
         bg-facebook w-1/2 mx-auto'>
             <span 
             className=' font-semibold text-sm sm:text-base text-white'>Enviar solicitud</span>
        </div>
        {/* <span className='flex  px-2 sm:px-3 mt-1  rounded-xl h-10 items-center p-2 cursor-pointer 
        text-sm underline text-indigo-500 justify-center'>Solicitar acceso</span> */}
            </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
      </>
    )
}

export default FormularioDialog;