import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";
import "../styles/registration.css";
import photo from "../assets/add_a_photo_FILL0_wght400_GRAD0_opsz48 1.png";
import useLocalStorage from "../hooks/useLocalStorage";
import { NavLink, useNavigate } from "react-router-dom";
import { faCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { useAuth } from "../context/AuthContext";

const Registration = () => {
    const [imagePreview, setImagePreview] = useState(photo);
    const [userData, setUserData] = useLocalStorage("user", {
        image: "",
        name: "",
    });
    const [formSubmit, setFormSubmit] = useState({ image: true, name: true });
    const { login } = useAuth();
    const navigate = useNavigate();

    // uploads image from computer and also updates setUserData, which adds updated
    // data to local storage
    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setUserData((prevValue) => ({
                    ...prevValue,
                    image: reader.result,
                }));
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleInputChange = (e) => {
        const { value } = e.target;
        setUserData((prevValue) => ({ ...prevValue, name: value }));
    };

    // default picture preview at first, then uploaded pictures preview
    useEffect(() => {
        if (userData.image) {
            setImagePreview(userData.image);
        }
    }, [userData.image]);

    // after submitt if requirements are met goes to next page which is form
    const handleSubmit = (e) => {
        e.preventDefault();

        // checks required fields
        const checkField = (field) => {
            setFormSubmit((prev) => ({ ...prev, [field]: !!userData[field] }));
        };

        ["image", "name"].forEach(checkField);

        // goes to next page if image and name is in local storage
        if (userData.name && userData.image) {
            localStorage.setItem("user", JSON.stringify(userData));
            // importd from context, is used for authentication
            // updates state in context
            login().then(() => {
                navigate("form");
            });
        }
    };
    return (
        <main className="registration-container">
            <NavLink to="/">
                <div className="go-back">
                    <FontAwesomeIcon icon={faCircleLeft} />
                </div>
            </NavLink>
            <div className="registration-form fadeIn">
                <h2>Get started</h2>
                <form onSubmit={handleSubmit}>
                    <label
                        htmlFor="image"
                        className={
                            formSubmit.image ? "label-text" : "label-text red"
                        }
                    >
                        add a photo
                    </label>

                    <label
                        htmlFor="image"
                        className={
                            formSubmit.image
                                ? "photo-label"
                                : "photo-label error"
                        }
                    >
                        <img
                            src={imagePreview}
                            alt="Preview"
                            className="image-preview"
                        />
                    </label>

                    <input
                        type="file"
                        id="image"
                        name="image"
                        accept="image/*"
                        onChange={handleImageChange}
                        required
                    />

                    <label
                        htmlFor="name"
                        className={
                            formSubmit.name ? "label-text" : "label-text red"
                        }
                    >
                        fill in you name
                    </label>

                    <input
                        type="text"
                        id="name"
                        className={formSubmit.name ? "hjiu" : "error"}
                        placeholder="your name"
                        onChange={handleInputChange}
                        value={userData.name}
                        required
                    />

                    <input
                        type="submit"
                        onClick={handleSubmit}
                        className="submit"
                        value={"Sign In"}
                    />
                </form>
            </div>
        </main>
    );
};

export default Registration;
