import React, {useState} from 'react'
//React hook state 
const Search =({setAlert, searchUserq, clearButtonStatus, cleanResults}) => { //Destructuring
        
    const [keyword, setKeyword]= useState('');

    const onChange=(e)=>{
        setKeyword(e.target.value);
    }
    const onSubmit=(e)=>{
        e.preventDefault();

        if(keyword==""){
            setAlert("Please write a name", "danger");
        }else{
            searchUserq(keyword);
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
            {clearButtonStatus && <button className="btn btn-secondary btn-sm col-md-12 mt-2" onClick={cleanResults}>Clean results</button>}
            
        </div>
        
    )
    
}

export default Search
