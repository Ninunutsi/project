import React, { useState } from "react";
import "../styles/header.css";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Modal from "./Modal";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const user = JSON.parse(localStorage.getItem("user"));
    const navigate = useNavigate();
    const location = useLocation();
    const { logout } = useAuth();

    const openModal = () => {
        setIsOpen(true);
    };

    // closes modal
    const closeModal = (e) => {
        if (e.target.id == "close" || e.target.id == "overlay") {
            setIsOpen(false);
        }
    };

    // is imported from useauth and clears local storage for logout
    const logOut = () => {
        localStorage.clear();
        logout();
        navigate("/registration");
    };

    return (
        <header className="header">
            <section className="left-header">
                <h2>FORM</h2>
                {/* changes route and name dependinf on the route */}
                <NavLink
                    className="api"
                    to={`${
                        location.pathname.includes("/api")
                            ? "/registration/form"
                            : "/api"
                    }`}
                >
                    <h2>
                        {location.pathname.includes("/api") ? "FORM" : "API"}
                    </h2>
                </NavLink>
            </section>
            <section className="profile-info">
                <h2>{user.name}</h2>
                <div onClick={openModal}>
                    <img src={user.image} alt="pic" />
                </div>
            </section>
            {/* MODAL */}
            <Modal
                user={user}
                isOpen={isOpen}
                closeModal={closeModal}
                logOut={logOut}
            />
        </header>
    );
};

export default Header;
