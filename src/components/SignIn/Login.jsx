import React, { useState } from 'react';
import { Redirect, useHistory } from 'react-router-dom';

export default function Login() {
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
                history.push(home);
                localStorage.setItem("auth", JSON.stringify(resp.data.access));

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

            <div>

                <div id="form2">
                    <form action="">
                        <label htmlFor="email">Email:</label><br />
                        <input type="text" id="username" name="username" placeholder="Enter your email"
                            value={cred.email} onChange={inputEvent} /><br />

                        <label htmlFor="password" >Password:</label><br />
                        <input type="password" id="loginpassword" name="password" placeholder="Enter your password"
                            value={cred.password} onChange={inputEvent} /><br />

                        <button onClick={submit}>Submit</button>

                        <br /><br />

                        <span id="j"></span>
                    </form>
                </div>
            </div>
    )
}
