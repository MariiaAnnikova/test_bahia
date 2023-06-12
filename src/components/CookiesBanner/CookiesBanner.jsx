import React from 'react'
import s from './CookiesBanner.module.css'
import { Link } from 'react-router-dom'
import CookieConsent from "react-cookie-consent";


export default function CookiesBanner({banner}) {

  <CookieConsent debug={true}
  onAccept={(acceptedByScrolling) => {
    if (acceptedByScrolling) {
     
      alert("Accept was triggered by user scrolling");
    } else {
      alert("Accept was triggered by clicking the Accept button");
    }
  }}
></CookieConsent>

{<CookieConsent
  enableDeclineButton
  onDecline={() => {
    alert("nay!");
  }}
></CookieConsent>}



  return (
    <CookieConsent
  location="bottom"
  buttonText="Accept All"
  cookieName="myAwesomeCookieName2"
  style={{ background: "#000000" , bottom: '90px'}}
  buttonStyle={{ color: "#000000", fontSize: "15px", borderRadius: "9px" }}
  expires={250}

 >
'We do not use any cookies on our website, but We still have Cookies Policy to follow the all regulation.   By clicking “Accept All”, you consent that you agree and inform about it.  Also you can visit  <Link to='privacy' style={{ color: "#FFD95A" }}> 'Privacy Policy' </Link> to read in ditails all information.
  <span style={{ fontSize: "14px" }}></span>
</CookieConsent>

  )
}
