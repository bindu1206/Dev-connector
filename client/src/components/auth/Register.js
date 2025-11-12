import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { connect } from 'react-redux';// To Work with Redux
import { setAlert } from "../../actions/alert";// funciton with dispatch
import PropTypes from 'prop-types'

const Register = ({setAlert}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });//e.target.name = value name hitting onchange

  const onSubmit = async(e) => {
    e.preventDefault();
    if(password !== password2){
      setAlert('Passwords do not match', 'danger');// from props
    }else{
      console.log('SUCCESS');
    }
  }

  return (
    <div>
      <h1 className="large text-primary">Sign Up</h1>
      <p className="lead">
        <i className="fas fa-user"></i> Create Your Account
      </p>
      <form className="form" onSubmit={e => onSubmit(e)}>
        <div className="form-group">
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={name}
            onChange={(e) => onChange(e)}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            value={email}
            onChange={(e) => onChange(e)}
            required
          />
          <small className="form-text">
            This site uses Gravatar so if you want a profile image, use a
            Gravatar email
          </small>
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            name="password"
            minLength="6"
            value={password}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Confirm Password"
            name="password2"
            minLength="6"
            value={password2}
            onChange={(e) => onChange(e)}
          />
        </div>
        <input type="submit" className="btn btn-primary" value="Register" />
      </form>
      <p className="my-1">
        Already have an account? <Link to="/login">Sign In</Link>
      </p>
    </div>
  );
};

Register.propTypes = {// Ensures the setAlert prop exists and is a function.
  setAlert: PropTypes.func.isRequired
}

export default connect(null, { setAlert })(Register);// Here Connect to connect actions to comoponent
// null -> doesn't need state/data
// setAlert -> automatically injects setAlert function as a prop.