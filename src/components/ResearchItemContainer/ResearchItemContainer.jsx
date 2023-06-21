import React from 'react'
import s from './ResearchItemContainer.module.css'


export default function ({title, site, status, year, program, description, avatar, photos, files}) {
  
const link =  files ? (
   <a href={files} download> Download full text </a> 
) : null


const photoStyle = files ?  ({className: s.isseyStyle}) : ({className: s.photo_search});
  
return (
    <div className={s.all_page}>
        <div className={s.top}>
    <div className={s.res_item_left}>
    
  <h1>{title}</h1>
  <h2>{site}</h2>
  <h3>{status}</h3>
  <h4>{year}</h4>
  <h5>{program}</h5>
  <h4 className={s.descr}>{description}</h4>

 

  <p> {link } </p>
  
    </div>
  <div className={s.res_item_right}>
  <img src={avatar} alt='AtelierBahia atelierbahia Atelier Bahia Gloria Cota Visedo Matheus Cartocci Cabella Ligure Architecture Art Research' className={s.avatar} />
    </div>
    
  </div>
 
  <div className={s.arr_res_photo}>
 
  <p>{ photos.map(photoUrl => <img src={photoUrl} alt='t' {...photoStyle} /> )} </p>

</div>

</div>

  )
}
