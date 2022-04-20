import React from 'react'

function Items(props) {

    return (
        <>
            <tr>
                
                <td className={`check id ${!props.check ? "check-none" : ""}`} >
                    <span>
                        <input type="checkbox" />
                    </span>
                </td>
                <td className='user'>
                    <div className='box'>
                        <div className='avatar'>
                            <img src="" alt="" />
                        </div>
                        <p>name</p>
                    </div>
                </td>
                <td className='table-cell email' id='email'> email </td>
                <td className='table-cell Facultad' id='Facultad' > facultad </td>
                <td className='table-cell semestre' id='semestre' > semestre </td>
            </tr>
        </>
    )
}

export default Items