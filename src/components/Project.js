import React from "react";
import '../styles/portfolio.css'

export const Project = (props) => {
    return(
        <div onClick={() => {
            window.open(`${props.link}`,'_blank')
        }} className="project">
            <img src={props.img} alt="" />
            <h2>{props.name}</h2>
            <div className="cover"></div>
        </div>
    )
}