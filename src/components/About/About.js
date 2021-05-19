import React from 'react'
import './style.scss'
import img1 from "../../assets/smart.png"
import img2 from "../../assets/working.png"

import img3 from "../../assets/world.png"
import img4 from "../../assets/director.jpeg"

function About() {
    const we = "<our/>";
    return (
        <div className="about" id="about">
            <img src={img4} alt="" />
            <div className="about__quote">

                “TINT coding club is organising CODE HUNT on 8th May 2021. It is a really proud moment for <br />
                 all of us that in the first coding challenge, the participation is huge. I am sure in future <br /> the maximum number of students irrespective of their branch will take part in the contest and gradually coding will be a habit. My special thanks to coding club members, the coordinator faculty specially Dr Satyabrata Maity, Prof Kamalesh Katmakar, Prof Shiladitya Munshi,all my HODs and colleagues for their untiring effort and support. 
                My best wishes for today’s program and also for the future.”
                <br/>
                ― RT Goswami
            </div>
            <div className="about__header">
                What are <span>{we}</span> objectives ?
            </div>
            <div className="about__cards">
                <div className="card">
                    <img src={img1} alt="" />
                    <div className="title">Smart</div>
                    <div className="content">We intend to bring out the smart coder within you</div>
                </div>
                <div className="card">
                    <img src={img2} alt="" />
                    <div className="title">Hard Working</div>
                    <div className="content">we strive To bring the alpha worker within you</div>
                </div>
                <div className="card">
                    <img src={img3} alt="" />
                    <div className="title">Better World</div>
                    <div className="content">we intend to make the world a better world with the power of coding</div>
                </div>
            </div>
        </div>
    )
}

export default About
