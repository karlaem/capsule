//endpoint: /something/

export default function({endpoint, method, payload, callbackFn}){

     //create object
     const requestOptions = {
        method: method,
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(payload)
    }; 
    
    // what ever comes back from API ends up down here 
    fetch('http://localhost:3000/api'+endpoint, requestOptions)
        .then(response => {
            if(response.status == 200)
            {
                response.text().then(data=>{
                    callbackFn(JSON.parse(data)); 
                })
            } else {
                
                console.log("error on API", response);
            }
        });
}