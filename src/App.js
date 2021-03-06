import React,{useState} from 'react';
import { makeStyles } from "@material-ui/core/styles"
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import MentionCrt from "./pages/layouts/MentionCrt.js"
import MentionBrd from "./pages/layouts/MentionBrd.js"

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

export const dataContext = React.createContext();

function App() {
  const classes = useStyles();

  const [userText, setuserText] = useState([])

  return (
    <>
    <Grid container spacing={2}>
      {/* Data Input Component */}
        <Grid item xs={6}>
          <MentionCrt setData={setuserText}/>
        </Grid>

        {/* Data View Component */}
        <dataContext.Provider value ={{userText}}>
      
          <Grid item xs={6}>
            <MentionBrd/>
         </Grid>
        </dataContext.Provider>
      
      </Grid>
    </>

    );
}

export default App;
