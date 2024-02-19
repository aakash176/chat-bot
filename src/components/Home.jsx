import React, { useEffect } from 'react'
import { useUser, SignOutButton } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";
const Home = () => {
    const navigate = useNavigate()
    const { isSignedIn, user, isLoaded } = useUser();
    
  return (
    <div>
        <SignOutButton signOutCallback={() => navigate('/sign-in')} />
    </div>
  )
}

export default Home