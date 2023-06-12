import React from 'react'
import s from './ArchitectureItemContainer.module.css'

export default function ArchitectureItemContainer({title, site, status, year, program, description, avatar, photos}){

 
  return (
    <div className={s.all_page}>  
<div className={s.top}>
    <div className={s.arch_item_left}>
    <h1>{title}</h1>
  <h2>{site}</h2>
  <h3>{status}</h3>
  <h4>{year}</h4>
  <h5>{program}</h5>
  <h4 className={s.descr}>{description}</h4>
  
    </div>
  <div className={s.arch_item_right}>
  <img src={avatar} alt='t' className={s.avatar} />
  </div>
  </div> 

  <div className={s.arr_arch_photo}>
 <p>
  { photos.map(photoUrl => <img src={photoUrl} alt='t' className={s.arr_photo}/> )}
</p>
</div>
</div> 

)}