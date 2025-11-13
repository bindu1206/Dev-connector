import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';

const Dashboard = ({  }) => {
  return (
    <div>Dashboard</div>
  )
}

Dashboard.propTypes = {}

const manageStateToProps = state => ({
    auth: state.auth
})

export default connect(manageStateToProps, {  } )(Dashboard)