import React from 'react';
import {Link} from 'react-router-dom';

const arrayOfCats= ["minerva", "luna", "frances", "neville"]

//have a leading slash in front of your link names so that it begins at home page!
//if you don't have this its just going to concatenate routes

function Cats(props) {
    return (
        <div>
            <h1><span role="img" aria-label="cat-emoji">🐈</span>Cats Page</h1>
            {arrayOfCats.map((cat, i) => 
                <Link to={`/cats/${cat}`}>{cat}</Link>
            )}
            <button onClick={()=> {
                props.history.push('/')
            }}>GO HOME</button>
        </div>
    )
}

export default Cats;