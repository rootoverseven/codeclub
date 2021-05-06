import React from 'react'
import About from '../../components/About/About'
import { Header } from '../../components/Header/Header'
import './style.scss'


const Home = () => {
    return (
        <div className="home" id="home">
            <Header/>
            <About/>
        </div>
    )
}
export default Home;