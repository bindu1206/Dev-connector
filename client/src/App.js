import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/layout/Navbar";
import { Landing } from "./components/layout/Landing";
import { Login } from "./components/auth/Login";
import  Alert from "./components/layout/Alert";
import  Register  from "./components/auth/Register";
// Redux
import { Provider } from "react-redux";// Connects React app with Redux store
import  store  from "./store";// Redux Store

const App = () => (

  // Wrapping = Every component inside can access Redux Store
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
        </Routes>
      </>
    </BrowserRouter>
  </Provider>
);

export default App;
