import React from 'react'
import s from './SecondPage.module.css'
import SecondPageContainer from '../SecondPageContainer/SecondPageContainer'
import { projects } from '../../array/Projects/projects'




export default function SecondPage() {

  return (
    <div className={s.pic_array}>
   
   
  {
    projects
    .sort(() => 0.5 - Math.random()).slice(0, 26)
    .map((el) => <SecondPageContainer {...el} key={el.id} />)
  }
</div>  
    

  )
}