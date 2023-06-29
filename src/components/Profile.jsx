import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Profile({user}) {
    const navigate = useNavigate()
    // useEffect(() => {
    //     if(!user) {
    //         navigate('/')
    //     }
    // }, [])
  return (
    <div>Profile {user && user.name}</div>
  )
}

export default Profile