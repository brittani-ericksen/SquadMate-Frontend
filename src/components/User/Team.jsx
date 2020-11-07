import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

const Team = () => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image=""
          title="Contemplative Team"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            The Team
          </Typography>
          <Typography variant="body1" color="textSecondary" component="p">
            SquadMate Group
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share More
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
        <Button size="small" color="primary">
          Do More
        </Button>
      </CardActions>
    </Card>
  );
}
export default Team;