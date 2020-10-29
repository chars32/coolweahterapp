import React from "react";
//MaterialUI
import { Box, makeStyles } from "@material-ui/core";
//Icon
import LocationOnIcon from "@material-ui/icons/LocationOn";

const useStyles = makeStyles({
  spanDate: {
    backgroundColor: "#88869D",
  },
});

const ActualWheaterBox = ({
  name,
  actualweather,
  actualdate,
  iconweather,
  temperature,
}) => {
  const styles = useStyles();
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height="95%"
    >
      <Box
        component="figure"
        width="100%"
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="150px"
      >
        <Box
          component="img"
          src={`http://openweathermap.org/img/wn/${iconweather}@2x.png`}
          maxWidth="200px"
          height="180px"
        ></Box>
      </Box>
      <Box
        color="#E7E7EB"
        component="p"
        height="169px"
        fontStyle="normal"
        fontWeight="500"
        fontSize="144px"
        lineHeight="169px"
        flexGrow="0.05"
        display="flex"
        alignItems="center"
      >
        {Math.round(temperature)}
        <Box
          component="span"
          width="10px"
          height="10px"
          border="3px solid #E7E7EB"
          borderRadius="50px"
        ></Box>
        c
      </Box>
      <Box
        color="#A09FB1"
        component="p"
        fontStyle="normal"
        fontWeight="500"
        fontSize="42px"
        lineHeight="42px"
        flexGrow="0.3"
        display="flex"
        alignItems="center"
      >
        {actualweather}
      </Box>
      <Box
        fontSize="20px"
        color="#88869D"
        display="flex"
        justifyContent="center"
        alignItems="center"
        width="100%"
        flexGrow="0.05"
      >
        <Box component="p">Today </Box>
        <Box
          className={styles.spanDate}
          component="span"
          width="3px"
          height="3px"
          borderRadius="50px"
          ml={2}
          mr={2}
        ></Box>
        <Box component="p">{actualdate}</Box>
      </Box>
      <Box
        fontSize="18px"
        fontWeight="600"
        fontStyle="normal"
        lineHeight="21px"
        color="#88869D"
        display="flex"
        justifyContent="center"
        alignItems="center"
        width="50%"
        flexGrow="0.05"
      >
        <LocationOnIcon />
        <Box component="span" m={1}>
          {name}
        </Box>
      </Box>
    </Box>
  );
};

export default ActualWheaterBox;
