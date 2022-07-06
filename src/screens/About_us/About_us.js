import React from 'react'
import './About_us.css'
import img from '../../assets/Shayan.jpeg'
const About_us = () => {
   return (
      <div className="head">
         <h1>About us</h1>
         <div className="container">
            <h4>Faculty Members</h4>
            <div className="card_container">
            <div className="card">
               <div className="details_container">
                  <div className="image">
                  <img src="https://i.ibb.co/sRZ7HYW/Dr-SATYABRATA-MAITY.jpg" alt="Dr-SATYABRATA-MAITY" border="0"/>
                  </div>
                     <div className="details">
                        <strong>Dr. SATYABRATA MAITY</strong>
                        <div className="stream">Department of Information Technology</div>
                        <p>If you love to paint your imagination with the colour of codes, we always bring you the canvas. We think, we design, we code, we love to take the challenges, it’s a great fun when we solve. We the “Code Extremist” believe anybody can code. Extend your hands to ride the high.</p>
                     
                     </div>

                     
                  </div>
               </div>
               <div className="card">
               <div className="details_container">
                  <div className="image">
                  <img src="https://i.ibb.co/fvHX0zD/KAMALESH-KARMAKAR.jpg" alt="KAMALESH-KARMAKAR" border="0"/>
                  </div>
                     <div className="details">
                        <strong>KAMALESH KARMAKAR</strong>
                        <div className="stream">Department of Computer Science</div>
                        <p>“As a coder, you should understand the fundamental principles of coding. You shall understand how a complex system can be developed by layers of simple systems and technologies. 

                        Don't worry, if a code does not work as per your expectation. Analyze the problem, find the bug, and fix it! It will be life-long learning.”</p>
                        <p></p>
                     
                     </div>
 
                  </div>
               </div>
               
               <br></br>
               <h4>Coordinators</h4>
               <div className="card">
               <div className="details_container">
                  <div className="image">
                  <img src="https://i.ibb.co/3kJkQJT/PIYUSH.jpg" alt="PIYUSH" border="0"/>
                  </div>
                     <div className="details">
                        <strong>PIYUSH KUMAR</strong>
                        <div className="stream">Computer Science</div>
                        <p>“There are two ways to write error-free programs; only the third works.”</p>
                        <p></p>
                     
                     </div>
 
                  </div>
               </div>
               <div className="card">
               <div className="details_container">
                  <div className="image">
                  <img src="https://i.ibb.co/WgzwwCY/mayuk.jpg" alt="mayuk" border="0"/>
                  </div>
                     <div className="details">
                        <strong>MAYUKH SAMADDER</strong>
                        <div className="stream">Computer Science</div>
                        <p>" Code is life, code is living"</p>
                     
                     </div>

                     
                  </div>
               </div>
               <div className="card">
               <div className="details_container">
                  <div className="image">
                  <img src="https://i.ibb.co/4Mh3LcJ/RISHAB-MISHRA.jpg" alt="RISHAB-MISHRA" border="0"/>
                  </div>
                     <div className="details">
                        <strong>RISHABH MISHRA</strong>
                        <div className="stream">Information technology</div>
                        <p>“Sometimes it is the people no one can imagine anything of who do the things no one can imagine.”</p>
                        <p></p>
                     
                     </div>
 
                  </div>
               </div>
            </div>
         </div>

      </div>
   )
}
export default About_us;