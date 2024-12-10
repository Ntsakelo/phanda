import Cookies from "universal-cookie";
import { useState } from "react";
import { jwtDecode } from "jwt-decode";



const useCheckAuth = () => {
    const [cookie,setCookie] = useState('')
    const cookies = new Cookies()

    const getCookie = () => {
      if(cookies.get('phanda')){
        setCookie(cookies.get('phanda'))
      }
      return cookie
    }

    const checkLogin = () => {
         if(cookies.get('phanda')){
            setCookie(cookies.get('phanda'))
            return true
         }else{
            setCookie('')
            return false
         }
    }

    const tokenDecode = () => {
          if(cookie){
            const decoded = jwtDecode(cookie)
            return decoded
          }else{
            return {}
          }
    }

    return {checkLogin,tokenDecode,getCookie}
}

export default useCheckAuth;