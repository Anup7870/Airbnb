import React from 'react'
import Swipers from "./Swiper.jsx";
import StarIcon from '@mui/icons-material/Star';
import { Swiper, SwiperSlide } from "swiper/react";
import "./cardCont.scss";
export default function Card(data) {

  return (
    <>
      {
            // eslint-disable-next-line react/jsx-no-comment-textnodes
            data && data.data.map((record) => {
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
                      <div className='price'>&#8377;{record.card.price}</div>
                    </div>
                  </div>
                </div>
              );
              })


          }
    </>
  )
}
