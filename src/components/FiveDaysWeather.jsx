import React from "react";
import { Box, makeStyles } from "@material-ui/core";

import clear from "../assets/img/Clear.png";

const useStyles = makeStyles({
  main: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
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
    width: "120px",
    height: "177px",
    color: "#E7E7EB",
    flexDirection: "column",
  },
  boxTempWeather: {
    display: "flex",
    justifyContent: "space-evenly",
    width: "80%",
  },
});

const FiveDaysWeather = () => {
  const styles = useStyles();
  return (
    <Box className={styles.main}>
      <Box className={styles.boxWeatherMain}>
        <Box className={styles.boxWeather}>
          <Box component="p">Tomorrow</Box>
          <Box component="img" src={clear} width="50%"></Box>
          <Box className={styles.boxTempWeather}>
            <Box component="span">16c</Box>
            <Box component="span">11c</Box>
          </Box>
        </Box>
        <Box className={styles.boxWeather}>
          <Box component="p">Tomorrow</Box>
          <Box component="img" src={clear} width="50%"></Box>
          <Box className={styles.boxTempWeather}>
            <Box component="span">16c</Box>
            <Box component="span">11c</Box>
          </Box>
        </Box>
        <Box className={styles.boxWeather}>
          <Box component="p">Tomorrow</Box>
          <Box component="img" src={clear} width="50%"></Box>
          <Box className={styles.boxTempWeather}>
            <Box component="span">16c</Box>
            <Box component="span">11c</Box>
          </Box>
        </Box>
        <Box className={styles.boxWeather}>
          <Box component="p">Tomorrow</Box>
          <Box component="img" src={clear} width="50%"></Box>
          <Box className={styles.boxTempWeather}>
            <Box component="span">16c</Box>
            <Box component="span">11c</Box>
          </Box>
        </Box>
        <Box className={styles.boxWeather}>
          <Box component="p">Tomorrow</Box>
          <Box component="img" src={clear} width="50%"></Box>
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
