import React, { useState } from 'react'
import axios  from 'axios'


const Fetch =()=> {
    // const endpoint = "https://jsonplaceholder.typicode.com/users";
    const endpoint2 = 'https://api.github.com/users'

    // const [results, setresults] = useState([])
    const [response, setresponse] = useState([])
    const getData = ()=> {
        // alert("I am working")
        axios.get(endpoint2)
        .then ((result)=>{
            console.log(result.data);
            setresponse(result.data);
        })
        .catch((err)=>{
            console.log(err);
        })
    }
  return (
    <div>
    <button onClick={getData}>Fetch API</button>
    {response.map((resp)=>{
        return<div>
        <img src={resp.avatar_url} alt=''/>
        <div>{resp.login}</div>
        </div>
    })}

    </div>
    
  )
}

export default Fetch