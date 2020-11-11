import React, { useEffect, useState } from "react";
import { Box, makeStyles, useMediaQuery, useTheme } from "@material-ui/core";

import FiveDaysWeatherItem from "./FiveDaysWeatherItem";

// new function
const filterByDate = (dataList) => {
  const dataListHelper = [];
  const dataListFinalTotal = [];
  const dataListFinalOneValue = [];
  dataList.map((item) => dataListHelper.push(item.dt_txt.slice(0, 11)));
  const uniqueDataListValues = [...new Set(dataListHelper)];

  uniqueDataListValues.forEach((c) => {
    let helperArray = [];
    dataList.forEach((d) => {
      if (c === d.dt_txt.slice(0, 11)) {
        helperArray.push(d);
      }
    });
    dataListFinalTotal.push(helperArray);
  });
  dataListFinalTotal.forEach((oneArray) => {
    dataListFinalOneValue.push(oneArray[0]);
  });
  return dataListFinalOneValue;
};

const useStyles = makeStyles({
  main: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    boxSizing: "border-box",
    backgroundColor: "#100E1D",
  },
  boxWeatherMain: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    height: "80%",
    width: "70%",
  },
  //mediaquery
  mainupmd: {
    height: "30%",
  },
  boxWeatherMainUpMd: {
    display: "flex",
    justifyContent: "space-between",
    height: "80%",
    alignItems: "center",
    padding: "0 24px",
    width: "80%",
  },
});

const FiveDaysWeather = ({ lat, lon }) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("lg"));
  //Styles
  const styles = useStyles();

  const [fivedays, setFivedays] = useState();

  useEffect(() => {
    if (lat && lon) {
      const fivedaysCurrent = async () => {
        const api_call = await fetch(
          `./.netlify/functions/getFivedays?lat=${lat}&lon=${lon}`
        );
        const dataJson = await api_call.json();
        setFivedays(filterByDate(dataJson.data.list));
      };
      fivedaysCurrent();
    }
  }, [lat, lon]);

  return (
    <Box className={`${styles.main} ${matches && styles.mainupmd}`}>
      <Box
        className={`${
          matches ? styles.boxWeatherMainUpMd : styles.boxWeatherMain
        }`}
      >
        {fivedays &&
          fivedays.map((day) => (
            <FiveDaysWeatherItem
              date={day.dt_txt.slice(0, 11)}
              img={day.weather[0].icon}
              temp_max={day.main.temp_max}
              temp_min={day.main.temp_min}
            />
          ))}
      </Box>
    </Box>
  );
};

export default FiveDaysWeather;
