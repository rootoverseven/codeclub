import React from 'react'
import './style.scss'

export const Header = () => {
    const code = "<code/>"
    return (
        <header className="header" id="header">

            <h1>Anybody can <span>{code}</span> </h1>
            <div className="carousel"><img src="https://picsum.photos/960/400" style={{borderRadius:20}}/></div>
        </header>
    )
}
