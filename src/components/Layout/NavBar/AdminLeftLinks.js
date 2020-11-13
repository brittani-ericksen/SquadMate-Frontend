/*eslint-disable*/
import React from "react";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
import { useHistory } from 'react-router-dom';
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import styles from "./assets/headerLinksStyle.js";
import "./Logo.css";



const useStyles = makeStyles(styles);

export default function AdminLeftLinks(props) {
  const { user, setUser, setIsLoggedIn } = props;
  const history = useHistory();


  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
      <Link to="/admin">
      <img className="head-logo" src="squadmatelogo.png" />
      </Link>
      </ListItem>
    </List>
  );
}
