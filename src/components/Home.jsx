// React
import React, { useState, useEffect } from "react";
// MaterialUI
import { Box, makeStyles, useMediaQuery, useTheme } from "@material-ui/core";
// Components
import DailyWheater from "./DailyWheater";
import StatsWeather from "./StatsWeather";
// config
// import config from "../config";

const useStyle = makeStyles({
  mainupmd: {
    display: "flex",
  },
});

const Home = () => {
  //Styles
  const styles = useStyle();
  // Theme and Mediaquerys
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("lg"));

  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState();
  const [currentData, setCurrentData] = useState();
  // Getting latitud and longitude
  navigator.geolocation.getCurrentPosition((position) => {
    setLatitude(position.coords.latitude);
    setLongitude(position.coords.longitude);
  });

  useEffect(() => {
    if (latitude && longitude) {
      const dataCurrent = async () => {
        const api_call = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=eda9623bb098db98c4991dd3784b44a9&units=metric`
        );
        // const api_call = await fetch("./.netlify/functions/getCurrentData");
        const dataJson = await api_call.json();
        setCurrentData(dataJson);
      };
      dataCurrent();
    }
  }, [latitude, longitude]);

  console.log(process.env);

  return (
    <Box height="100%" className={matches && styles.mainupmd}>
      {currentData && (
        <>
          <DailyWheater data={currentData} />
          <StatsWeather data={currentData} lat={latitude} lon={longitude} />
        </>
      )}
    </Box>
  );
};

export default Home;
