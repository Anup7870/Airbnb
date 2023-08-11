import "./navSlider.scss";
import { useContext, useState } from "react";
import Context from "../../context api/context.js";
import { LuSettings2 } from "react-icons/lu";
import Nanfilter from "../../JSON/Nanfilter.json";

const navSlider = () => {
  const a = useContext(Context);
  console.log(a);
  return (
    <>
      <div className='filterCont'>
        <div className='navFilter'>
          <div className='navFilterItems'>
            {Nanfilter &&
              Nanfilter.map((record) => {
                return (
                  <div
                    className='icons'
                    key={record.id}
                    onClick={() => {
                      a.SetGlobal({ ...a.global, filterAct: record.id });
                      cosole.log(a.global);
                    }}>
                    <img src={record.url} alt='logo' />
                    <p>{record.name}</p>
                  </div>
                );
              })}
          </div>
        </div>

        <div
          className='filter'
          onClick={() => {
            a.SetGlobal({ ...a.global, filter: true });
          }}>
          <LuSettings2 />
          <p>Filters</p>
        </div>
      </div>
    </>
  );
};

export default navSlider;
