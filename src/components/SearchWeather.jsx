import React from "react";

import { Box, Button, InputBase, makeStyles } from "@material-ui/core";
import CancelIcon from "@material-ui/icons/Cancel";

const useStyles = makeStyles((theme) => ({
  mainSearchBox: {
    backgroundColor: "#1E213A",
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  mainSearchBoxOff: {
    transitionTimingFunction: "ease-in",
    transition: "0.8s",
    transform: "translateX(-100%)",
  },
  mainSearchBoxShow: {
    transform: "translateX(0)",
    transitionTimingFunction: "ease-out",
    transition: "0.8s",
  },
  mainCloseSearchBox: {
    height: "10%",
    padding: "0 3%",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  crossIcon: { color: "white", fontSize: "32px" },
  mainFormSearch: {
    height: "7%",
    display: "flex",
    justifyContent: "space-between",
    padding: "0 3%",
  },
  formButton: {
    color: "white",
    backgroundColor: "#3C47E9",
    width: "26%",
  },
  textField: {
    border: "1px solid #E7E7EB",
    color: "white",
    padding: "2%",
    width: "72%",
    borderRadius: theme.shape.borderRadius,
  },
  inputProps: {
    color: "white",
    fontSize: "20px",
  },
}));

const SearchWeather = ({ showContainer, clickSearch }) => {
  const styles = useStyles();
  return (
    <Box
      className={`${styles.mainSearchBox} ${
        showContainer ? styles.mainSearchBoxShow : styles.mainSearchBoxOff
      }`}
    >
      <Box className={styles.mainCloseSearchBox}>
        <CancelIcon
          className={styles.crossIcon}
          onClick={clickSearch}
        ></CancelIcon>
      </Box>
      <Box className={styles.mainFormSearch}>
        <InputBase
          className={`${styles.textField} ${styles.inputProps}`}
          id="City"
          variant="outlined"
          label="Outlined"
        />
        <Box component={Button} className={styles.formButton}>
          Search
        </Box>
      </Box>
    </Box>
  );
};

export default SearchWeather;
