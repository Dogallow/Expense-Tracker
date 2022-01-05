// get the data map through the array of objects and put it into a table.
import React, {useMemo} from 'react'
import {useTable} from 'react-table'
import COLUMNS from './columns'
import './table.css'



// const data = [
//     {
//         text:1,
//         note:2,
//         date:3
//     }
// ]

const Expense = ({info}) =>{

    
    console.log(info)
    const data = [...info]

// const columns = useMemo(()=>COLUMNS, [])
// const mockData = useMemo(()=>data,[])

const tableInstance = useTable({
    columns: COLUMNS,
    data
})

const {getTableProps, 
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow
    } = tableInstance

    
     
    return (
            <div>
                <table {...getTableProps()}>
                    <thead>
                            {headerGroups.map(headerGroup=>(
                        <tr {...headerGroup.getHeaderGroupProps()}>
                                {
                                    headerGroup.headers.map(column => (

                                        <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                                    ))
                                }
                        </tr>
                            ))}
                    </thead>
                    <tbody {...getTableBodyProps()}>
                        {
                            rows.map((row)=>{
                                prepareRow(row)
                                return (

                                <tr {...row.getRowProps()}>
                                    {
                                        row.cells.map(cell =>{
                                            return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                        })
                                    }
                                    <button onClick = {(e)=> e.target.parentElement.remove()}>Delete</button>
                                </tr>
                                )
                            }

                            )
                        }
                    </tbody>
                </table>
                </div>
        )
    
}

export default Expense