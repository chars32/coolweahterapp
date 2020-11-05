import React from "react";
import { Box, makeStyles, useMediaQuery, useTheme } from "@material-ui/core";

const useStyles = makeStyles({
  main: {
    boxSizing: "border-box",
    color: "white",
    backgroundColor: "#100E1D",
  },
  mainBoxes: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
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
    width: "85%",
  },
  // mediaquerys
  mainuplg: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    // boxSizing: "border-box",
    height: "70%",
    color: "white",
    backgroundColor: "#100E1D",
  },

  mainuplg_p: {
    width: "80%",
  },

  mainBoxesUpLg: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },

  boxesUpLg: {
    width: "45%",
  },
});

const HightlightsWeahter = ({
  windSpeed,
  humidty,
  visibility,
  airPreassure,
}) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("lg"));
  const styles = useStyles();
  return (
    <Box className={`${matches ? styles.mainuplg : styles.main}`}>
      <Box
        className={matches && styles.mainuplg_p}
        component="p"
        fontSize="24px"
        p={3}
      >
        Today's HightLights
      </Box>
      <Box className={matches ? styles.mainBoxesUpLg : styles.mainBoxes} p={3}>
        <Box className={`${styles.boxes} ${matches && styles.boxesUpLg}`}>
          <Box component="span">Wind status</Box>
          <Box>
            <Box component="span" fontSize="64px">
              {Math.round(windSpeed)}
            </Box>
            <Box component="span" fontSize="36px">
              km/h
            </Box>
            <Box component="p">algo de video</Box>
          </Box>
        </Box>
        <Box className={`${styles.boxes} ${matches && styles.boxesUpLg}`}>
          <Box component="span">Humidity</Box>
          <Box>
            <Box component="span" fontSize="64px">
              {humidty}
            </Box>
            <Box component="span" fontSize="36px">
              %
            </Box>
            <Box component="p">una barra progreso</Box>
          </Box>
        </Box>
        <Box className={`${styles.boxes} ${matches && styles.boxesUpLg}`}>
          <Box component="span">Visibility</Box>
          <Box>
            <Box component="span" fontSize="64px">
              {Math.round(visibility / 1000)}
            </Box>
            <Box component="span" fontSize="36px">
              kms
            </Box>
          </Box>
        </Box>
        <Box className={`${styles.boxes} ${matches && styles.boxesUpLg}`}>
          <Box component="span">Air Pressure</Box>
          <Box>
            <Box component="span" fontSize="64px">
              {airPreassure}
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
