import axios from 'axios'
import { useState, useEffect } from 'react'

const Fetch2 = () => {
    let url = 'https://api.github.com/users'
    const [results, setResults]=useState([])
    const [isLoading, setIsLoading]=useState(true)
    const fetch = async()=>{
        setIsLoading(true)
        await axios.get(url)
        .then((response)=>{
            console.log(response.data)
            setResults(response.data)
            setIsLoading(false)
        })
        .catch((error)=>{
            console.log('error',error)
            setIsLoading(false)
        })
    }
    // useEffect(()=>{
    //         setInterval(()=>{
    //                 (async()=>await fetch())
    //             },2000)
    //         },[])
    //         if (isLoading) {
    //             return <div>Loading...</div>
    //         }
  return (
    <div>
    <h2>Fetch Api</h2>
    <fetch/>
    {results.map((result)=>(
        <div key={result.id}>
        <p>{result.login}</p>
    </div>
  ))}
    
    
    </div>
  )
}

export default Fetch2