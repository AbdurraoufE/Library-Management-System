import { XCircleIcon, XMarkIcon } from '@heroicons/react/20/solid'

export default function ReservationAlert({handleClick, book}) {
  return (
    <div className="rounded-md bg-green-50 p-4 mb-4">
      <div className="flex">
        <div className="flex-shrink-0">
          <XCircleIcon className="h-5 w-5 text-green-400" aria-hidden="true" />
        </div>
        <div className="ml-3">
          <h3 className="text-sm font-bold text-green-800">Reservation successfully created for {book.title}</h3>
          <div className="mt-2 text-sm text-yellow-700">
            <p className="text-sm text-green-800">Please return the book by {new Date().toLocaleString() + ""}</p>
          </div>
        </div>
        <div className="ml-auto pl-3">
          <div className="-mx-1.5 -my-1.5">
            <button
              type="button"
              onClick={() => handleClick(false)}
              className="inline-flex rounded-md bg-green-50 p-1.5 text-green-500 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 focus:ring-offset-green-50"
            >
              <span className="sr-only">Dismiss</span>
              <XMarkIcon className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}