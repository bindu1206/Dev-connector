import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';// lets this component read data directly from Redux store { parent to children props X }

const Alert = ({ alerts }) => alerts !== null && alerts.length > 0 && alerts.map(alert => (// alerts from redux store
    <div key={alert.id} className={`alert alert-${alert.alertType}`}>
        { alert.msg }
    </div>
))

Alert.propTypes = { // Ensures alerts is always an array
    alerts: PropTypes.array.isRequired
}

const mapStateToProps = state => ({// Pulls alert slice from Redux store and maps it to props.alerts { reducers/alert.js }
    alerts: state.alert // state.alert key name given in combineReducers, { reducers/index.js }
})

export default connect(mapStateToProps)(Alert);// connects component to Redux store
// alerts inside this component always reflects real-time Redux data 
// Here connecting state -> to get data