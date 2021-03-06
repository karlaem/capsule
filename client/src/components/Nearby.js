import React, {useState, useEffect} from 'react';
import { geolocated } from "react-geolocated";
import API from '../libs/API'
import Navigation from '../components/Navigation.js'
import "../styles/Nearby.css";

import {
    Link
  } from "react-router-dom";

function Nearby(props){
    const [nearbyCapsules, setNearbyCapsules] = useState([]);

   useEffect(function(){
        getNearby();
    }, [props])

    const getNearby = function(){
        if(props.coords!=null)
        {
            API({
                endpoint: "/nearby", 
                method: "post", 
                payload: {lon: props.coords.longitude, lat: props.coords.latitude}, 
                callbackFn: function(data){
                    console.log("yup it fetched", data);
                    setNearbyCapsules(data);
                } 
            });
        }
    }

    return(<div class="container">
        <Navigation />
        <h1>Nearby</h1>

        {nearbyCapsules.map(capsule =>{ 
            return (
                <Link to={"/capsule/"+capsule.id}>
                    {capsule.strName}
                    {capsule.distance}
                </Link>
            )
        })}
        </div>)
}

export default geolocated ({
    positionOptions: {
        enableHighAccuracy: true,
    },
    userDecisionTimeout: 5000,
    watchPosition: true,
})(Nearby);