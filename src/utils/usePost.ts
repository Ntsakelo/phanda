import { useState } from "react";
import axios, { AxiosError, AxiosResponse } from "axios";

const version = 'v1';
const url = `http://localhost:8000/api/${version}`;

const usePost = () => {
  const [result, setResult] = useState<AxiosResponse | null>();
  const [error, setError] = useState<AxiosError | null>();
  const [isLoading, setIsLoading] = useState(false);

  const post = async (data:any, endpoint:string) => {
    // Reset previous result and error
    setIsLoading(true);
    setResult(null)
    setError(null)
    try {
      const response = await axios({
        method: "POST",
        headers: {
          Authorization: '' 
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