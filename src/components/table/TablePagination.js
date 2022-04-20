import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import "./css/Table.css"

function TablePagination(props) {
    const { rowsPerPageOptions, count } = props

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    useEffect(() =>{
        props.statePage(page);
        props.stateRowsPerPage(rowsPerPage);
    })
    useEffect(() => {

        const prev = document.getElementById("prev");
        const next = document.getElementById("next");
        if (page > 0) {
            prev.style.opacity = "1";
        } else {
            prev.style.opacity = "0.3";
        }
        if ((page + rowsPerPage) < count) {
            next.style.opacity = "1";
        } else {
            next.style.opacity = "0.3";
        }

    })
    const handleInputChange = (e) => {
        setPage(0)
        setRowsPerPage(Number(e.target.value));
    }

    const nextPage = (e) => {
        if ((page + rowsPerPage) < count) {
            setPage(page + rowsPerPage);
        }
    }
    const prevPage = (e) => {

        if (page > 0) {
            setPage(page - rowsPerPage);
        }
    }

    return (
        <div className="pagination">

            <p>Rows per page:</p>
            <div className="select">
                <select name="" id="" onChange={handleInputChange}>
                    <option value={rowsPerPageOptions[0]}>{rowsPerPageOptions[0]}</option>
                    <option value={rowsPerPageOptions[1]}>{rowsPerPageOptions[1]}</option>
                    <option value={rowsPerPageOptions[2]}>{rowsPerPageOptions[2]}</option>
                    <option value={rowsPerPageOptions[3]}>All</option>
                </select>
            </div>
            <p>
                {
                    ((page + rowsPerPage) > count) ? `${page + 1}-${count} de ${count}` : `${page + 1}-${page + rowsPerPage} of ${count}`
                }
            </p>
            <div className="actions">
                <button id='prev' onClick={prevPage}>
                    <FontAwesomeIcon icon={faAngleLeft} />
                </button>
                <button id='next' onClick={nextPage}>
                    <FontAwesomeIcon icon={faAngleRight} />
                </button>
            </div>

        </div >
    )
}

export default TablePagination