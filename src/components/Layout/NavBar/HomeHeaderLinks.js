/*eslint-disable*/
import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Apps, CloudDownload, VpnKey } from "@material-ui/icons";

// core components
import CustomDropdown from "./assets/CustomDropdown";
import Button from "./assets/Button.js";

import styles from "./assets/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <CustomDropdown
                    left
                    caret={false}
                    hoverColor="black"
                    buttonText={
                      <>
                      <VpnKey className={classes.icons} /> 
                      <Button 
                        color="transparent"
                        className={classes.navLink}>
                        Get Started
                      </Button>
                      </>
                    }
                    buttonProps={{
                      className:
                        classes.navLink + " " + classes.imageDropdownButton,
                      color: "transparent"
                    }}
                    dropdownList={[
                      <Link to="/signup" className={classes.dropdownLink}>
                        Sign up
                      </Link>,
                      <Link to="/signin" className={classes.dropdownLink}>
                        Login
                      </Link>,
                    ]}
                  />
        
      </ListItem>
    </List>
  );
}
