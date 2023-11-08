import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";

const ProtectedRoute = ({ element }) => {
    const { authenticated } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        // If the user is not authenticated, redirect them to the login page
        if (!authenticated) {
            navigate("/registration", { replace: true });
            console.log(authenticated + " App.js");
        }
    }, [authenticated, navigate]);

    // Return null or loading state while checking authentication
    return authenticated ? element : null;
};

export default ProtectedRoute;
