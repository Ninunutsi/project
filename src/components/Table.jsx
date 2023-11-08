import React, { useEffect, useState } from "react";
import data from "../data.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import filter from "../assets/Vector.png";
import search from "../assets/search.png";
import Pagination from "./Pagination";
import FilterPanel from "./FIlterPanel";

const Table = () => {
    const itemsPerPage = 7;
    const [openFilter, setOpenFilter] = useState(false);
    const [isSexOpen, setSexOpen] = useState(false);
    const [tableData, setTableData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [status, setStatus] = useState(false);

    const [filters, setFilters] = useState({
        isActive: true,
        isInactive: true,
        isMale: true,
        isFemale: true,
    });
    useEffect(() => {
        const fetchData = async () => {
            try {
                setTableData(data);
            } catch (error) {
                console.error(error.message);
            }
        };
        fetchData();
    }, []);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;

    const filteredData = tableData.filter((item) => {
        return (
            ((filters.isActive && item.status === "active") ||
                (filters.isInactive && item.status === "inactive")) &&
            ((filters.isMale && item.gender === "male") ||
                (filters.isFemale && item.gender === "female"))
        );
    });
    const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);
    const handleCheckboxChange = (filter) => {
        setFilters((prevFilters) => ({
            ...prevFilters,
            [filter]: !prevFilters[filter],
        }));
    };

    const toggleStatus = () => setStatus((status) => !status);
    const handleFilterOpen = () => setOpenFilter((openFilter) => !openFilter);
    const handleSexOpen = () => setSexOpen((isSexOpen) => !isSexOpen);
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <section className="form-content">
            <FilterPanel
                isOpen={openFilter}
                isSexOpen={isSexOpen}
                handleStatusOpen={toggleStatus}
                status={status}
                handleSexOpen={handleSexOpen}
                handleOpen={handleFilterOpen}
                filters={filters}
                handleCheckboxChange={handleCheckboxChange}
            />

            <section className="table-container">
                <section className="table-header">
                    <div className="filter" onClick={handleFilterOpen}>
                        <img src={filter} alt="filter icon" />
                        <h3>Filter</h3>
                    </div>

                    <div className="search">
                        <input type="text" />
                        <img src={search} alt="search icon" />
                    </div>
                </section>
                <section className="table-section">
                    <table>
                        <thead>
                            <tr className="table-row">
                                <th>სტუდენტის სახელი და გვარი</th>
                                <th>სტატუსი</th>
                                <th>სქესი</th>
                                <th className="arr-th">
                                    ქულები
                                    <div className="arrows-up-down">
                                        <FontAwesomeIcon icon={faAngleUp} />
                                        <FontAwesomeIcon icon={faAngleDown} />
                                    </div>
                                </th>
                                <th>პირადი ნომერი</th>
                                <th>იმეილი</th>
                                <th>მობილურის ნომერი</th>
                                <th>მისამართი</th>
                                <th>დაბადების თარიღი</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* todo */}
                            {currentItems.map(
                                (
                                    {
                                        name,
                                        status,
                                        gender,
                                        grades,
                                        personalNumber,
                                        email,
                                        phoneNumber,
                                        address,
                                        dateOfBirth,
                                    },
                                    index
                                ) => (
                                    <tr className="table-row" key={index}>
                                        <td>{name}</td>
                                        <td>{status}</td>
                                        <td>{gender}</td>
                                        <td>{grades}</td>
                                        <td>{personalNumber}</td>
                                        <td>{email}</td>
                                        <td>{phoneNumber}</td>
                                        <td>{address}</td>
                                        <td>{dateOfBirth}</td>
                                    </tr>
                                )
                            )}
                        </tbody>
                    </table>
                </section>
            </section>
            <Pagination
                itemsPerPage={itemsPerPage}
                totalItems={tableData.length}
                currentPage={currentPage}
                paginate={paginate}
            />
        </section>
    );
};

export default Table;
