import { useContext, useState, useEffect } from "react"
import AppContext from "@/AppContext"
import { ClipboardDocumentIcon } from "@heroicons/react/20/solid"
import { DataStore } from "aws-amplify"
import { Book } from "@/models"

function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}

export default function AccountStuff() {
  const {deleteReservation, currentInfo} = useContext(AppContext)
  const [reservationList, setReservationList] = useState([])

  // initial
  useEffect(() => {
    let iBook
    setReservationList([])
    console.log(currentInfo)
    if (currentInfo.currentBooks) {
      currentInfo.currentBooks.forEach(async function (book) {
        iBook = await DataStore.query(Book, book)
        console.log(iBook)
        if (!reservationList.includes(iBook)){
          setReservationList(reservationList => [...reservationList, iBook].filter((x, i, a) => a.indexOf(x) === i))
        }
      });
    }
  }, [])

  function getList(){
    const result = [];
    const map = new Map();
    for (const item of reservationList) {
        if(!map.has(item.id)){
            map.set(item.id, true);    // set any value to Map
            result.push(item);
        }
    }
    return result;
  }

  // detects reservation change
  useEffect(() => {
    if (currentInfo.currentBooks.length != reservationList.length){
    let iBook
    setReservationList([])
    if (currentInfo.currentBooks) {
      currentInfo.currentBooks.forEach(async function (book) {
        iBook = await DataStore.query(Book, book)
        if (!reservationList.includes(iBook)){
          setReservationList(reservationList => [...reservationList, iBook].filter((x, i, a) => a.indexOf(x) === i))
        }
      });
    }}
  }, [currentInfo])


  return (
    <>
      <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {console.log(reservationList)}
        {reservationList.length > 0 ? getList().map((book) => (
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
            </div>
            <div>
              <div className="-mt-px flex divide-x divide-gray-200">
                  <button
                      onClick={(e) => deleteReservation(e, book)}
                      className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center rounded-bl-lg border border-transparent py-4 text-sm font-medium text-gray-700 hover:bg-gray-500"
                    >
                      <ClipboardDocumentIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                      <span className="ml-3">Un-Reserve Book</span>
                    </button>
              </div>
            </div>
          </li>
        )):
        <div className="absolute snap-center text-2xl">No Reservations</div>
        }
      </ul>
    </>
  )
}