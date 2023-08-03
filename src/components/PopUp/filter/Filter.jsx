import "./filter.scss";
import Context from "../../../context api/context";
import { useContext } from "react";
import { RxCross2 } from "react-icons/rx";
import PriceSlider from "../PriceSlider";
import RoomsBed from "../roomsBed/RoomsBed";
import ApartmentOutlinedIcon from '@mui/icons-material/ApartmentOutlined';
import {HiOutlineHome} from 'react-icons/hi'
import {LiaHouseDamageSolid} from 'react-icons/lia'
import {LiaHotelSolid} from 'react-icons/lia'
import {RiHotelLine} from 'react-icons/ri'
const filter = (onCLose) => {
  const a = useContext(Context);
  return (
    <>
      <div className='popcardCont'>
        <div className='popcard'>
          <div className='popCardWrapper'>
            <header className='headerPop'>
              <div className='headerPopcont'>
                <button
                  onClick={() => a.SetGlobal({ ...a.global, filter: false })}>
                  <RxCross2 />
                </button>
                <p>Filter</p>
              </div>
            </header>

            <section className='filterMain'>
              <form action=''>
                <div className='priceRange'>
                  <div className='info'>
                    <h2>Price Range</h2>
                    <p>
                      The average nightly price is <span>&#8377;</span>12,233
                    </p>
                    <div className='price'>
                      <PriceSlider />
                      <div className='priceRangeForm'>
                        <div className='input'>
                          <p>min price</p>
                          <input type='text' value='&#8377;820' />
                        </div>
                        <span className='line'></span>
                        <div className='input'>
                          <p>max-price</p>
                          <input type='text' value='&#8377;1900+' />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className='line between'></div>
                  <div className='type'>
                    <h2 className='padding'>Type of place</h2>
                    <div className='inputChecks'>
                      <div className='inputcheck'>
                        <input type='checkbox' />
                        <div className='info'>
                          <p className='heading'>Entire place</p>
                          <p>A palce all to yourself</p>
                        </div>
                      </div>
                      <div className='inputcheck'>
                        <input type='checkbox' />
                        <div className='info'>
                          <p className='heading'>Room</p>
                          <p>Your own room, plus acess to shard palce</p>
                        </div>
                      </div>
                      <div className='inputcheck'>
                        <input type='checkbox' />
                        <div className='info'>
                          <p className='heading'> Shared room</p>
                          <p>
                            A sleeping space and common areas that may be shared
                            with others
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className='line between margin'></div>
                  <div className='property'>
                    <h2>Room and beds</h2>
                    <section className='propertyFilter'>
                      <div className='opt1'>
                        <span>Bedrooms</span>
                        <div className='opt'>
                          <div className='show'>Any</div>
                          <RoomsBed />
                        </div>
                      </div>
                      <div className='opt2'>
                        <span>Beds</span>
                        <div className='opt'>
                          <div className='show'>Any</div>
                          <RoomsBed />
                        </div>
                      </div>
                      <div className='opt2'>
                        <span>Bathrooms</span>
                        <div className='opt'>
                          <div className='show'>Any</div>
                          <RoomsBed />
                        </div>
                      </div>
                    </section>
                  </div>

                  <div className='line between margin'></div>
                  <div className="type">
                    <h2>Property type</h2>
                    <div className="types">
                      <div className="box">
                        <HiOutlineHome size={50}/>
                        <p>House</p>
                      </div>
                      <div className="box">
                        <RiHotelLine size={50}/>
                        <p>House</p>
                      </div>
                      <div className="box">
                        
                        <LiaHouseDamageSolid size={50}/>
                        <p>House</p>
                      </div>
                      <div className="box">
                        <LiaHotelSolid size={50}/>
                        <p>House</p>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </section>
            <div className='footer'>
              <p>Clear all</p>
              <button>Show all stays</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default filter;
