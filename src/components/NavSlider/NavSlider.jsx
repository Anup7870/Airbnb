// import { Swiper, SwiperSlide } from 'swiper/react';
import './navSlider.scss'
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';
// import {  Navigation} from 'swiper/modules';
import {LuSettings2} from "react-icons/lu"
import Nanfilter from "../../JSON/Nanfilter.json"
const navSlider = () =>{
  return (
      <>
        <div className="filterCont">
          <div className="navFilter">

            <div className="navFilterItems">
              {
                Nanfilter&&Nanfilter.map((record)=>{
                  return(
                      <div className="icons" key={record.id}>
                        <img src={record.url} alt="logo"/>
                        <p>{record.name}</p>
                      </div>
                  )
                  })
              }
            </div>

          </div>
          <div className="filter">
            <LuSettings2/>
            <p>Filters</p>
          </div>
        </div>
        
      </>
        
  )
}

export  default navSlider;
