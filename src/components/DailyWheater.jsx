import React, { useState } from "react";
//MaterialUI
import { Box, makeStyles, useMediaQuery, useTheme } from "@material-ui/core";
//Components
import HeaderLocation from "../components/HeaderLocation";
import ActualWheaterBox from "../components/ActualWheater";
import SearchWeather from "./SearchWeather";
// Data
// import data from "../data.json";

const useStyles = makeStyles({
  main: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#1E213A",
    position: "relative",
  },
  mainupmd: {
    width: "35%",
  },
});

//Actual Date
const now = new Date().toUTCString().split(" ", 3).join(" ");

const DailyWheater = ({ data }) => {
  const [searchShow, setSearchShow] = useState(false);

  const searchClick = () => {
    setSearchShow(!searchShow);
  };

  const styles = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("lg"));
  return (
    <Box className={`${styles.main} ${matches && styles.mainupmd}`}>
      <SearchWeather showContainer={searchShow} clickSearch={searchClick} />
      <HeaderLocation clickSearch={searchClick} />
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
