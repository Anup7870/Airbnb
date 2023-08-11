import React, { useRef, useState } from "react";
import "./cardCont.scss";
import AirbndData from "../../JSON/HomeData.json";
import Card from "./Card";

export default function CardCont() {

  return (
    <>
      <div className='cardCont'>
        <div className='cardContWrapper'>
          <Card data={AirbndData} />
        </div>
      </div>
    </>
  );
}
