import React from 'react'
import {useHistory} from 'react-router-dom';

function ProtectedRoute({Cmp}) {
    const history = useHistory();

    React.useEffect(()=>{

        let token=localStorage.getItem('token');
        console.log(token)
        if(!token){
            history.push('/')
        }
        


    },[])
    return (
        <div>
            <Cmp/>
            
        </div>
    )
}

export default ProtectedRoute
