import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'

function TCellCheck(props) {

    const check = (id) => {
        const select = document.getElementById(id).firstChild;
        select.classList.toggle("active");
        console.log(id)
    }
    return (
        <td className={`check ${!props.check === true ? "check-none" : ""}`} onClick={() => check(props.id)}>
            <span>
                <FontAwesomeIcon icon={faCheck} />
            </span>
        </td>
    )
}

export default TCellCheck