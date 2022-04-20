import React from 'react'
import "./css/Table.css"

function Table(props) {
  return (
    <div className='table-container'>
      <table>
        {props.children}
    </table>
    </div>
  )
}

export default Table