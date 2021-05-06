import React from 'react'
import { Redirect} from 'react-router-dom';
import './style.scss'

export default function Profile({prof}) {
    let auth = JSON.parse(localStorage.getItem('auth'));
    return (
        (!auth) ? <Redirect to="/home" /> :
        <div className="profile">
            <div className="profile__details">
                <div className="name">
                    <div className="data">{prof.first_name}</div>
                     <div className="data">{prof.last_name}</div>
                </div>
                <div className="data">{prof.email}</div>
                <div className="data">{prof.year_of_admission}</div>
                <div className="data">{prof.year_of_passing}</div>
                <div className="data">{prof.student_id}</div>
            </div>
        </div>
    )
}
