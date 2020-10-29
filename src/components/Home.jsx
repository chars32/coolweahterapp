// React
import React, { useState } from "react";
// MaterialUI
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
// Components
import DailyWheater from "./DailyWheater";
import StatsWeather from "./StatsWeather";

const useStyles = makeStyles({
  home: {
    backgroundColor: "#1E213A",
  },
});

const Home = () => {
  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState();
  // Getting latitud and longitude
  navigator.geolocation.getCurrentPosition((position) => {
    setLatitude(position.coords.latitude);
    setLongitude(position.coords.longitude);
  });

  const styles = useStyles();

  return (
    <Box className={styles.home} height="100%">
      <DailyWheater lat={latitude} lon={longitude} />
      <StatsWeather />
    </Box>
  );
};

export default Home;
