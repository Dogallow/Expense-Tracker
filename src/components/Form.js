import React, {useState} from 'react'
import './form.css'

const Form = (props) =>{
    const [expense, setExpense] = useState('')
    const [price, setPrice] = useState('')
    const [date, setDate] = useState('')

    const getArr = (e) =>{
        setExpense(e.target.value)
    }
    const getNote = (e) =>{
        setPrice(e.target.value)
    }
    const getDate = (e) =>{
        setDate(e.target.value)
    }
    
    const onSubmit = (e) =>{

        e.preventDefault()
        
        
        
        
        props.getData({
            id: Math.floor(Math.random()* 1000),
            expense,
            price,
            date
        })
    
        //Put another function here to return the table jsx
        
       
        setExpense('')
        setPrice('')
        setDate('')
      }
        
    return(
        <div>
             <form onSubmit = {onSubmit}>
        <>
                 <label>Expense</label>
                 <br/>
        <input required type = "text" value = {expense} onChange = {getArr}></input>
        <br/>
        <label>Price</label>
        <br/>
        <input required type = "text" value = {price} onChange = {getNote}></input>
        <br/>
        <label>Date</label>
        <br/>
        <input required type = "text" value = {date} onChange = {getDate}></input>
        
        <br/>
        </>
        <button type ="submit">Submit</button>
      </form>
        </div>
    )
}

export default Form