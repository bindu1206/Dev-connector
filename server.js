const express = require("express");
const connectDB = require('./config/db')

// Connect to database
connectDB()

const app = express();

// Init Middleware
app.use(express.json({extended: false}));

app.get("/", (req, res) => {
  res.send("API Running");
});

// Define Routes
app.use('/api/users' , require('./routes/api/users'))
app.use('/api/auth' , require('./routes/api/auth'))
app.use('/api/profile' , require('./routes/api/profile'))
app.use('/api/posts' , require('./routes/api/posts'))

const port = process.env.PORT;

app.listen(port, () => console.log(`Server running on port ${port}`));

// store = holds all data
// actions = requests name {set alert, remove alert}
// reducer = reads req and decides how to update data --> function(state, action) => newState

// 1st commit
//Store create in src -> createStore(all Reducers { create src/reducers/index.js uses combineReducers })
//in App.js Use Provider to make created store available globally

// 2nd commit
// types.js -> Defines action names (setAlert, removeAlert) define
// alert.js(actions) -> Creates and dispatches alert-related actions { a function which calls dispatch } 
// alert.js(reducers) -> Listens to actions and updates alert state { a funciton which handles dispatch with switch cases using types.js }

// 3rd commit
// Alert.js -> used connect to get state
// Register.js -> used conned to get setAlert function

// Flow
// User submits form
//    ↓
// Register.js calls setAlert('Passwords do not match', 'danger')
//    ↓
// setAlert() dispatches { type: 'SET_ALERT', payload: { msg, type, id } } actions/alert.js
//    ↓
// alertReducer adds alert to Redux store reducers/alert.js
//    ↓
// Alert.js component (connected to state.alert) re-renders 
//    ↓
// Shows <div class="alert alert-danger">Passwords do not match</div>


