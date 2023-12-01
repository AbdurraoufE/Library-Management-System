import { CheckCircleIcon } from '@heroicons/react/20/solid'
import { useState } from 'react'
import AdminModal from './AdminModal';

export default function AdminAlert({setShowAlert}) {
  const [open, setOpen] = useState(false)

  return (
    <>
    <AdminModal open={open} setOpen={setOpen} setShowAlert={setShowAlert}/>
    <div className="rounded-md bg-green-50 p-4">
      <div className="flex">
        <div className="flex-shrink-0">
          <CheckCircleIcon className="h-5 w-5 text-green-400" aria-hidden="true" />
        </div>
        <div className="ml-3">
          <h3 className="text-sm font-medium text-green-800">Are you an admin?</h3>
          <div className="mt-2 text-sm text-green-700">
            <p>You can also register later in your profile settings</p>
          </div>
          <div className="mt-4">
            <div className="-mx-2 -my-1.5 flex">
              <button
                type="button"
                onClick={() => setOpen(true)}
                className="rounded-md bg-green-50 px-2 py-1.5 text-sm font-medium text-green-800 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 focus:ring-offset-green-50"
              >
                Register as Admin
              </button>
              <button
                onClick={() => setShowAlert(false)}
                type="button"
                className="ml-3 rounded-md bg-green-50 px-2 py-1.5 text-sm font-medium text-green-800 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 focus:ring-offset-green-50"
              >
                Dismiss
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}