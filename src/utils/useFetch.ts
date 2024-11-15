import { useState } from "react"
import axios from "axios"

const version = 'v1'

const url = `http://localhost:8000/api/${version}`

const useFetch = (endpoint:string) => {
    const [errorMessage,setErrorMessage] = useState('')
    const [result,setResult] = useState<any>()
    axios({
        method:'GET',
        headers:{
            Authorization:''
        },
        url:`${url}/${endpoint}`,
        
    }).then(result => {
        result.status === 200 ? setResult(result) : setErrorMessage('processing failed')
    }).catch(error => {
        setErrorMessage('internal error occured')
    })
    return [errorMessage,result]
}

export default useFetch