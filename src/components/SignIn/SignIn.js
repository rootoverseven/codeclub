import React, { useState } from 'react';
import './style.scss'
import { Redirect, useHistory, Link } from 'react-router-dom';

export default function SignIn({AuthUpdate}) {
    let auth = JSON.parse(localStorage.getItem('auth'));
    let check = false;
    let data = {};
    const [cred, setCred] = useState({
        username: "",
        password: "",
    })
    let home = `/home`;
    let history = useHistory();

    const inputEvent = (event) => {
        const { value, name } = event.target;

        setCred((preValue) => {

            return {
                ...preValue,
                [name]: value,
            };
        })
    }

    function validation(cred) {
        Object.keys(cred).map(k => cred[k] = cred[k].trim());
        if (cred.email === "" || cred.password === "") {
            check = false;
            document.getElementById("j").innerHTML = "Please enter all the fields";
        }
        else {
            check = true;
        }

        return check;
    }

    async function submit(event) {
        event.preventDefault();
        if (validation(cred)) {
            document.getElementById("j").innerHTML = "Signing in...";
            const loginLink = 'https://tintcodingclub.herokuapp.com/api/token/';

            data = cred;
            const axios = require('axios')


            try {

                const resp = await axios.post(loginLink, data);
                console.log(resp.data.access);
                //document.getElementById("form2").innerHTML = JSON.stringify(resp.data.access);
                
                localStorage.setItem("auth", JSON.stringify(resp.data.access));
                let token = JSON.parse(localStorage.getItem("auth"));
                const config = {
                    headers: {
                        "Authorization": `Bearer ${token}`
                    },
                };
                document.getElementById("j").innerHTML = "Getting profile data";
                const res =await axios.get('https://tintcodingclub.herokuapp.com/users/profile/', config);
                console.log(res.data.userData);
                localStorage.setItem("prof", JSON.stringify(res.data.userData));
                AuthUpdate();
                history.push(home);

            }
            catch (error) {
                if (error.response && error.response.status === 401) {
                    document.getElementById("j").innerHTML = "Incorrect email or password.";
                }
            }
        }

    };


    return (
        auth ? <Redirect to="/home" /> :
        <div className="sign">

            <form action="" className="sign__form">
                <div className="sign__form__header">Sign In</div>
                <input type="text" id="username" name="username" placeholder="Enter your email"
                    value={cred.email} onChange={inputEvent} />
                <input type="password" id="loginpassword" name="password" placeholder="Enter your password"
                    value={cred.password} onChange={inputEvent} />
                <button onClick={submit} className="btn btn-login">Login</button>
                <span id="j">Dont have an account? <Link to="/register" className="register">Create Now</Link></span>
            </form>
        </div>
    )
}
