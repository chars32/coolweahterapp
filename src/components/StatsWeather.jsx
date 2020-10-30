import React from "react";
import { Box, makeStyles } from "@material-ui/core";
import FiveDaysWeather from "./FiveDaysWeather";
import HightlightsWeahter from "./HightlightsWeahter";

const StatsWeather = () => {
  return (
    <Box>
      <FiveDaysWeather />
      <HightlightsWeahter />
    </Box>
  );
};

export default StatsWeather;
