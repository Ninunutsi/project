import React from "react";
import png from "../assets/pngegg 1.png";
import "../styles/landingPage.css";
import { NavLink } from "react-router-dom";

// Fisrt landing page

const LandingPage = () => {
    return (
        <main className="landing-page-container fadeIn">
            <img src={png} alt="image-pass-through" />
            <h1>Get Started Today</h1>

            {/* goes  to registration page*/}

            <NavLink to="registration" activeclassname="active-link">
                <button>Get Started</button>
            </NavLink>
        </main>
    );
};

export default LandingPage;
