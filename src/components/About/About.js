import React from 'react'
import './style.scss'
function About() {
    const we="<we/>";
    return (
        <div className="about" id="about">
            <div className="about__quote">
                "All of my friends who have younger siblings who are going to 
                college or high school - my number one piece of advice is: You 
                should learn how to program."
            </div>
            <div className="about__header">
                Who <span>{we}</span> are ?
            </div>
            <div className="about__cards">
                <div className="card"></div>
                <div className="card"></div>
                <div className="card"></div>
            </div>
        </div>
    )
}

export default About
