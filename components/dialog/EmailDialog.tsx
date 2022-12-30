import React,{ createElement, Fragment,SetStateAction,useEffect,useState } from 'react'
import { Dialog,Transition } from '@headlessui/react'
import InputComponent from '../InputComponent'
import FormularioDialog from './FormularioDialog'

interface Props {
    closeDialog:()=>void
    open:boolean
}

const EmailDialog = ({closeDialog,open}:Props) => {   
  const [email,setEmail] = useState("")
  const [openDialog,setOpenDialog] = useState(false)

  // const openFormulario = () =>{
  //   closeDialog
  // }

  const onChange = (e:React.ChangeEvent<HTMLInputElement>) =>{
     setEmail(e.target.value)
  }  
      useEffect(()=>{
        console.log("render")
      },[])
    return(
      <>
      {openDialog&&
      <FormularioDialog
      closeDialog={()=>setOpenDialog(false)}
      open={openDialog}
      />
      }
      
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
                  
                  <div className='flex flex-col px-2 py-4'>
                    <p className='text-[11px] italic sm:text-xs md:text-sm border-2 p-1 mb-2'
                    >Para solicitar acceso a la red a través de su correo electrónico, deberá completar y
                     enviar una solicitud. Esta solicitud será revisada y, si es aprobada, el administrador del sitio le
                    otorgará acceso."</p>

                    <InputComponent
                    tipo='email'
                    name='email'
                    titulo='email'
                    onChange={onChange}
                    value={email}
                    />

        <div className='flex  px-2 sm:px-3 mt-2   rounded-xl h-10 items-center p-2 cursor-pointer justify-center
         bg-facebook w-1/2 mx-auto'>
             <span 
             className=' font-semibold text-sm sm:text-base text-white'>Continuar</span>
        </div>
        <div className='flex  px-2 sm:px-3 mt-1  rounded-xl h-10 items-center p-2 justify-center'>
          <span className='cursor-pointer underline text-facebook text-sm'
          onClick={()=>setOpenDialog(true)}>Solicitar acceso</span>
        </div>
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

export default EmailDialog;