import React from 'react'
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom'

import Navbar from './Navbar'
import Home from './Home'
import Alert from './Alert'
import UserDetails from './UserDetails'
import NotFound from './NotFound'

import State from "../context/github/State"
import AState from "../context/alert/AState"

const App=()=> {
    return (
        <State> {/*State.js de tanımlanan Context.provider value larına diğer componentlerin ulaşması için gerekiyor.*/}
            <AState>
                <BrowserRouter>
                    <Navbar />
                    <Alert/>
                    <Switch>
                            {/* <Route exact path="/" render={props=> (
                                    <>
                                        <Search/>
                                        <Users/>
                                    </>
                                )}/>  */
                            }
                            <Route exact path="/" component={Home}/>
                            
                            <Route path="/user/:login" component={UserDetails}/>
                            <Route component={NotFound}/>
                    </Switch>
                </BrowserRouter>
            </AState>
        </State>
    )
}

export default App;