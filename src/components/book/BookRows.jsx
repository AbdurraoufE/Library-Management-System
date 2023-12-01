import { useState, useEffect, useContext } from "react"
import AppContext from "@/AppContext"
import AddBook from "./AddBook"
import { TextField } from "@aws-amplify/ui-react"
import EditBook from "./EditBook"
import AdminBookRows from "./AdminBookRows"
import UserBookRows from "./UserBookRows"
import GetAge from "../GetAge"


export default function BookRows() {
    const {bookList, currentInfo} = useContext(AppContext)
    
    const [searchString, setSearchString] = useState('')

    const [filteredList, setFilteredList] = useState(bookList)
    

    useEffect(() => {
      console.log(bookList)
      let newList;
      if (searchString) {
        newList = bookList.filter((o) => o.title.toLowerCase().includes(searchString.toLowerCase()) || o.author.toLowerCase().includes(searchString.toLowerCase()))
      } else {
        newList = bookList
      }
      if(!currentInfo.admin && GetAge({birthdate: currentInfo.birthdate}) < 18) {
        setFilteredList(newList.filter(i => !i.over18))
      } else {
        setFilteredList(newList)
      }
    }, [searchString, bookList])
    
    return(
      <>
      <TextField
            placeholder="Search book by title or author"
            variant="outlined"
            value={searchString}
            onChange={(e) => setSearchString(e.target.value)}
          />
          <div className="mt-8">
      {currentInfo.admin ? <AdminBookRows bookList={filteredList}/>: <UserBookRows bookList={filteredList}/>}
      </div>
    </>)

  
  }