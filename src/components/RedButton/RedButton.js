import React from 'react'
import './RedButton.css'

const RedButton = (props) => (
    <button className="RedButton" onClick={props.onClick}>{props.text}</button>
)

export default RedButton