import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Navigate, useLocation, useNavigate, useParams } from "react-router-dom";

// If Authenticated Element will load, else Redirects to login
const PrivateRoute = ({
  element: Element,
  auth: { isAuthenticated, loading }
}) => {

    const location = useLocation();// gives current path, state
    const navigate = useNavigate();// allows manual navigation
    const params = useParams();// gives route parameters

    // Not authenticated → redirect to login
    if(!isAuthenticated || loading){
        return <Navigate to='/login' state={{from: location}} replace />
    }

    // Authenticated -> render the given component
    const props = { location, navigate, params};
    return <Element {...props}/>
};

PrivateRoute.propTypes = {
  auth: PropTypes.object.isRequired,
  element: PropTypes.elementType.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(PrivateRoute);
