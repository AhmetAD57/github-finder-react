import React, { useEffect, useContext } from 'react'
import Loading from './Loading'
import Context from '../context/github/Context';
import User from './User';

const UserDetails =({match})=> { //Destructuring
    
    const {getUser, laoding, user} = useContext(Context);

    //Function component de didmount didupdate metotlarının kullanılmasının sağlıyor(Hook)  
    useEffect(()=> {
        getUser(match.params.login);
    }, []) //[] olunca sadece did mount için çalışır, spesific değer verildiğnde sadece o değişince çalışır
    

    const {name, avatar_url, location, html_url, bio,blog, followers, following, public_repos} = user; //Destructuring

    if(laoding) return <Loading />

    return (
        <div className="container mt-3">
            <div className="row">
                <div className="col-md-3">
                    <div className="card">
                    <img src={avatar_url} className="card-img-top"/>
                    <div className="card-body">
                        <p className="card-text">{ name }</p>
                        <p><i className="fas fa-map-marker-alt"></i> {location}</p>
                        <p>
                            <a className="btn btn-block btn-primary btn-sm" href={html_url}>Github Profile</a>
                        </p>
                    </div>
                    </div>
                </div>
                <div className="col-md-9">
                    <div className="card">
                        <div className="card-body">
                            {
                                bio && 
                                    <>
                                        <h3>About</h3>
                                        <p>{bio}</p>
                                    </>
                            }
                            {
                                blog && 
                                    <>
                                        <h3>Blog</h3>
                                        <p>{blog}</p>
                                    </>
                            }
                            <div>
                                <span className="badge bg-primary m-1">Followers: {followers}</span>
                                <span className="badge bg-secondary m-1">Following: {following}</span>
                                <span className="badge bg-success m-1">Repos: {public_repos}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserDetails
