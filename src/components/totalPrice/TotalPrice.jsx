import React from "react";
import Switch from "@mui/material/Switch";
import "./totalPrice.scss"
import { sizing } from '@mui/system';

export default function TotalPrice() {
  const [checked, setChecked] = React.useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <>
      <div className='totalPrice'>
        <div className='wrapper'>
          <div className='info'>
            <h4>Daily total price</h4>
            <div className="line"></div>
            <p>Include all fees, before taxes</p>
          </div>
          <Switch
            sx={{height:50, width:60}}
            checked={checked}
            onChange={handleChange}
            inputProps={{ "aria-label": "controlled" }}
          />
        </div>
      </div>
    </>
  );
}
