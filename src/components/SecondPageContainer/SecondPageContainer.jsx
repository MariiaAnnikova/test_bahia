import React from 'react'
import { Link } from 'react-router-dom';
import s from './SecondPageContainer.module.css'
import Masonry, { ResponsiveMasonry} from 'react-responsive-masonry';

export default function SecondPageContainer({ id, avatar, site}) {

  return (
  
     <div className={s.second_page_container}> 
     
  
    
      <div className={s.image_container}>
      <Link to= { `${id}` }>
      <img alt='AtelierBahia atelierbahia Atelier Bahia Gloria Cota Visedo Matheus Cartocci Cabella Ligure Architecture Art Research' src={avatar}/>
      <p>{site}</p>
      </Link>
      </div>
      
      
    </div>
    
  )
}