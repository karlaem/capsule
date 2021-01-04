import React, {useState} from 'react';
import API from '../libs/API'
import {
    useHistory,
} from "react-router-dom";


export default function(){
    const[emailAddress, setEmailAddress] = useState("");
    const[password, setPassword] = useState("");
    const history = useHistory();

    const updateEmailAddress = e => {
        let value = e.target.value;
        setEmailAddress(value);
    }

    const updatePassword = e => {
        let value = e.target.value;
        setPassword(value);
    }
 
    const submitForm = e => {
        // console.log(emailAddress, password);
        //ajax post of those items....
        e.preventDefault();
        API({
            endpoint: "/users/",
            method: "POST",
            payload: {emailAddress: emailAddress, password: password},
            callbackFn: function(data){
                
                history.push("/register/success/");

                //this should be data should be response from server success 
                // alert("data was laoded", data);
                // console.log(data);
            }
        });   
    }


    return(
        <div>
            <div>Register</div>
            <div>
                <label>Email Address: </label>
                <input type="text" value={emailAddress} onChange={e=>updateEmailAddress(e)} />

                <label>Password: </label>
                <input type="password" value={password} onChange={e=>updatePassword(e)}/>

                <input type="submit" onClick={e=>submitForm(e)} />
            </div>
        </div>
    )
}