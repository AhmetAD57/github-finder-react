import React, { Component, Fragment } from 'react'
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom'
import Navbar from './Navbar'
import Search from './Search'
import Users from './Users'
import Alert from './Alert'
import UserDetails from './UserDetails'
import axios from 'axios'


export class App extends Component {
    constructor(props){
        super(props)

        this.searchUser = this.searchUser.bind(this);
        this.cleanResults = this.cleanResults.bind(this);
        this.setAlert = this.setAlert.bind(this);
        this.getUser = this.getUser.bind(this);

        this.state={
            loading :false,
            users:[],
            user: {},
            alert: null

        }
    }
    
    searchUser(keyword){
        this.setState({loading: true});
            
        axios.get(`https://api.github.com/search/users?q=${keyword}`).then(res=>
        this.setState({users:res.data.items, loading:false}));
    }
    
    getUser(username) {
        this.setState({loading: true});
        setTimeout(() => {
            axios
                .get(`https://api.github.com/users/${username}`)
                .then(res => this.setState({user: res.data, loading: false}));
        }, 1000);   
    }


    cleanResults(keyword){
        this.setState({users: []})
    }

    setAlert(msg, type){
        this.setState({
            alert:{msg, type}
        })

        setTimeout(() => {
            this.setState({
                alert:null
            })
        }, 3000);
    }
    
    
    render() {
        return (
            <BrowserRouter>
                <Navbar />
                <Alert alert= {this.state.alert}/>
                <Switch>
                        <Route exact path="/" render={ props=> (
                                <>
                                    <Search 
                                        searchUserq={this.searchUser} 
                                        cleanResults={this.cleanResults} 
                                        clearButtonStatus = {this.state.users.length > 0 ? true : false}
                                        setAlert={this.setAlert}
                                        />
                                    <Users users={this.state.users} loading={this.state.loading}/>
                                </>
                            )
                        } />
                        
                        <Route path="/user/:login" render= {props => (
                            <UserDetails {...props} getUser= {this.getUser} user={this.state.user} loading={this.state.loading}/>
                        )} />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default App