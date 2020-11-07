import React from "react";
import { Box, makeStyles, useMediaQuery, useTheme } from "@material-ui/core";

import datfivedays from "../dataDays.json";

const mainData = datfivedays.list; // esta data esta hardocdeada
const arrayFinish = [];

const getDateForecast = (data) => {
  // Variables de apoyo
  const dataDatesForecast = [];

  // Mapear para obtner valores y luego pusheamos los valores a dataDatesForecast sin que se repitan
  data.map((item) => dataDatesForecast.push(item.dt_txt.slice(0, 11)));
  const uniqueDates = [...new Set(dataDatesForecast)];

  // Comparamos cada valor de los uniqueDates con el valor sliceado dt.txt de mainData
  uniqueDates.forEach((c) => {
    let helperArray = [];
    mainData.forEach((d) => {
      if (c === d.dt_txt.slice(0, 11)) {
        helperArray.push(d);
      }
    });
    arrayFinish.push(helperArray);
  });
};

getDateForecast(mainData);

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
  boxTempWeather: {
    display: "flex",
    justifyContent: "space-evenly",
    width: "80%",
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
});

const FiveDaysWeather = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("lg"));
  //Styles
  const styles = useStyles();

  return (
    <Box className={`${styles.main} ${matches && styles.mainupmd}`}>
      <Box
        className={`${
          matches ? styles.boxWeatherMainUpMd : styles.boxWeatherMain
        }`}
      >
        <Box
          className={`${matches ? styles.boxWeatherUpMd : styles.boxWeather}`}
        >
          <Box component="p">Tomorrow</Box>
          <Box
            component="img"
            src={`http://openweathermap.org/img/wn/${arrayFinish[0][0].weather[0].icon}@2x.png`}
            width={matches ? "55%" : "75%"}
          ></Box>
          <Box className={styles.boxTempWeather}>
            <Box component="span">
              {Math.round(arrayFinish[0][0].main.temp_max)}c
            </Box>
            <Box component="span">
              {Math.round(arrayFinish[0][1].main.temp_max)}c
            </Box>
          </Box>
        </Box>
        <Box
          className={`${matches ? styles.boxWeatherUpMd : styles.boxWeather}`}
        >
          <Box component="p">{arrayFinish[1][0].dt_txt.slice(0, 11)}</Box>
          <Box
            component="img"
            src={`http://openweathermap.org/img/wn/${arrayFinish[1][0].weather[0].icon}@2x.png`}
            width={matches ? "55%" : "75%"}
          ></Box>
          <Box className={styles.boxTempWeather}>
            <Box component="span">
              {Math.round(arrayFinish[1][0].main.temp_max)}c
            </Box>
            <Box component="span">
              {Math.round(arrayFinish[1][1].main.temp_max)}c
            </Box>
          </Box>
        </Box>
        <Box
          className={`${matches ? styles.boxWeatherUpMd : styles.boxWeather}`}
        >
          <Box component="p">{arrayFinish[2][0].dt_txt.slice(0, 11)}</Box>
          <Box
            component="img"
            src={`http://openweathermap.org/img/wn/${arrayFinish[2][0].weather[0].icon}@2x.png`}
            width={matches ? "55%" : "75%"}
          ></Box>
          <Box className={styles.boxTempWeather}>
            <Box component="span">
              {Math.round(arrayFinish[2][0].main.temp_max)}c
            </Box>
            <Box component="span">
              {Math.round(arrayFinish[2][1].main.temp_max)}c
            </Box>
          </Box>
        </Box>
        <Box
          className={`${matches ? styles.boxWeatherUpMd : styles.boxWeather}`}
        >
          <Box component="p">{arrayFinish[3][0].dt_txt.slice(0, 11)}</Box>
          <Box
            component="img"
            src={`http://openweathermap.org/img/wn/${arrayFinish[3][0].weather[0].icon}@2x.png`}
            width={matches ? "55%" : "75%"}
          ></Box>
          <Box className={styles.boxTempWeather}>
            <Box component="span">
              {Math.round(arrayFinish[3][0].main.temp_max)}c
            </Box>
            <Box component="span">
              {Math.round(arrayFinish[3][1].main.temp_max)}c
            </Box>
          </Box>
        </Box>
        <Box
          className={`${matches ? styles.boxWeatherUpMd : styles.boxWeather}`}
        >
          <Box component="p">{arrayFinish[4][0].dt_txt.slice(0, 11)}</Box>
          <Box
            component="img"
            src={`http://openweathermap.org/img/wn/${arrayFinish[4][0].weather[0].icon}@2x.png`}
            width={matches ? "55%" : "75%"}
          ></Box>
          <Box className={styles.boxTempWeather}>
            <Box component="span">
              {Math.round(arrayFinish[4][0].main.temp_max)}c
            </Box>
            <Box component="span">
              {Math.round(arrayFinish[4][1].main.temp_max)}c
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default FiveDaysWeather;
