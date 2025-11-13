import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import  Navbar  from "./components/layout/Navbar";
import { Landing } from "./components/layout/Landing";
import  Login  from "./components/auth/Login";
import  Alert from "./components/layout/Alert";
import Dashboard from "./components/dashboard/Dashboard";
import PrivateRoute from "./components/routing/PrivateRoute";
import  Register  from "./components/auth/Register";
import { useEffect } from "react";
import setAuthToken from "./utils/setAuthToken";

// Redux
import { Provider } from "react-redux";
import  store  from "./store";
import { loadUser } from "./actions/auth";

// setAuthToken() (outside React) runs immediately when the app starts
// Purpose: to globally configure Axios with the auth token before any React code executes
// Reason: if any Axios request runs before loadUser() is called, it will still include the token
if(localStorage.token){
    setAuthToken(localStorage.token);
}

const App = () => { 

  // Runs setAuthToken() inside loadUser when React renders <App />
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);// on Load
  
  return (

 <Provider store={store}>
    <BrowserRouter>
      <>
        <Navbar />
        <Routes>
          {/* Public landing page route */}
          <Route path="/" element={<Landing />} />

          {/* Container section for alerts + forms */}
          <Route
            path="/register"
            element={
              <section className="container">
                <Alert />
                <Register />
              </section>
            }
          />
          <Route
            path="/login"
            element={
              <section className="container">
                <Alert />
                <Login />
              </section>
            }
          />

          <Route
            path="/dashboard"
            element={
                <PrivateRoute
                    element={() => (
                      <section className="container">
                        <Alert />
                        <Dashboard />
                      </section>
                    )}
                />
              }
          />

        </Routes>
      </>
    </BrowserRouter>
  </Provider>
)};

export default App;
