import React from 'react'
import s from './ArchitectureContainer.module.css'
import { Link } from 'react-router-dom'

export default function ArchitectureContainer({id, avatar, site}) {
  return (
    
    <div  className={s.architecture_container}> 
    <div className={s.arch_img_container}>
    <Link to= { `${id}` }>
    
      <img alt='AtelierBahia atelierbahia Atelier Bahia Gloria Cota Visedo Matheus Cartocci Cabella Ligure Architecture Art Research ' src={avatar} className={s.arch_avatar} />
     
      <p>{site}</p>
      </Link>
      </div>
    
    </div>
  )
}
