// React
import React from "react";
// MaterialUI
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
// Components
import DailyWheater from "./DailyWheater";

const useStyles = makeStyles({
  home: {
    backgroundColor: "#1E213A",
  },
});

const Home = () => {
  const styles = useStyles();

  return (
    <Box className={styles.home} height="100%">
      <DailyWheater />
    </Box>
  );
};

export default Home;
