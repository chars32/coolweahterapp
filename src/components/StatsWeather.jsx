import React from "react";
import { Box, makeStyles } from "@material-ui/core";
import FiveDaysWeather from "./FiveDaysWeather";

const useStyles = makeStyles({
  main: {
    backgroundColor: "#100E1D",
  },
});

const StatsWeather = () => {
  const styles = useStyles();
  return (
    <Box className={styles.main} height="100%">
      <FiveDaysWeather />
    </Box>
  );
};

export default StatsWeather;
