import React from 'react'
import { useParams } from 'react-router-dom'
import { projects } from '../../array/Projects/projects';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import ArchitectureItemContainer from '../ArchitectureItemContainer/ArchitectureItemContainer';

export default function ArchitectureItem({p}) {


    const {id} = useParams();
    console.log(id);
    
    console.log(projects.find(p => p.id == id));
    const project =  projects.find(p => p.id == id);
      if (project) {
        console.log(project);
        return <ArchitectureItemContainer {...project} key={project.id} /> 
       } else {
    
       return <NotFoundPage />
      }
    }