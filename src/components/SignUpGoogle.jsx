import React, { useEffect, useRef } from 'react'
import * as jose from 'jose'
import { useNavigate } from 'react-router-dom'
export default function SignUpGoogle() {
    const buttonDiv = useRef(null)
    const navigate = useNavigate()
    async function handleCredentialResponse(response){
        let responsePayload = jose.decodeJwt(response.credential)
        let userObject = {
            name: responsePayload.name,
            email: responsePayload.email,
            password: responsePayload.sub,
            picture: responsePayload.picture,
        }
        sessionStorage.setItem('userShooting', JSON.stringify(userObject));
        navigate('/play')
    }


    useEffect(()=>{
        /* global google */
        google.accounts.id.initialize({
            client_id: "127668124466-988862dn6mognnav7tcd4jnna480ujg8.apps.googleusercontent.com",
            callback: handleCredentialResponse
        });
        google.accounts.id.renderButton(
            buttonDiv.current,
            {theme: "outline", size: "large"}
        )
    },[])
  return (
    <div>
        <div ref={buttonDiv}></div>
    </div>
  )
}
