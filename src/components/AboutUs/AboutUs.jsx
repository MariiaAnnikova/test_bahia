import React from 'react'
import  us  from '../../Css/us.jpg'
import s from './AboutUs.module.css'
import { EnvironmentOutlined } from '@ant-design/icons'
import { PhoneOutlined } from '@ant-design/icons'
import { MailOutlined} from '@ant-design/icons'
import { InstagramOutlined } from '@ant-design/icons'

export default function AboutUs() {
  
  return (
    
   <div className={s.us_block}>
      <div className={s.photo_us}>
      <img src={ us } alt='us'/>
      </div>

      <div className={s.us_info}>
      <div className={s.us_up}>
      <p>AtelierBahia is an architecture and research practice founded by Matheus Cartocci and Gloria CotaVisedo.
      Matheus Cartocci has obtained a PhD in architecture history and theory at Politecnico di Torino and investigates the relations between the built and written narration in the discipline.
       Gloria Cota Visedo obtained a double degree in architecture and Fine Arts in Madrid and has obtained a master in floral spatial composition. 
      Together, in the green hills of the Ligurian Appennino, among oak and beech tree forests, they carry out historical renovations, architecture and research projects.</p>
      </div>

      <div className={s.us_down}>
      <p>AtelierBahia è uno studio di progettazione e ricerca architettonica fondato da Matheus Cartocci e Gloria Cota Visedo. Matheus Cartocci ha conseguito un dottorato di ricerca presso il Politecnico di Torino e investiga le tensioni tra architettura costruita e architettura scritta. 
      Gloria Cota è architetta e laureata in Belle Arti, ed ha conseguito un master in composizione spaziale floreale. Insieme, nelle colline dell’Appennino Ligure, tra i faggi e le querce, portano avanti progetti di architettura, restauro e ricerca critica.</p>
      </div>
         


      </div>
    <div className={s.contact_block}> 
  <h3>Contacts:</h3>
  
  
  <div className={s.info_icons_phone}>
    <PhoneOutlined className={s.info_icons}/> 
       <p className={s.ph_buddha}>Tel. number: +39 3394530633. </p>
       
  </div>
  <p><InstagramOutlined className={s.info_icons}/>  <a href='https://www.instagram.com/atelier.bahia/'> https://www.instagram.com/atelier.bahia/</a></p>
  <p><MailOutlined  className={s.info_icons}/> <a href="mailto:info@atelierbahia.com">info@atelierbahia.com</a></p>
  <div className={s.us_map}>
    <div><EnvironmentOutlined className={s.info_icons}/> <a href='https://www.google.com/maps/place/Atelier+BAHIA/@44.6764924,9.0173399,6569m/data=!3m1!1e3!4m10!1m2!2m1!1svia+IV+novembre+Cabella+ligure!3m6!1s0x478757d65d254601:0x80e718c3092cba4!8m2!3d44.6764924!4d9.0935576!15sCh52aWEgSVYgbm92ZW1icmUgQ2FiZWxsYSBsaWd1cmWSAQlhcmNoaXRlY3TgAQA!16s%2Fg%2F11h0mdnsnt?authuser=0'>Italy (AL) Cabella Ligure, Via IV Novembre 28, 15060 </a></div>
  
    <div className={s.us_google_map}>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28607.54554730548!2d9.01733994863281!3d44.6764924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478757d65d254601%3A0x80e718c3092cba4!2sAtelier%20BAHIA!5e1!3m2!1sen!2sit!4v1684498732956!5m2!1sen!2sit" 
    width="450" 
    height="250" 
    style={{border:'0'}} 
    allowFullScreen="" 
    loading="lazy" 
    referrerPolicy="no-referrer-when-downgrade">

    </iframe>
    </div>
    </div>
    
     </div> 
     </div> 
      
  )
}
