import React from "react";
//MaterialUI
import { Box } from "@material-ui/core";
//Components
import HeaderLocation from "../components/HeaderLocation";

const DailyWheater = () => {
  return (
    <Box height="100%" display="flex" flexDirection="column">
      <HeaderLocation />
    </Box>
  );
};

export default DailyWheater;
