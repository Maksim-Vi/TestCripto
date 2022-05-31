import React from "react";
import { InfoSloderData } from "../../utils/InfoSliderData";
import pulse from "../../../assetss/pulse.svg";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";

const InfoSlider = () => {
  const bitfinexPulse = () => {
    return (
      <Box className="bitfinex_pulse_container">
        <img className="bitfinex_pulse_img" src={pulse} alt="pulse" />
        <Typography variant="p" component="div" className="bitfinex_pulse_text">
          bitfinex Pulse |
        </Typography>
      </Box>
    );
  };

  return (
    <Box className="info_slider">
      {bitfinexPulse()}
      <Box className="info_items">
          <Box className="info_items_animation">
            {InfoSloderData.map((info,index) => {
                return (
                    <Box className="info_container" style={{animationDuration: `${InfoSloderData.length * 10 / 100}`}}>
                        <Typography variant="h3" component="div" className="info_name">
                            {info.name}
                        </Typography>
                        <Typography variant="p" component="div" className="info_text">
                            {info.text}
                        </Typography>
                        <Typography variant="p" component="div" className="line"> | </Typography>
                    </Box>
                );
            })}
          </Box>
      </Box>
    </Box>
  );
};

export default InfoSlider;
