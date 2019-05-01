import React from 'react';

function Cat(props){
    return(
        <h1>Meow, {props.match.params.cat}</h1>
    )
}

export default Cat;