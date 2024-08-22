import React from "react";
import './Button.css'

export default (props) => {
    return (
        <button className="button" style={{ gridColumn: 'span ' + props.espaco }} >{props.label}</button>
    )
}