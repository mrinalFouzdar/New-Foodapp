import React, { useEffect, useState } from 'react'

const useOnlineStatus = () => {
    const [onlineStatus,setOnlineStatus] = useState(true);
    // check online status
    useEffect(()=>{
        window.addEventListener('offline',()=>{
            setOnlineStatus(false)
        })
        window.addEventListener('online',()=>{
            setOnlineStatus(true)
        })

        // return ()=>{
        //     window.removeEventListener('online')
        // }

    },[])

  return onlineStatus
}

export default useOnlineStatus;
