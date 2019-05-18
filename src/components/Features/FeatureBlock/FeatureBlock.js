import React from 'react';
import './FeatureBlock.css'

const FeatureBlock = (props) => (
    <div className="FeatureBlock">
        <img src={props.src} height="40px"/>
        <h3>{props.title}</h3>
        <p>{props.text}</p>
    </div>
)

export default FeatureBlock