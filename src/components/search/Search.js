import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import './Search.css'
function Search(props) {
    

    const onChangeEvent = e => {
        props.onsearch(e.target.value.toLowerCase());
    }
    return (
        <div className='wrap'>
            <div className="search">
                <button type="button" className="button search-button"><FontAwesomeIcon icon={faSearch} /></button>
                <input className="searchTerm" placeholder={props.placeholder} onChange={onChangeEvent}  />
            </div>
        </div>
    )
}

export default Search
