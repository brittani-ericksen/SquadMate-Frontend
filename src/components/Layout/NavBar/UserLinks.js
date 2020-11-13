/*eslint-disable*/
import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
import Avatar from 'react-avatar';
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

import { useHistory } from 'react-router-dom';

const useStyles = makeStyles(styles);

export default function UserLinks(props) {
  const { user, setUser, setIsLoggedIn } = props;
  const history = useHistory();

  const _handleClick = () => {
    setIsLoggedIn(false);
    setUser('');
    history.push('/');
  } 

  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="Links"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={Apps}
          dropdownList={[
            <Link to="/user/team" className={classes.dropdownLink}>
              Team
            </Link>,
            <Link to="/user/info" className={classes.dropdownLink}>
            Documents & Info
          </Link>
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
                  <CustomDropdown
                    left
                    caret={false}
                    hoverColor="black"
                    buttonText={
                      <Avatar
                      src={user.avatarUrl} 
                      name={user.firstName + ' ' + user.lastName}
                      size="45" 
                      round /> 
                      
                    }
                    buttonProps={{
                      className:
                        classes.navLink + " " + classes.imageDropdownButton,
                      color: "transparent"
                    }}
                    dropdownList={[
                      <Link to="/user/profile" className={classes.dropdownLink}>
                        My Profile
                      </Link>,
                      <Button 
                        onClick={() => _handleClick()}>
                          Log Out
                        </Button>,
                    ]}
                  />
                </ListItem>
    </List>
  );
}
