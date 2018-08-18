import React from "react";

const Character = props => (
    <div
        onClick = {()=> props.handleClick(props.id)}
        style = {{width: 110, height: 110, backgroundImage:`url("${props.image}")`}}
    />
);

export default Character;