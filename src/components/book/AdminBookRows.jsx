import { useState, useEffect, useContext } from "react"
import AppContext from "@/AppContext"
import EditBook from './EditBook'
import { MagnifyingGlassIcon, TrashIcon, ClipboardDocumentIcon } from "@heroicons/react/20/solid"

export default function AdminBookRows({bookList}) {
  const {deleteBook, updateBook} = useContext(AppContext)
    
  const [editBook, setEditBook] = useState('')
  const [open, setOpen] = useState(false)

  // detects when book is set to edit mode
  useEffect(() => {
    console.log(open)
    if (editBook){
      setOpen(true)
    }
  }, [editBook])

  // opens edit modal
  const handleEditBook = (book) => {
    setEditBook(book)
    setOpen(true)
  }

  return (
    <>
    <EditBook open={open} setOpen={setOpen} book={editBook} updateBook={updateBook}/>
    <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {bookList.map((book) => (
        <li
          key={book.title}
          className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow"
        >
          <div className="flex flex-1 flex-col p-4 break-words">
            <div className="-mt-px flex divide-x divide-gray-200 border p-2 rounded-lg">
                <dt className=" sr-only inset-0">Age Rating</dt>
                  <div className="flex w-0 flex-1">
                  {book.over18 ? 
                    <span className="rounded-full border-2 border-black bg-red-100 px-2 py-1 text-xs font-medium text-red-800">
                      18+
                    </span>:
                    <span className="rounded-full border-2 border-black bg-yellow-100 px-2 py-1 text-xs font-medium text-yellow-800">
                      E
                    </span>
                  }
                  </div>
                  <div className=" flex w-0 flex-1">
                  <span className="px-2 py-1 text-xs font-medium w-full text-right">
                      # Available: {book.numberAvailable}
                    </span>
                    </div>
                </div>
            <dl className="h-auto flex flex-grow flex-col">
              <div className="mt-2 border rounded-lg">
                <h3 className=" text-lg font-bold text-gray-900">{book.title}</h3>
                <dt className="sr-only">Author</dt>
                <dd className="text-sm text-gray-500">{book.author}</dd>
              </div>
              <div className="mt-2 border rounded-lg p-2">
                <dt className="">Description</dt>
                <div className="text-left text-sm text-gray-500">{book.description}</div>
              </div>
            </dl>

            <d1 className="h-auto mt-3 flex flex-grow flex-col text-gray-900 border p-2 rounded-lg">
              <dd className="">Reservations:</dd>
              {book.currentUsers && book.currentUsers.length > 0 ? ( <>
                {book.currentUsers.map((reserve) => <dd key={reserve} className="text-left">Reservation ID:{reserve}</dd>)}
                </>):<dd className="">No current reservations</dd>}
            </d1>
          </div>
          <div>
            <div className="-mt-px flex divide-x divide-gray-200">
                <div className="flex w-0 flex-1">
                  <button
                    onClick={() => handleEditBook(book)}
                    className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center rounded-bl-lg border border-transparent py-4 text-sm font-medium text-gray-700 hover:bg-gray-500"
                  >
                    <ClipboardDocumentIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                    <span className="ml-3">Edit</span>
                  </button>
                </div>
                <div className="-ml-px flex w-0 flex-1">
                  <button
                    onClick={()=>deleteBook(book)}
                    className="relative inline-flex w-0 flex-1 items-center justify-center rounded-br-lg border border-transparent py-4 text-sm font-medium text-gray-700 hover:bg-gray-500"
                  >
                    <TrashIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                    <span className="ml-3">Delete</span>
                  </button>
                </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
    </>
  )
}