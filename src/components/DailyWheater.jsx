import React from "react";
//MaterialUI
import { Box, makeStyles } from "@material-ui/core";
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
});

const DailyWheater = ({ lat, lon }) => {
  const styles = useStyles();
  console.log(lat, lon);
  //Actual Date
  const now = new Date().toUTCString().split(" ", 3).join(" ");
  return (
    <Box className={styles.main}>
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
