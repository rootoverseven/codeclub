import React from 'react'
import './style.scss'
import { Redirect, useHistory} from 'react-router-dom';

export default function SignOut({AuthUpdate}) {
    let auth = JSON.parse(localStorage.getItem('auth'));
    let history = useHistory();
    function Logout(){
        localStorage.clear();
        AuthUpdate();        
    }
    function goBack(){
        history.push(`/home`);
    }
    return (
        <div className="sign_out">
        {(!auth) ? <Redirect to="/home" /> :
        <div className="sign">
            <div className="title">Do You Wish To Continue</div>
            <div className="btn_container">
                <button className="btn btn-logout" onClick={Logout}>Logout</button>
            <button className="btn btn-goback" onClick={goBack}>I'd Like To Stay</button>
            </div>
            
        </div>}
        </div>
        
    )
}
