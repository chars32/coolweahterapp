import React from "react";
//MaterialUI
import { Box, makeStyles, useMediaQuery, useTheme } from "@material-ui/core";
//Components
import HeaderLocation from "../components/HeaderLocation";
import ActualWheaterBox from "../components/ActualWheater";
// Data
import data from "../data.json";

const useStyles = makeStyles({
  main: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#1E213A",
  },
  mainupmd: {
    width: "35%",
  },
});

//Actual Date
const now = new Date().toUTCString().split(" ", 3).join(" ");

const DailyWheater = ({ lat, lon }) => {
  const styles = useStyles();
  console.log(lat, lon);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("lg"));
  return (
    <Box className={`${styles.main} ${matches && styles.mainupmd}`}>
      <HeaderLocation />
      <ActualWheaterBox
        name={data.name}
        actualweather={data.weather[0].main}
        actualdate={now}
        iconweather={data.weather[0].icon}
        temperature={data.main.temp}
      />
    </Box>
  );
};

export default DailyWheater;
