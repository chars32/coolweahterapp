import React from "react";

import { Box, makeStyles } from "@material-ui/core";
import MyLocationIcon from "@material-ui/icons/MyLocation";

const useStyles = makeStyles({
  buttonSearch: {
    backgroundColor: "#848484",
    color: "white",
    padding: "10px",
    width: "40%",
    textAlign: "center",
    cursor: "pointer",
    fontSize: "16px",
  },
  buttonLocation: {
    backgroundColor: "#848484",
    borderRadius: "50%",
    color: "white",
    padding: "10px",
    cursor: "pointer",
  },
});

const HeaderLocation = () => {
  const styles = useStyles();
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      p={2}
      height="5%"
    >
      <Box className={styles.buttonSearch} variant="contained">
        Search for places
      </Box>
      <MyLocationIcon className={styles.buttonLocation} />
    </Box>
  );
};

export default HeaderLocation;
