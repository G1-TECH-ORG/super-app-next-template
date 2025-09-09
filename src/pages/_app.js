import "@/styles/globals.css";
import { useEffect, useState } from "react";
import { UserContext } from "../../g1/context";
import { useRouter } from "next/router";
import {User} from "../../g1/user";

export default function App({ Component, pageProps }) {
  const router = useRouter()
  const [user,setUser] = useState()
  const uat = router.query.user_access_token

  const initialzeG1 = async(uat) =>{
      const u = await User(uat)
      console.log(u)
      setUser(u)
  }

  useEffect(()=>{
    if(uat){
      initialzeG1(uat)
    }
  },[uat])
  return <UserContext.Provider value={{currentUser:user,setUser:setUser}}><Component {...pageProps} /></UserContext.Provider>
}
