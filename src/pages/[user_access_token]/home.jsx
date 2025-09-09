import React, { useContext, useEffect } from 'react'
import { UserContext } from '../../../g1/context'

const home = () => {

  const c = useContext(UserContext)
  
  if(c.currentUser){
    if(c.currentUser.code==200){
    return(
    <div className='text-center p-5'>
      <h2 className='text-3xl font-bold tracking-tight mb-10'>Main content goes here (home.js)</h2>
      <code className='bg-white/10 p-2 mt-10'>
        To Change: {'src-> [user_access_token]-> home.js'}
      </code>
    </div>
    )
    }else{
      return(
        <div className='text-3xl font-bold tracking-tight text-center'>
          Unauthorized
        </div>
      )
    }
  }else{
    return(
      <div className='text-3xl font-bold tracking-tight text-center'>
        Loading...
      </div>
    )
  }
}

export default home