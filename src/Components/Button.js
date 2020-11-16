import React from 'react';

function Button(props) {
    return (
        <button value={props.value}>{props.value}</button>
    )
}

export default Button;