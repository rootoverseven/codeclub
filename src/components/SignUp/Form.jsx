import React, { useState } from 'react';
import axios from 'axios';

let check = false;


export default function Form() {
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

    async function submit(e) {
        e.preventDefault();
        Object.keys(cred).map(k => cred[k] = cred[k].trim());
        if (/@cse.tict.edu.in\s*$/.test(cred.email)) {
            document.getElementById("i").innerHTML = "Sending Data";
            const signUpLink = 'https://tintcodingclub.herokuapp.com/users/signup';
            
            data = cred;
            const axios = require('axios')

            const resp = await axios.post(signUpLink, data);
            console.log(resp.data.ok);
            document.getElementById("form").innerHTML=JSON.stringify(resp.data);
        }
        else{
            document.getElementById("i").innerHTML = "Enter a valit tint email";
        }
    }

    return (

        <div id="form">
            <form action="">
                <label htmlFor="firstName">First name:</label><br />
                <input type="text" id="firstName" name="firstName" placeholder="Enter your first name"
                    value={cred.firstName} onChange={inputEvent} /><br />

                <label htmlFor="lastName">Last name:</label><br />
                <input type="text" id="lastName" name="lastName" placeholder="Enter your last name"
                    value={cred.lastName} onChange={inputEvent} /><br />

                <label htmlFor="email">Email:</label><br />
                <input type="text" id="email" name="email" placeholder="Enter your email"
                    value={cred.email} onChange={inputEvent} /><br />

                <label htmlFor="dob" >Date of birth:</label><br />
                <input type="date" id="dob" name="dob" placeholder="yyyy-mm-dd"
                    value={cred.dob} onChange={inputEvent} /><br />

                <label htmlFor="password" >Password:</label><br />
                <input type="password" id="password" name="password" placeholder="Create a password"
                    value={cred.password} onChange={inputEvent} /><br />

                <label htmlFor="courseName" >Course:</label><br />
                <input type="text" id="courseName" name="courseName" placeholder="Enter your course"
                    value={cred.courseName} onChange={inputEvent} /><br />

                <label htmlFor="department" >Department:</label><br />
                <input type="text" id="department" name="department" placeholder="Enter your department"
                    value={cred.department} onChange={inputEvent} /><br />

                <label htmlFor="yearOfAdmission" >Year of admission:</label><br />
                <input type="text" id="yearOfAdmission" name="yearOfAdmission" placeholder="Year of addimission"
                    value={cred.yearOfAdmission} onChange={inputEvent} /><br />

                <label htmlFor="yearOfPassing" >Year of passingg:</label><br />
                <input type="text" id="yearOfPassing" name="yearOfPassing" placeholder="Year of passing"
                    value={cred.yearOfPassing} onChange={inputEvent} /><br />

                <label htmlFor="studentId" >Student ID:</label><br />
                <input type="text" id="studentId" name="studentId" placeholder="Enter your student ID"
                    value={cred.studentId} onChange={inputEvent} /><br />
                <br />

                <button onClick={submit}>Submit</button>

                <br />

                <span id="i"></span>

            </form>
        </div>

    )


}
