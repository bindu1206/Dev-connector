import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import  Navbar  from "./components/layout/Navbar";
import  Landing  from "./components/layout/Landing";
import  Login  from "./components/auth/Login";
import  Alert from "./components/layout/Alert";
import Dashboard from "./components/dashboard/Dashboard";
import PrivateRoute from "./components/routing/PrivateRoute";
import  Register  from "./components/auth/Register";
import CreateProfile from "./components/profile-form/CreateProfile";
import EditProfile from "./components/profile-form/EditProfile";
import { useEffect } from "react";
import setAuthToken from "./utils/setAuthToken";

// Redux
import { Provider } from "react-redux";
import  store  from "./store";
import { loadUser } from "./actions/auth";
import AddExperience from "./components/profile-form/AddExperience";
import AddEducation from "./components/profile-form/AddEducation";
import Profiles from "./components/profiles/Profiles";
import Profile from "./components/profile/Profile";
import Posts from "./components/posts/Posts";

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
            path="/profiles"
            element={
              <section className="container">
                <Alert />
                <Profiles />
              </section>
            }
          />

          <Route
            path="/profile/:id"
            element={
              <section className="container">
                <Alert />
                <Profile />
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

          <Route
            path="/create-profile"
            element={
                <PrivateRoute
                    element={() => (
                      <section className="container">
                        <Alert />
                        <CreateProfile />
                      </section>
                    )}
                />
              }
          />

          <Route
            path="/edit-profile"
            element={
                <PrivateRoute
                    element={() => (
                      <section className="container">
                        <Alert />
                        <EditProfile />
                      </section>
                    )}
                />
              }
          />

          <Route
            path="/add-experience"
            element={
                <PrivateRoute
                    element={() => (
                      <section className="container">
                        <Alert />
                        <AddExperience />
                      </section>
                    )}
                />
              }
          />

          <Route
            path="/add-education"
            element={
                <PrivateRoute
                    element={() => (
                      <section className="container">
                        <Alert />
                        <AddEducation />
                      </section>
                    )}
                />
              }
          />

          <Route
            path="/posts"
            element={
                <PrivateRoute
                    element={() => (
                      <section className="container">
                        <Alert />
                        <Posts />
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
