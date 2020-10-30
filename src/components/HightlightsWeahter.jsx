import React from "react";
import { Box, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  main: {
    boxSizing: "border-box",
    color: "white",
    backgroundColor: "#100E1D",
  },
  mainBoxes: {
    display: "flex",
    flexDirection: "column",
  },
  boxes: {
    backgroundColor: "#1E213A",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "200px",
    margin: "15px 0",
    justifyContent: "center",
    textAlign: "center",
  },
});

const HightlightsWeahter = () => {
  const styles = useStyles();
  return (
    <Box className={styles.main}>
      <Box component="p" fontSize="24px" p={3}>
        Today's HightLights
      </Box>
      <Box className={styles.mainBoxes} p={3}>
        <Box className={styles.boxes}>
          <Box component="span">Wind status</Box>
          <Box>
            <Box component="span" fontSize="64px">
              7
            </Box>
            <Box component="span" fontSize="36px">
              mph
            </Box>
            <Box component="p">algo de video</Box>
          </Box>
        </Box>
        <Box className={styles.boxes}>
          <Box component="span">Humidity</Box>
          <Box>
            <Box component="span" fontSize="64px">
              84
            </Box>
            <Box component="span" fontSize="36px">
              %
            </Box>
            <Box component="p">una barra progreso</Box>
          </Box>
        </Box>
        <Box className={styles.boxes}>
          <Box component="span">Visibility</Box>
          <Box>
            <Box component="span" fontSize="64px">
              6,4
            </Box>
            <Box component="span" fontSize="36px">
              miles
            </Box>
          </Box>
        </Box>
        <Box className={styles.boxes}>
          <Box component="span">Air Pressure</Box>
          <Box>
            <Box component="span" fontSize="64px">
              998
            </Box>
            <Box component="span" fontSize="36px">
              mb
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default HightlightsWeahter;
