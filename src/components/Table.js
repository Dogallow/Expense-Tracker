import React, {useState} from 'react'
import Form from './Form'
import Expense from './Expense'

const Table = () =>{
const [data, setData] = useState([])

const getData = (info) =>{
    const newData = [...data, info]

    setData(newData)
    console.log(data)
}

    return(
        <div>
            <Form getData = {getData} />
           <Expense info = {data}/>
        </div>
    )
}

export default Table