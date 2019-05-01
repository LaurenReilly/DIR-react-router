import React from 'react';
import {Link} from 'react-router-dom';

//have a leading slash in front of your link names so that it begins at home page!
//if you don't have this its just going to concatenate routes

function Cats({match,history,cats}) {
    return (
        <div>
            <h1><span role="img" aria-label="cat-emoji">🐈</span>Cats Page</h1>
            {cats.map((cat, i) => 
                <Link to={`/${match.path}/${cat}`}>{cat}</Link>
            )}
            <button onClick={()=> {
                history.push('/')
            }}>GO HOME</button>
        </div>
    )
}

export default Cats;