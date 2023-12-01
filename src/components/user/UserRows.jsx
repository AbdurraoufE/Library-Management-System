import { useState, useEffect, useContext } from "react"
import AppContext from "@/AppContext"
import AddUser from "./AddUser"
import { MagnifyingGlassIcon, TrashIcon, ClipboardDocumentIcon } from "@heroicons/react/20/solid"
import { TextField } from "@aws-amplify/ui-react"
import EditUser from "./EditUser"
import GetAge from "@/components/GetAge"
import DeleteAlert from "./DeleteAlert"


export default function UserRows() {
    const {userList, deleteUser, updateUser, currentUser} = useContext(AppContext)
    
    const [editUser, setEditUser] = useState('')
    const [searchString, setSearchString] = useState('')
    const [open, setOpen] = useState(false)
    const [filteredList, setFilteredList] = useState(userList)
    const [showDeleteAlert, setShowDeleteAlert] = useState(false)



    // opens edit modal
    const handleEditUser = (user) => {
      setEditUser(user)
      setOpen(true)
    }

    // checks if user is trying to delete themselves
    const handleDelete = (user) => {
      if (user.username == currentUser.username) {
        setShowDeleteAlert(true)
        return;
      }
      deleteUser(user)
    }


    useEffect(() => {
      if (searchString) {
        setFilteredList(userList.filter((o) => o.name.toLowerCase().includes(searchString.toLowerCase()) || o.email.toLowerCase().includes(searchString.toLowerCase())))
      } else {
        setFilteredList(userList)
      }
    }, [searchString, userList])



    console.log(userList)
    
    return(
      <>
      {showDeleteAlert ? <DeleteAlert handleClick={setShowDeleteAlert}/> : null}

      <EditUser open={open} setOpen={setOpen} user={editUser} updateUser={updateUser}/>

      <TextField
            
            placeholder="Search user by name or email"
            variant="outlined"
            value={searchString}
            onChange={(e) => setSearchString(e.target.value)}
          />
          <div className="p-4"></div>
      <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 ">
      {filteredList.map((user) =>
        <li key={user.email} className=" col-span-1 divide-y divide-gray-300 border rounded-lg bg-white shadow">
            {console.log(filteredList)}
            <div className="flex w-full items-center justify-between space-x-6 p-6">
              <div className="flex-1 truncate">
                <div className="flex items-center space-x-3">
                  <h3 className="truncate text-sm font-medium text-gray-900">{user.name}</h3>
                  {user.admin ?
                    <span className="inline-block flex-shrink-0 rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-800">
                     Admin 
                    </span>
                  : <span className="inline-block flex-shrink-0 rounded-full bg-red-100 px-2 py-0.5 text-xs font-medium text-red-800">
                    User 
                    </span>}
                </div>
                <p className="mt-1 truncate text-sm text-gray-500">{user.email}</p>
                {user.fines && user.fines.map((fine) => <p key={fine} className="mt-1 truncate text-sm text-gray-500">{fine}</p>)}
              </div>
              <div className=" self-start">Age: {<GetAge birthdate={user.birthdate}/>}</div>
            </div>
            <div>
              <div className="-mt-px flex divide-x divide-gray-200">
                <div className="flex w-0 flex-1">
                  <button
                    onClick={() => handleEditUser(user)}
                    className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center rounded-bl-lg border border-transparent py-4 text-sm font-medium text-gray-700 hover:bg-gray-500"
                  >
                    <ClipboardDocumentIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                    <span className="ml-3">Edit</span>
                  </button>
                </div>
                <div className="-ml-px flex w-0 flex-1">
                  <button
                    onClick={()=>handleDelete(user)}
                    className="relative inline-flex w-0 flex-1 items-center justify-center rounded-br-lg border border-transparent py-4 text-sm font-medium text-gray-700 hover:bg-gray-500"
                  >
                    <TrashIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                    <span className="ml-3">Delete</span>
                  </button>
                </div>
              </div>
            </div>
          </li>
        )}
      </ul>
    </>)

  
  }