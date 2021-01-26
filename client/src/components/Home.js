import React from 'react'; 
import { Link } from "react-router-dom";
import "../styles/Home.css";

//functional components 
export default function(){
    const headerStyle = {
        "color" : "red"
    }

    return(

        <div class="container home">
            <div class="contents">
                <div class="logo">
                    <h1>Capsule</h1>
                </div>
                <div class="menu">
                    <Link to="/nearby">find capsule</Link> 
                    <Link to="/capsule/new">create capsule</Link> 
                </div>
            </div>
        </div>
    )
}