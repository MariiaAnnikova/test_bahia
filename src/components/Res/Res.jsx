import React from 'react'
import { res } from '../../array/Res/res'
import ResearchContainer from '../ResearchContainer/ResearchContainer'
import s from './Res.module.css'


export default function Res() {
  return (
    <div className={s.res_grid}>
         
  {
    res
    .sort(() => 0.5 - Math.random()).slice(0, 13)
    .map((el) => <ResearchContainer {...el} key={el.id} />)
  }
</div> 
    
  )
}
