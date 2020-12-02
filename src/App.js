import React,{useState} from 'react';
import { makeStyles } from "@material-ui/core/styles"
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import MentionCrt from "./layouts/MentionCrt.js"
import MentionBrd from "./layouts/MentionBrd.js"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    height : "100%",
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

function App() {
  const classes = useStyles();

  const [userText, setuserText] = useState([])

  return (
    <>
    <Grid container spacing={2}>
        <Grid item xs={6}>
          <MentionCrt setData={setuserText}/>
        
        </Grid>
      
        <Grid item xs={6}>
        
          <MentionBrd useData={userText}/>
        </Grid>
      
      </Grid>
    </>

    );
}

export default App;
