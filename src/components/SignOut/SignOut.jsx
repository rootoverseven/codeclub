import React from 'react'
import { Redirect} from 'react-router-dom';

export default function SignOut({AuthUpdate}) {
    let auth = JSON.parse(localStorage.getItem('auth'));
    function Logout(){
        localStorage.clear();
        AuthUpdate();        
    }
    return (
        (!auth) ? <Redirect to="/home" /> :
        <div className="sign">
            <h1>Do you really want to log out?</h1>
            <button onClick={Logout}>Yes</button>
            <button>Go back</button>
        </div>
    )
}
