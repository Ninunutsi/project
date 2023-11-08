import React, { useState } from "react";
import "../styles/api.css";
import Header from "../components/Header";
import useFetch from "../hooks/useFetch";
import Pagination from "../components/Pagination";

const Api = () => {
    const itemsPerPage = 8;
    const [currentPage, setCurrentPage] = useState(1);
    // custom hook for fetching data
    const { data, loading, error } = useFetch(
        "https://jsonplaceholder.typicode.com/posts",
        currentPage,
        itemsPerPage
    );

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    if (loading) {
        return <p className="loading">Loading...</p>;
    }

    if (error) {
        return <p className="loading">Error: {error.message}</p>;
    }

    return (
        <section className="api-content">
            <Header />
            <section className="fetched-items-container fadeIn">
                {data.map((element, index) => (
                    <main className="fetched-items" key={index}>
                        <div className="fetched-items-header">
                            <h4>ID: {element.userId}</h4>
                            <h4>{element.id}</h4>
                        </div>
                        <div className="fetched-items-body">
                            <p>{element.title}</p>
                        </div>
                        <div className="fetched-items-footer">
                            <p>{element.body}</p>
                        </div>
                    </main>
                ))}
            </section>
            <Pagination
                itemsPerPage={itemsPerPage}
                totalItems={100}
                currentPage={currentPage}
                paginate={paginate}
            />
        </section>
    );
};

export default Api;
