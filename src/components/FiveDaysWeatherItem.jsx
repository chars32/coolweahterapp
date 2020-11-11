import React from "react";
import { Box, makeStyles, useMediaQuery, useTheme } from "@material-ui/core";

const useStyles = makeStyles({
  boxWeather: {
    backgroundColor: "#1E213A",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "45%",
    margin: "10px 0",
    color: "#E7E7EB",
    flexDirection: "column",
    height: "33%",
  },
  boxWeatherUpMd: {
    backgroundColor: "#1E213A",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "17%",
    color: "#E7E7EB",
    flexDirection: "column",
    height: "85%",
    borderRadius: "10px",
  },
  boxTempWeather: {
    display: "flex",
    justifyContent: "space-evenly",
    width: "80%",
  },
});

const FiveDaysWeatherItem = ({ date, img, temp_max, temp_min }) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("lg"));

  const styles = useStyles();

  return (
    <Box className={`${matches ? styles.boxWeatherUpMd : styles.boxWeather}`}>
      <Box component="p">{date}</Box>
      <Box
        component="img"
        src={`http://openweathermap.org/img/wn/${img}@2x.png`}
        width={matches ? "55%" : "75%"}
      ></Box>
      <Box className={styles.boxTempWeather}>
        <Box component="span">
          {Math.round(temp_max)}c
          {/* {Math.round(arrayFinish[0][0].main.temp_max)}c */}
        </Box>
        <Box component="span">{Math.round(temp_min)}c</Box>
      </Box>
    </Box>
  );
};

export default FiveDaysWeatherItem;
