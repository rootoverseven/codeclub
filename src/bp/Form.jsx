import React, { useState } from 'react'
import axios from 'axios';



function SignUp() {
    let check = false;

    let data = {};
    const [cred, setCred] = useState({
        firstName: "",
        lastName: "",
        email: "",
        dob: "",
        password: "",
        courseName: "",
        department: "",
        yearOfAdmission: "",
        yearOfPassing: "",
        studentId: ""
    })

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
        if (cred.firstName === "" || cred.lastName === "" || cred.email === "" || cred.dob === "" || cred.password === "" || cred.courseName === "" || cred.department === "" || cred.yearOfAdmission === "" || cred.yearOfPassing === "" || cred.studentId === "") {
            check = false;
            document.getElementById("i").innerHTML = "Please enter all the fields";
        } else if (!/tict.edu.in\s*$/.test(cred.email)) {
            check = false;
            document.getElementById("i").innerHTML = "Enter a valit tint email";
        }
        else if (cred.password !== document.getElementById("passwordtwo").value) {
            check = false;
            document.getElementById("i").innerHTML = "Passwords do not match";

        }
        else {
            check = true;
        }

        return check;
    }

    async function submit(e) {
        e.preventDefault();

        if (validation(cred)) {
            document.getElementById("i").innerHTML = "Sending Data";
            const signUpLink = 'https://tintcodingclub.herokuapp.com/users/signup';

            data = cred;
            const axios = require('axios')

            try {

                const resp = await axios.post(signUpLink, data);
                console.log(resp.data.ok);
                document.getElementById("form").innerHTML = JSON.stringify(resp.data);
            }
            catch (error) {
                if (error.response && error.response.status == 500) {
                    document.getElementById("i").innerHTML = "User with this email is already registered.";
                }
            }
        }

    }

    return (
        <div id="form" className="signup">
            <form action="#" method="#" className="signup__form">
                <div className="signup__form__left">
                    <div className="heading">Sign up</div>
                    <div className="input">
                        <input type="text" id="firstName" name="firstName" placeholder="Enter your first name"
                            value={cred.firstName} onChange={inputEvent} required />                    </div>
                    <div className="input">
                        <input type="text" id="lastName" name="lastName" placeholder="Enter your last name"
                            value={cred.lastName} onChange={inputEvent} />                    </div>
                    <div className="input">
                        <input type="text" id="email" name="email" placeholder="Enter your email"
                            value={cred.email} onChange={inputEvent} />                    </div>
                    <div className="input">
                        <input type="date" id="dob" name="dob" placeholder="yyyy-mm-dd"
                            value={cred.dob} onChange={inputEvent} />                    </div>
                    <div className="input">
                        <input type="text" id="courseName" name="courseName" placeholder="Enter your course"
                            value={cred.courseName} onChange={inputEvent} />
                    </div>
                    <div className="input">
                        <input type="text" id="department" name="department" placeholder="Enter your department"
                            value={cred.department} onChange={inputEvent} />                    </div>
                </div>
                <div className="signup__form__right">
                    <div className="input">
                        <input type="text" id="yearOfAdmission" name="yearOfAdmission" placeholder="Year of addimission"
                            value={cred.yearOfAdmission} onChange={inputEvent} />                    </div>
                    <div className="input">
                        <input type="text" id="yearOfPassing" name="yearOfPassing" placeholder="Year of passing"
                            value={cred.yearOfPassing} onChange={inputEvent} />                    </div>
                    <div className="input">
                        <input type="text" id="studentId" name="studentId" placeholder="Enter your student ID"
                            value={cred.studentId} onChange={inputEvent} />                    </div>
                    <div className="input">
                        <input type="password" id="password" name="password" placeholder="Create a password"
                            value={cred.password} onChange={inputEvent} />                    </div>
                    <div className="input">
                        <input type="password" id="passwordtwo" name="passwordtwo" placeholder="Conirm Password..." />
                    </div>
                    <button type="submit" className="btn btn-submit" onClick={submit}>Create Account</button>
                    <br /><br />
                    <span id="i"></span>
                </div>
            </form>
        </div>
    )
}

export default SignUp
