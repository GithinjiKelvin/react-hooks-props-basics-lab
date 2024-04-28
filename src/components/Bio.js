import React from 'react'


function Bio(props) {
  
    if (!props.bio){
        return null;
    }else{
        return(
            <p>{props.bio}</p>
        )
    }
  
}

export default Bio
