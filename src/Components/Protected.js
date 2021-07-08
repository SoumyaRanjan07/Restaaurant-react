 
import React from 'react';
import { Redirect, Route } from 'react-router-dom';
const Protected = ({ component: Cmp, ...rest }) => {
    return(
    <Route
        {...rest}
        render={(props)=>
        localStorage.getItem('login') ?
        (
        <Cmp {...props} />
        ):
        <Redirect to="/login"
        />
         
   }
   />
    ) 
}

///localhost swap 3000 to 3001 or 3001 to 3000 
export default Protected;