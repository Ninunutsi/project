import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faAngleLeft,
    faAnglesLeft,
    faAngleRight,
    faAnglesRight,
} from "@fortawesome/free-solid-svg-icons";

// pagination component
const Pagination = ({ itemsPerPage, totalItems, currentPage, paginate }) => {
    const [activePage, setActivePage] = useState(1);
    const pageNumbers = Array.from({
        length: Math.ceil(totalItems / itemsPerPage),
    });
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const handlePageClick = (pageNumber) => {
        if (pageNumber >= 1 && pageNumber <= totalPages) {
            paginate(pageNumber);
            setActivePage(pageNumber);
        }
    };

    // arrows are clickable
    // if the arrow is left one current page is decreased
    // if it is right one current page increases
    const handleArrowClick = (direction) => {
        let newPage = currentPage;

        if (direction === "left") {
            newPage = currentPage - 1;
        } else if (direction === "right") {
            newPage = currentPage + 1;
        }

        handlePageClick(newPage);
    };
    return (
        <div className="pagination">
            <FontAwesomeIcon
                icon={faAngleLeft}
                className="arrow"
                onClick={() => handleArrowClick("left")}
            />
            <FontAwesomeIcon
                icon={faAnglesLeft}
                className="arrow"
                onClick={() => handleArrowClick("left")}
            />
            {pageNumbers.map((_, index) => (
                <button
                    className={`paginate-button ${
                        activePage === index + 1 ? "active" : ""
                    }`}
                    key={index}
                    onClick={() => handlePageClick(index + 1)}
                >
                    {index + 1}
                </button>
            ))}
            <FontAwesomeIcon
                icon={faAngleRight}
                className="arrow"
                onClick={() => handleArrowClick("right")}
            />
            <FontAwesomeIcon
                icon={faAnglesRight}
                className="arrow"
                onClick={() => handleArrowClick("right")}
            />
        </div>
    );
};

export default Pagination;
