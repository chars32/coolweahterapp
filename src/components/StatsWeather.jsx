import React from "react";
import { Box, makeStyles, useMediaQuery, useTheme } from "@material-ui/core";
import FiveDaysWeather from "./FiveDaysWeather";
import HightlightsWeahter from "./HightlightsWeahter";

const useStyles = makeStyles({
  mainupmd: {
    display: "flex",
    flexDirection: "column",
    width: "65%",
  },
});

const StatsWeather = () => {
  const styles = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("lg"));
  return (
    <Box className={matches && styles.mainupmd}>
      <FiveDaysWeather />
      <HightlightsWeahter />
    </Box>
  );
};

export default StatsWeather;
