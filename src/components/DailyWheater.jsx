import React from "react";
//MaterialUI
import { Box } from "@material-ui/core";
//Components
import HeaderLocation from "../components/HeaderLocation";
import ActualWheaterBox from "../components/ActualWheater";
// Data
import data from "../data.json";
//Actual Date
const now = new Date().toUTCString().split(" ", 3).join(" ");

const DailyWheater = ({ lat, lon }) => {
  console.log(lat, lon);
  return (
    <Box height="100%" display="flex" flexDirection="column">
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
