import React from 'react'
import { Link } from 'react-router-dom'
import s from './ResearchContainer.module.css'
export default function ResearchContainer({id, avatar, site}) {
  return (
  
    <div className={s.research_container}> 
   
    
      <div className={s.res_img_container}>
      <Link to= { `${id}` }>
      <img alt='AtelierBahia atelierbahia Atelier Bahia Gloria Cota Visedo Matheus Cartocci Cabella Ligure Architecture Art Research' src={avatar}/>
      <p>{site}</p>
      </Link>
      </div>
     
    
    </div>
  )
}
