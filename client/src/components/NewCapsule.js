import React, {useState} from 'react'; 
import { geolocated } from "react-geolocated";
import API from '../libs/API'
import Navigation from '../components/Navigation.js'
import "../styles/NewCapsule.css";

import {
    useHistory
  } from "react-router-dom";

function NewCapsule(props){

    console.log(props);

    const [capsuleName, setCapsuleName] = useState(""); // default value 
    const history = useHistory();

    const updateCapsuleName = e => {
        let value = e.target.value;
        setCapsuleName(value);
    }

    const submitForm = () => {
        API({
            endpoint: "/capsule/", 
            method: "post", 
            payload: {name: capsuleName, lon: props.coords.longitude, lat: props.coords.latitude}, 
            callbackFn: function(){
                console.log("it saved");
                history.push("/nearby");
            } 
        });
    }

    //setCapsuleName (receive some value inside me) 
    return(
        <div class="new">
            <Navigation />
            <div class="logo">
                <h1>Capsule</h1>
            </div>
            <div class="container">
            <h2>Create A New Capsule</h2>
            <div id="newCapsuleForm">
                <label>Title:</label>
                <input type="text" name="name" id="capsuleNameField" value={capsuleName} onChange={e=>updateCapsuleName(e)}/> 
                <input class="ctaBtn" type="submit" value="Save" onClick={e=>submitForm()}/>
            </div>
            </div>
        </div>
    )
}

export default geolocated ({
    positionOptions: {
        enableHighAccuracy: true,
    },
    userDecisionTimeout: 5000,
})(NewCapsule);