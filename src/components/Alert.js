import React, {useContext} from 'react'
import AContext from "../context/alert/AContext"


export const Alert = () => {
    const {alert} = useContext(AContext);
    
    return (
        <>
            {alert != null && 
                <div className="container my-2">
                    <div className={`alert alert-${alert.type} alert-dismissible fade show`}>{alert.msg}
                        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>
                </div>
            }
        </>
    )
}

export default Alert
