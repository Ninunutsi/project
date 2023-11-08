import "./styles/general.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LayoutIndex from "./layout/LayoutIndex";
import LandingPage from "./pages/LandingPage";
import Registration from "./pages/Registration";
import FormPage from "./pages/FormPage";
import ErrorPage from "./pages/ErrorPage";
import { AuthProvider } from "./context/AuthContext";
import Api from "./pages/Api";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
    return (
        <div className="App">
            <Router>
                <AuthProvider>
                    <Routes>
                        <Route path="/" element={<LayoutIndex />}>
                            <Route index element={<LandingPage />} />
                            <Route
                                path="registration"
                                element={<Registration />}
                            />
                            <Route
                                path="registration/form"
                                element={
                                    <ProtectedRoute element={<FormPage />} />
                                }
                            />
                            <Route
                                path="/api"
                                element={<ProtectedRoute element={<Api />} />}
                            />
                            <Route path="*" element={<ErrorPage />} />
                        </Route>
                    </Routes>
                </AuthProvider>
            </Router>
        </div>
    );
}

export default App;
