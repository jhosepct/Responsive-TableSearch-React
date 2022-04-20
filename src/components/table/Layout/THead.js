import { faArrowDown,faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'

function THead(props) {
    const orderBy = (e, type) => {
        props.sort(e, type);
        removeActiveClassFromSubMenu();
        const select = document.getElementById(e);
        select.classList.toggle('order');

    }
    const removeActiveClassFromSubMenu = () => {
        const ths = document.querySelectorAll("th").forEach((el) => {
            el.classList.remove("order");
        });
    };
    const selectAll = () => {
        const select = document.getElementById("check-all");
        select.classList.toggle("active");
    }
    return (
        <thead>
            <tr>
                {props.chevron ?
                    <th >
                    </th>
                    :
                    <th id={"check-all"} className={`check-all check ${props.check === false || !props.check ? "check-none" : ""}`} onClick={selectAll} >
                        <span>
                            <FontAwesomeIcon icon={faCheck} />
                        </span>
                    </th>
                }
                {
                    props.th.map((th, index) => (

                        th.order === "true" ?
                            <th
                                style={{
                                    textAlign: `${th.align}`,
                                    maxWidth: `${th.maxWidth}px`,
                                    cursor: "pointer"
                                }}
                                id={th.id}
                                className="sorting"
                                key={index}
                                onClick={() => orderBy(th.id, th.typeData)}
                            >
                                <>
                                    {th.label + "\u00a0"}
                                    <FontAwesomeIcon icon={faArrowDown} />
                                </>
                            </th>
                            :
                            <th
                                style={{
                                    textAlign: `${th.align}`,
                                    maxWidth: `${th.maxWidth}px`,
                                }}
                                id={th.id}
                                key={index}>
                                {th.label}
                            </th>


                    ))
                }
                <th style={{
                    width: "30px",
                }}
                >
                    Actions
                </th>
            </tr>
        </thead>
    )
}

export default THead