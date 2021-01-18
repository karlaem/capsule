import React, {useState, useEffect} from 'react';
import API from '../libs/API'

export default function(props){
    let capsuleID = props.match.params.id;
    const [capsule, setCapsule] = useState({});

    const getCapsule = function(){
        API({
            endpoint: "/capsule/"+capsuleID, 
            method: "get", 
            callbackFn: function(data){
                console.log("yup it fetched", data);
                setCapsule(data);
            } 
        });
    }

    useEffect(function(){
        getCapsule();
    }, [])

    return(
        <div>
            <h1>Viewing Capsule Information {capsule.id}</h1>
        </div>
    )
}