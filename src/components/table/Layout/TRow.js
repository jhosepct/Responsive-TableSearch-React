import { faCheck, faPencil, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react'

function TRow(props) {
        return (
        <>
            <tr id={props.id} className={props.detail ? "detail" : "row"}>
                {props.children}
            </tr>
        </>
    )
}

export default TRow