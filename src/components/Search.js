import React, {useState, useReducer, useContext} from 'react';
import Context from '../context/github/Context';
import AContext from "../context/alert/AContext";

const Search =() => { 
    //Destructuring
    const {searchUsers, cleanResults, users}= useContext(Context); //State.js deki reducer metotlarına her yerden kullanılmasını sağlıyor.
    const {setAlert}= useContext(AContext);

    //Function component de state kullanılmasının sağlıyor(Hook)  
    const [keyword, setKeyword]= useState('');
    
    const onChange=(e)=>{
        setKeyword(e.target.value);
    }
    const onSubmit=(e)=>{
        e.preventDefault();

        if(keyword==""){
            setAlert("Please write a name", "danger");
        }else{
            searchUsers(keyword);
            setKeyword("");
        }
    }
    
    return (
        <div className="container my-3">
            <form onSubmit={onSubmit}>
                <div className="input-group">
                    <input type="text" value={keyword} onChange={onChange} className="form-control" />
                    <div className="input-grout-append">
                        <button className="submit" className="btn btn-primary">Search</button>
                    </div>
                </div>
            </form>
            {users.length > 0 &&
                <button className="btn btn-secondary btn-sm col-md-12 mt-2" onClick={cleanResults}>Clean results</button>
            }
        </div>
    )
}

export default Search
