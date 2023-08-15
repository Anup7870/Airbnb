import React,{useContext,useState} from 'react'
import Swipers from "./Swiper.jsx";
import StarIcon from '@mui/icons-material/Star';
import { Swiper, SwiperSlide } from "swiper/react";
import "./cardCont.scss";
import Context from "../../context api/context.js";
import HomeData from "../../JSON/HomeData.json";
export default function Card(data) {
  const [current, setCurrent] = useState(1);
  let a = useContext(Context);
  let op = HomeData.filter((record)=>record.id === parseInt(a.global.filterAct));
  // console.log(op[a.global.filterAct-1]);
  console.log(op)
  let datas = op[0];
  return (
    <>
      {
            // eslint-disable-next-line react/jsx-no-comment-textnodes
            datas && datas.info.map((record) => {
              console.log(record);
              return (
                <div className='card' key={record.id}>
                  <div className='cardImage'>
                    <Swipers images={record.imges}/>
                  </div>
                  <div className='cardInfo'>
                    <div className='cardInfoWrapper'>
                      <div className='adders'>
                        <p className='heading'>{record.card.address}</p>
                        <lable>
                          <StarIcon fontSize='small' />
                          {record.card.rating}
                        </lable>
                      </div>
                      <div className='info'>
                        <p className='txt'>{record.card.info}</p>
                        <p className='date'>{record.card.date}</p>
                      </div>
                      <div className='price'>&#8377;{record?.card.price}</div>
                    </div>
                  </div>
                </div>
              );
              })


          }
    </>
  )
}
