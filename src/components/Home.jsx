// React
import React, { useState } from "react";
// MaterialUI
import { Box } from "@material-ui/core";
// Components
import DailyWheater from "./DailyWheater";
import StatsWeather from "./StatsWeather";

const Home = () => {
  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState();
  // Getting latitud and longitude
  navigator.geolocation.getCurrentPosition((position) => {
    setLatitude(position.coords.latitude);
    setLongitude(position.coords.longitude);
  });

  return (
    <Box height="100%">
      <DailyWheater lat={latitude} lon={longitude} />
      <StatsWeather />
    </Box>
  );
};

export default Home;
