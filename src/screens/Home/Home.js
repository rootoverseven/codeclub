import React from 'react'
import About from '../../components/About/About'
import { Header } from '../../components/Header/Header'
import './style.scss'
import Footer from "../../components/Footer/Footer"

const Home = ({auth}) => {
    return (
        <div className="home" id="home">
            <Header auth={auth}/>
            <About />
            <div id="footer">
                <Footer />
            </div>
        </div>
    )
}
export default Home;