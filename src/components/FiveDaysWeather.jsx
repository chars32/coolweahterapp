import React from "react";
import { Box, makeStyles, useMediaQuery, useTheme } from "@material-ui/core";

import clear from "../assets/img/Clear.png";

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
            src={clear}
            width={matches ? "55%" : "150px"}
          ></Box>
          <Box className={styles.boxTempWeather}>
            <Box component="span">16c</Box>
            <Box component="span">11c</Box>
          </Box>
        </Box>
        <Box
          className={`${matches ? styles.boxWeatherUpMd : styles.boxWeather}`}
        >
          <Box component="p">Tomorrow</Box>
          <Box
            component="img"
            src={clear}
            width={matches ? "55%" : "150px"}
          ></Box>
          <Box className={styles.boxTempWeather}>
            <Box component="span">16c</Box>
            <Box component="span">11c</Box>
          </Box>
        </Box>
        <Box
          className={`${matches ? styles.boxWeatherUpMd : styles.boxWeather}`}
        >
          <Box component="p">Tomorrow</Box>
          <Box
            component="img"
            src={clear}
            width={matches ? "55%" : "150px"}
          ></Box>
          <Box className={styles.boxTempWeather}>
            <Box component="span">16c</Box>
            <Box component="span">11c</Box>
          </Box>
        </Box>
        <Box
          className={`${matches ? styles.boxWeatherUpMd : styles.boxWeather}`}
        >
          <Box component="p">Tomorrow</Box>
          <Box
            component="img"
            src={clear}
            width={matches ? "55%" : "150px"}
          ></Box>
          <Box className={styles.boxTempWeather}>
            <Box component="span">16c</Box>
            <Box component="span">11c</Box>
          </Box>
        </Box>
        <Box
          className={`${matches ? styles.boxWeatherUpMd : styles.boxWeather}`}
        >
          <Box component="p">Tomorrow</Box>
          <Box
            component="img"
            src={clear}
            width={matches ? "55%" : "150px"}
          ></Box>
          <Box className={styles.boxTempWeather}>
            <Box component="span">16c</Box>
            <Box component="span">11c</Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default FiveDaysWeather;
