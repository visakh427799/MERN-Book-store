import React from 'react'
import Login from './components/Login/Login'
import Register from './components/Registration/Register';
import Books from './components/Books/Books'
import Addbooks from './components/Addbooks/Addbooks';
import Profile from './components/Profile/Profile';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import {BrowserRouter as Router,Switch,Link,Route} from 'react-router-dom'
import './App.css'
function App() {
    return (
        <div>
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Login/>
                    </Route>
                    <Route  path="/register">
                        <Register/>
                    </Route>
                    <Route  path="/books">
                    <ProtectedRoute Cmp={Books}/>
                    </Route>
                    <Route  path="/addbooks">
                    <ProtectedRoute Cmp={Addbooks}/>
                    </Route>
                    <Route  path="/profile">
                        <ProtectedRoute Cmp={Profile}/>
                    </Route>
                </Switch>


            </Router>
       
        </div>
    )
}

export default App
