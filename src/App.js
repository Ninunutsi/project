import { useEffect } from 'react';
import './styles/general.css';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import LayoutIndex from './layout/LayoutIndex';
import LandingPage from './pages/LandingPage';
import Registration from './pages/Registration';
import FormPage from './pages/FormPage';
import ErrorPage from './pages/ErrorPage';
import { AuthProvider, useAuth } from './context/AuthContext';
import Api from './pages/Api';


const ProtectedRoute = ({ element }) => {
  const { authenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    // If the user is not authenticated, redirect them to the login page
    if (!authenticated) {
      navigate('/registration');
      console.log(authenticated + " App.js")
    }
  }, [authenticated, navigate]);

  // Return null or loading state while checking authentication
  return authenticated ? element : null;
};


function App() {
  return (
    <div className="App">
      <Router>
      <AuthProvider>
        <Routes>
          <Route path='/' element={<LayoutIndex />}>
            <Route index element={<LandingPage />} />
            <Route path='registration' element={<Registration />} />
            <Route
              path='registration/form'
              element={<ProtectedRoute element={<FormPage />} />}
            />
            <Route path='/api' element={<ProtectedRoute element={<Api />}/>}/>
            <Route path='*' element={<ErrorPage />} />
          </Route>
        </Routes>
      </AuthProvider>
    </Router>
    </div>
  )
}

export default App;
