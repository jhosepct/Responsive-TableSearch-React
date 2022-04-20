import React from 'react';
import { useEffect, useState } from 'react';

import ButtonAdd from './Button/ButtonAdd';
import Search from './search/Search';
import Detail from './table/Layout/Detail';
import TBody from './table/Layout/TBody';
import TCell from './table/Layout/TCell';
import TCellActions from './table/Layout/TCellActions';
import TCellCheck from './table/Layout/TCellCheck';
import TCellChevron from './table/Layout/TCellChevron';
import THead from './table/Layout/THead';
import TRow from './table/Layout/TRow';
import Table from './table/Table';
import TablePagination from './table/TablePagination';


import { columns, rows } from '../data/Data';

function TableComponent() {
    //table
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const statePage = (e) => {
        setPage(e);
    }
    const stateRowsPerPage = (e) => {
        setRowsPerPage(e);
    }

    //Search
    const [copyData, setCopyData] = useState([]);

    useEffect(() => {
        initAlumnos();
    }, [])
    const initAlumnos = () => {
        setCopyData([...rows]);
    }

    const onsearch = query => {
        if (query === '') {
            initAlumnos();
        } else {
            const temp = [...rows];
            let res = [];

            temp.forEach(item => {
                if (item.name.toLowerCase().indexOf(query) > -1 || item.code.toLowerCase().indexOf(query) > -1) {
                    res.push(item);
                }
            });
            setCopyData([...res]);
        }
        /*this.props.onsearch(e.target.value);*/
    }

    //sort
    const sort_by = (field, reverse, primer) => {

        const key = primer ?
            function (x) {
                return primer(x[field])
            } :
            function (x) {
                return x[field]
            };

        reverse = !reverse ? 1 : -1;

        return function (a, b) {
            return a = key(a), b = key(b), reverse * ((a > b) - (b > a));
        }
    }
    const [order, setOrder] = useState(false);
    const [dateOrd, setDateOrd] = useState();
    const sort = (e, type) => {
        (dateOrd === e ? setOrder(!order) : setOrder(false));
        if (type === "number") {
            setCopyData([...copyData.sort(sort_by(e, order, parseInt))]);
        }
        else {
            setCopyData([...copyData.sort(sort_by(e, order, (a) => a.toUpperCase()))])
        }

        setDateOrd(e);
        const ths = document.querySelectorAll("th").forEach((el) => {
            el.classList.remove("orderAsc");
            el.classList.remove("orderDesc");
        });

        const select = document.getElementById(e);
        (order === false ? select.classList.toggle("orderAsc") : select.classList.toggle("orderDesc"));

    }
    const ths = () => {
        const columns = document.querySelectorAll("th");
        return columns.length;
    }

    return (
        <div className='table-user table' >
            <Search onsearch={onsearch} placeholder="Search country" />
            <ButtonAdd />
            <Table>
                <THead th={columns} sort={sort} chevron />
                <TBody>
                    {
                        copyData
                            .slice(page, page + rowsPerPage)
                            .map((row, index) => (
                                <>
                                    <TRow key={row.code} id={row.code} index={index} check={true} >

                                        {(row.detail ?
                                            <TCellChevron id={row.code} />
                                            :
                                            <TCellCheck id={row.code} />
                                        )}
                                        {columns.map((column) => (
                                            <TCell key={column.id} align={column.align} id={column.id} >
                                                {row[column.id]}
                                            </TCell>
                                        ))}
                                        <TCellActions id={row.code} />

                                    </TRow>

                                    {(row.detail ?
                                        <TRow detail  >
                                            <TCell colspan={ths()}>
                                                <Detail code={row.code} name={row.name} detail={row.detail} />
                                            </TCell>
                                        </TRow>
                                        : null)}
                                </>
                            ))
                    }
                </TBody>
            </Table>
            <TablePagination
                rowsPerPageOptions={[5, 10, 15, copyData.length]}
                count={copyData.length}
                page={page}
                rowsPerPage={rowsPerPage}
                statePage={statePage}
                stateRowsPerPage={stateRowsPerPage}
            />
        </div>
    )
}

export default TableComponent