import React from 'react'
import { projects } from '../../array/Projects/projects'
import ProjectItemContainer from '../ProjectItemContainer/ProjectItemContainer'
import { useParams } from 'react-router-dom'
import NotFoundPage from '../NotFoundPage/NotFoundPage'
import s from './ProjectItem.module.css'

export default function ProjectItem() {


  const {id} = useParams();


  //projects.map(p => console.log(p));
  console.log(projects.find(p => p.id == id));
const project =  projects.find(p => p.id == id);

  if (project) {
    
    return <div className={s.project_item_container}><ProjectItemContainer {...project} key={project.id} /> </div>
   
   } else {

   return <NotFoundPage />

   
    
  }
    

}
