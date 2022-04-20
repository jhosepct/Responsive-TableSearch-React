import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'

function TCellChevron(props) {
    const chevron = (id) => {
        const select = document.getElementById(id);
        select.classList.toggle("active");
        const next=select.nextElementSibling;
        next.classList.toggle("active");
    }
    return (
        <td className="chevron" onClick={() => chevron(props.id)}>
            <span>
                <FontAwesomeIcon icon={faChevronRight} />
            </span>
        </td>
    )
}

export default TCellChevron