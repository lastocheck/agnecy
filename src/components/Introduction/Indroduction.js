import React from 'react'
import './Introduction.css'

const Introduction = () => (
    <div className="Introduction">
        <section>
            <h1>Our strong</h1>
            <h1 className="wide-tracking">organization</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed do eiusmod tempor incididunt  
                ut labore et. ectetur adig ipis cing elit, sed do eiusmod tempor incididunt.</p>
            <button className="red-button" onClick={() => window.location.assign("#contacts")}>Contact Us</button>
        </section>
        <section className="video-introduction">
            <img src="img/video.png" width="550" height="350" alt="Video Introduction"/>
        </section>
    </div>
)
    

export default Introduction