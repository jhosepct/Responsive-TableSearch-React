import { faPencil, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'

function TCellActions(props) {
    const handleClick = (action, id) => {
        if (action === "edit") {
            console.log("Edit", id);
        }
        else {
            console.log("Delete", id);
        }
    }
    return (
        <td className='actions'>
            <div>
                <button className='edit' onClick={() => handleClick("edit", props.id)}>
                    <FontAwesomeIcon icon={faPencil} />
                </button>
                <button className='delete' onClick={() => handleClick("delete", props.id)}>
                    <FontAwesomeIcon icon={faTrashCan} />
                </button>
            </div>
        </td>
    )
}

export default TCellActions