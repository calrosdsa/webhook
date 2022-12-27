import { Disclosure } from '@headlessui/react'

const Info = () =>{

    return(
 <div className="w-full px-4 pt-16">
      <div className="flex flex-col mx-auto w-full max-w-3xl shadow-xl rounded-2xl bg-white p-2">
      <a href='https://www.freeprivacypolicy.com/live/83964b85-328e-46c5-a236-33e4fd63a5a6' target='_blank' rel='noreferrer'
       className='text-xl p-2 border-b-[1px]'>Politicas de privacidad</a>
      <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between items-center rounded-lg p-2">
            <span className='text-xl '>Ayuda y asistencia</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                 stroke="currentColor"  className={`${open ? 'rotate-180 transform' : ''} h-5 w-5 mx-1 text-purple-500`}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>

              </Disclosure.Button>
              <Disclosure.Panel>
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between items-center rounded-lg bg-indigo-100 p-1 sm:p-2">
                <span className='text-sm'>No puedo iniciar session con mi cuenta de facebook?</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                 stroke="currentColor"  className={`${open ? 'rotate-180 transform' : ''} h-5 w-5 mx-1 text-purple-500`}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>

              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                If you're unhappy with your purchase for any reason, email us
                within 90 days and we'll refund you in full, no questions asked.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg items-center bg-indigo-100 p-1 sm:p-2">
                <span className='text-sm '>No logro conseguir acceso a la red luego de seguir todos los pasos?</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                 stroke="currentColor"  className={` ${open ? 'rotate-180 transform' : ''} h-5 w-5 mx-1 text-purple-500`}>
                     <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                No.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
                     </Disclosure.Panel>
                   </>
                 )}
               </Disclosure>
      </div>
    </div>
    )
}

export default Info