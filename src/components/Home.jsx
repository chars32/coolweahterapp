// React
import React, { useState } from "react";
// MaterialUI
import { Box, makeStyles, useMediaQuery, useTheme } from "@material-ui/core";
// Components
import DailyWheater from "./DailyWheater";
import StatsWeather from "./StatsWeather";

const useStyle = makeStyles({
  mainupmd: {
    display: "flex",
  },
});

const Home = () => {
  //Styles
  const styles = useStyle();
  // Theme and Mediaquery
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("lg"));

  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState();
  // Getting latitud and longitude
  navigator.geolocation.getCurrentPosition((position) => {
    setLatitude(position.coords.latitude);
    setLongitude(position.coords.longitude);
  });

  return (
    <Box height="100%" className={matches && styles.mainupmd}>
      <DailyWheater lat={latitude} lon={longitude} />
      <StatsWeather />
    </Box>
  );
};

export default Home;
