import React from 'react'
import s from './ProjectItemContainer.module.css'


export default function ProjectItemContainer({title, site, status, year, program, description, avatar, photos, files}) {

  const link =  files ? (
    <a href={files} download> Download full text </a> 
 ) : null
 
 
 const photoStyle = files ?  ({className: s.isseyStyle}) : ({className: s.arr_photo});
   

console.log(photos);
  //const All = photo.map(photo)
  // console.log(All); 
  
   return (
 <div className={s.all_page}>  
<div className={s.top}>
    <div className={s.project_item_left}>
    <h1>{title}</h1>
  <h2>{site}</h2>
  <h3>{status}</h3>
  <h4>{year}</h4>
  <h5>{program}</h5>
  <h4 className={s.descr}>{description}</h4>
  {link}
    </div>
  <div className={s.project_item_right}>
  <img src={avatar} alt='t' className={s.avatar} />
  
  </div>
  </div> 
  <div className={s.array_project_photo}>
 <p>
  { photos
  //  .sort(() => 0.5 - Math.random()).slice(0, 26)
  .map(photoUrl => <img src={photoUrl} alt='t' {...photoStyle}/> )}
</p>
</div>
</div> 

)}
