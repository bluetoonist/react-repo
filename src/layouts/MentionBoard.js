import React,{Fragment} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import {makeStyles} from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ( {
    root : {
        width : "70%",
        height : "100%",
        backgroundColor : '#FE6B8B',
        display:"flex",
    },
    papaer : {
        padding : theme.spacing(10),
    }

}))



export default function MentionBoard() {
    const classes = useStyles();

    return (
    <Fragment>
      <CssBaseline />
      <Container  className={classes.root}>
        <Typography className={classes.papaer}/>
        Hello
      </Container>
    </Fragment>
  );
}