import { useState } from "react"
import axios from "axios"

const version = 'v1'

const url = `http://localhost:8000/api/${version}`

const useFetch = () => {
    const [error,setError] = useState<any>()
    const [result,setResult] = useState<any>()
    const [isResult,setIsResult] = useState(false)
    const getData = async(endpoint:string) => {
        if(!isResult){
            try{
                const response = await axios({
                      method:'GET',
                      headers:{
                          Authorization:''
                      },
                      url:`${url}/${endpoint}`,
                      
                  })
               setResult(response)
               setIsResult(true)
            }catch(error){
                setError(error)
            }
        } 

    }
    return {getData,result,error}
}

export default useFetch