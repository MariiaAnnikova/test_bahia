import React from 'react'
import ArchitectureContainer from '../ArchitectureContainer/ArchitectureContainer';
import s from './Architecture.module.css'
import { architecture } from '../../array/Architecture/architecture';

export default function Architecture() {


  return (
    
    <div className={s.arch_pic_array}>
   
   
  {
    architecture
    .sort(() => 0.5 - Math.random()).slice(0, 13)
    .map((el) => <ArchitectureContainer {...el} key={el.id} />)
  }
</div>  
    
  )
}






