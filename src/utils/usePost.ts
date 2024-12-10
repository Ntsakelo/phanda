import { useState } from "react";
import axios, { AxiosError, AxiosResponse } from "axios";
import useCheckAuth from "./useCheckAuth";
import Cookies from "universal-cookie";

const version = 'v1';
const url = `http://localhost:8000/api/${version}`;

const usePost = () => {
  const [result, setResult] = useState<AxiosResponse | null>();
  const [error, setError] = useState<AxiosError | null>();
  const [isLoading, setIsLoading] = useState(false);
  const cookies = new Cookies()
  let cookie =  cookies.get('phanda')

  const post = async (data:any, endpoint:string) => {
    setIsLoading(true);
    setResult(null)
    setError(null)
    try {
      const response = await axios({
        method: "POST",
        headers: {
          Authorization: `BEARER ${cookie}` 
        },
        url: `${url}/${endpoint}`,
        data: data
      });
      
      setResult(response); 
    } catch (err:any) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };

  return { post, result, error, isLoading };
};

export default usePost;