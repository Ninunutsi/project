import React, { useEffect, useState } from "react";
import "../styles/form.css";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { useAuth } from "../context/AuthContext";
import Table from "../components/Table";

const FormPage = () => {
    const { authenticated, logout, login } = useAuth();
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user"));
        // checks if user is authenticated, if not it navigates to registration
        const checkAuthentication = async () => {
            if (!authenticated || !user || !user.name.trim() || !user.image) {
                localStorage.removeItem("user");
                logout();
                navigate("/registration");
            } else {
                setIsLoading(false);
                login();
            }
        };

        checkAuthentication();
    }, [authenticated, navigate, logout]);

    if (isLoading) {
        return <p>Loading</p>;
    }

    return (
        <main className="form-container">
            <Header />
            <Table />
        </main>
    );
};

export default FormPage;
