import React from 'react'

function TCell(props) {
    return (
        <>
            <td data-label={props.id ? `${props.id}` : null} className={`table-cell ${props.id}`} colSpan={(props.colspan ? `${props.colspan}` : 1)} style={{textAlign:`${props.align}`}} >
                {props.children}
            </td>
        </>
    )
}

export default TCell