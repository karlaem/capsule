import React, {useState} from 'react';


export default function(){
    const[emailAddress, setEmailAddress] = useState("");
    const[password, setPassword] = useState("");

    const updateEmailAddress = e => {
        let value = e.target.value;
        setEmailAddress(value);
    }

    const updatePassword = e => {
        let value = e.target.value;
        setPassword(value);
    }
 
    const submitForm = e => {
        console.log(emailAddress, password);
        //ajax post of those items....
        e.preventDefault();
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