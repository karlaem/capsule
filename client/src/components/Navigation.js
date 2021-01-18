import React from 'react'

import {
    Link
  } from "react-router-dom";

export default function(){
    return(
        <div>
            <Link to="/nearby">Nearby</Link> 
            <Link to="/capsule/new">New</Link> 
        </div>
    )
}
