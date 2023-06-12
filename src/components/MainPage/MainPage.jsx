import React from 'react'
import Logo from '../../Css/Logo.png'
import s from './MainPage.module.css'
import { Link } from 'react-router-dom'
import {InstagramOutlined} from '@ant-design/icons'
import {FacebookOutlined } from '@ant-design/icons'
import { MailOutlined } from '@ant-design/icons'


export default function MainPage() {
      
   
return (
  
  <div className={s.main}>
    <div className={s.logo}>  <Link to='galery'>
      
      <img  src={Logo} alt='Logo'/> 

   </Link>
   <div className={s.logo_title}>
   <p>imagine beautiful things. that is what we do.</p>
  
      </div>
   
   </div>  
  
   </div>

 
  
   
  )
}

