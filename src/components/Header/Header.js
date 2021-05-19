import React from 'react'
import './style.scss'
import Particles from 'react-particles-js';
import img from '../../assets/Event.jpg';
import { Redirect, useHistory, Link } from 'react-router-dom';

export const Header = ({auth}) => {
    let history = useHistory();
    const code = "<code/>"
    async function authCheck(){
      if(!auth){
        alert("You need to Login first.")
        history.push(`/login`);
      }
      else
      {
        const axios = require('axios')
        
        try{
          let token = JSON.parse(localStorage.getItem("auth"));
          const config = {
              headers: {
                  "Authorization": `Bearer ${token}`
              },
          };
          document.getElementById("left").innerHTML = "Enrolling...";
          const res =await axios.post('https://tintcodingclub.herokuapp.com/users/register-webinar/',null , config);
          console.log(res.data)
          if(res.data.success==true){
            document.getElementById("left").innerHTML = `Successfully enrolled!<br/>Your registration no. is <b>${res.data.reg_number}</b><br/>Please note it for future reference.<br/>Please check your mail for more details.`;
          }
          else {
            document.getElementById("left").innerHTML = `You are already registered<br/>Please check your mail.`;
          }
        }
        catch (error) {
            console.log(error)
        }
      }
    }
    return (
        <div>
            <header className="header" id="header">
                <Particles className="p"
                    params={{
                        "particles": {
                          "number": {
                            "value": 60,
                            "density": {
                              "enable": true,
                              "value_area": 800
                            }
                          },
                          "color": {
                            "value": "#f64c31"
                          },
                          "shape": {
                            "type": "circle",
                            "stroke": {
                              "width": 0,
                              "color": "#000000"
                            },
                            "polygon": {
                              "nb_sides": 5
                            },
                            "image": {
                              "src": "img/github.svg",
                              "width": 100,
                              "height": 100
                            }
                          },
                          "opacity": {
                            "value": 1,
                            "random": false,
                            "anim": {
                              "enable": false,
                              "speed": 0.9744926547616141,
                              "opacity_min": 0.1,
                              "sync": false
                            }
                          },
                          "size": {
                            "value": 10,
                            "random": true,
                            "anim": {
                              "enable": false,
                              "speed": 40,
                              "size_min": 0.1,
                              "sync": false
                            }
                          },
                          "line_linked": {
                            "enable": true,
                            "distance": 150,
                            "color": "#ffffff",
                            "opacity": 0.70550130678083,
                            "width": 2
                          },
                          "move": {
                            "enable": true,
                            "speed": 4,
                            "direction": "none",
                            "random": false,
                            "straight": false,
                            "out_mode": "out",
                            "bounce": false,
                            "attract": {
                              "enable": false,
                              "rotateX": 600,
                              "rotateY": 1200
                            }
                          }
                        },
                        "interactivity": {
                          "detect_on": "canvas",
                          "events": {
                            "onhover": {
                              "enable": true,
                              "mode": "repulse"
                            },
                            "onclick": {
                              "enable": true,
                              "mode": "push"
                            },
                            "resize": true
                          },
                          "modes": {
                            "grab": {
                              "distance": 400,
                              "line_linked": {
                                "opacity": 1
                              }
                            },
                            "bubble": {
                              "distance": 400,
                              "size": 40,
                              "duration": 2,
                              "opacity": 8,
                              "speed": 3
                            },
                            "repulse": {
                              "distance": 200,
                              "duration": 0.4
                            },
                            "push": {
                              "particles_nb": 4
                            },
                            "remove": {
                              "particles_nb": 2
                            }
                          }
                        },
                        "retina_detect": true
                      }} />
                <h1>Anybody can <span>{code}</span> </h1>
                <div className="carousel">
                  <div className="left" id="left">
                    <div className="title">GitHub Workshop</div>
                    <div className="content">
                      <div className="date">Date: 22nd May</div>
                      <div className="platform">Platform: MS Teams</div>
                      <div className="who">Open To all</div>
                      <div className="problems">For any queries Contact:- <br /><br />
                        <span>Millind Singhania (CSE 3rd)</span><br />
                        95214 10648 <br /><br /> <span>Twinkle Chatterjee(IT 2nd)</span><br />91233 28151 <br /><br />
                        <button className="btn btn-code" onClick={authCheck}>Enroll Now</button>
                      </div>
                    </div>
                  </div>
                  <div className="right"></div>
                </div>
            </header>
        </div>
    )
}
