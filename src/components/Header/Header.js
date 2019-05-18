import React from 'react'
import './Header.css'

const Header = () => (
    <header className="Header">
        <nav className="main-nav">
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#about-us">About Us</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </header>
)

export default Header