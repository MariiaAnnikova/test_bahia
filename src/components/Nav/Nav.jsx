import React from 'react'
import s from './Nav.module.css'
import Logo from '../../Css/Logo.png'
import { Link } from 'react-router-dom'
import {PlusOutlined} from '@ant-design/icons'

export default function Nav({menuActive, setMenuActive}) {
  return (
    <div className={s.nav_block}>
       <div className={s.nav_logo}><Link to='/galery'><img  src={Logo} alt="Logo" /></Link> </div> 
      
      <div className={[s.nav_menu, menuActive ? s.active : ''].join(' ')}>
      <Link to='/architecture'><div className={s.nav_arch}>Architecture</div> </Link>
      <Link to='/research'><div className={s.nav_serch}>Research</div></Link>
      <Link to='/about_us'><div className={s.nav_about_us}>About Us</div></Link>
    </div>
    <PlusOutlined className={s.icon_plus} onClick={() => setMenuActive(menuActive ? false : true)}/>
    </div>
  )
}
