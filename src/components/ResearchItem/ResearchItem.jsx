import React from 'react'
import { res } from "../../array/Res/res"
import ResearchItemContainer from '../ResearchItemContainer/ResearchItemContainer'
import { useParams  } from 'react-router-dom'
import NotFoundPage from '../NotFoundPage/NotFoundPage'
import s from './ResearchItem.module.css'

export default function ResearchItem() {

const { id } = useParams();

console.log(res.find(resch => resch.id == id));
const research = res.find(resch => resch.id == id);
 if (research) {
    return <div className={s.res_item_conteiner}><ResearchItemContainer {...research} key={research.id} /> </div>
 } else {
    return <NotFoundPage />
 }

}
