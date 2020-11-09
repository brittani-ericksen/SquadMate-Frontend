import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Skeleton from "@material-ui/lab/Skeleton";


const useStyles = makeStyles((theme) => ({
  paper: {
    padding: "6px 16px",
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
  content: {
    justifyContent: "flex-start",
    padding: theme.spacing(3),
    margin: "65px 0px",
  },
}));

const GhostLoad = props =>{
  const classes = useStyles();
  return(
  <main className={classes.content}>
      <Skeleton width={100} height={50} animation='wave'/>
      <Skeleton variant='rect' width={300} height={200} animation='wave'/>
      <Skeleton width={300} height={30} animation='wave'/>
      <Skeleton width={150} height={30} animation='wave'/>
      <Skeleton width={50} height={30} animation='wave'/>
    </main>
  );
};

export default GhostLoad;