import { useState, useContext, Fragment, useRef } from "react"
import AppContext from "@/AppContext"
import { Dialog, Transition } from '@headlessui/react'

import { 
  UserCreateForm 
} from '@/ui-components';

const AddUser = () => {
    const {createUser} = useContext(AppContext)

    const cancelButtonRef = useRef(null)

    const [open, setOpen] = useState(false)
    
    const handleSubmit = (fields) => {
        createUser(fields)
        setOpen(false)
    }
      
    return (
        <>
        <button className="modal-button flex bg-white shadow p-2 rounded-lg text-xl text-slate-600 hover:bg-slate-400 dark:text-white" onClick={(() => setOpen(true))}>Add User</button>
          <Transition.Root show={open} as={Fragment}>
          <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>

            <div className="fixed inset-0 z-10 overflow-y-auto">
              <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                  enterTo="opacity-100 translate-y-0 sm:scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                  leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                >
                  <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                    <div>
                      <div className="mt-3 text-center sm:mt-5">
                        <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                          Add User
                        </Dialog.Title>
                        <div className="mt-2 text-left">
                        <UserCreateForm
                          onSubmit={fields => handleSubmit(fields)}
                          onCancel={() => setOpen(false)}
                        />
                        </div>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition.Root>
      </>
    )
}

export default AddUser