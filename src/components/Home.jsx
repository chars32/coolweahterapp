// React
import React, { useState, useEffect } from "react";
// MaterialUI
import { Box, makeStyles, useMediaQuery, useTheme } from "@material-ui/core";
// Components
import DailyWheater from "./DailyWheater";
import StatsWeather from "./StatsWeather";
// config
import config from "../config";

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
  const [currentData, setCurrentData] = useState();
  // Getting latitud and longitude
  navigator.geolocation.getCurrentPosition((position) => {
    setLatitude(position.coords.latitude);
    setLongitude(position.coords.longitude);
  });

  console.log(currentData);

  useEffect(() => {
    if (latitude && longitude) {
      const dataCurrent = async () => {
        const api_call = await fetch(
          // `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${config}&units=metric`
          "./.netlify/functions/currenForecast/"
        );
        if (api_call.ok) {
          const dataJson = await api_call.json();
          setCurrentData(dataJson);
        }
      };
      dataCurrent();
    }
  }, [latitude, longitude]);

  return (
    <Box height="100%" className={matches && styles.mainupmd}>
      {currentData && (
        <>
          <DailyWheater data={currentData.data} />
          <StatsWeather
            data={currentData.data}
            lat={latitude}
            lon={longitude}
          />
        </>
      )}
    </Box>
  );
};

export default Home;
