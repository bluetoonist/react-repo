/* 
@ author : jak010
@ Description : 왼쪽에 나타나는 레이아웃

*/
import React,{createContext,useState} from 'react';
import { makeStyles } from "@material-ui/core/styles"
import { Grid, Box, Container, TextField,Button } from "@material-ui/core"

export const userText =  createContext()


const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: "2%",
    },

    mentioncrt: {
        marginRight: "2%",
        marginLeft: "0.5%"
    },
    mentionbrd: {
        height: "100%",
        marginLeft: "1%",
        background: "#fff5f2"
    },
    mentionbox : {
        marginTop:"2%"
    }
    
}))




export default function MentionCrt() {

    const [saveData,setsaveData] = useState([]);
    const revDataSet = Array();

    const classes = useStyles();
    const getTextDate = (e) => {
        e.preventDefault();
        
        const usertext = e.target[0].value;
        console.log(usertext)
        
        // setsaveData([...saveData,usertext])
        revDataSet.push(userText);
        console.log(revDataSet)
    }



    return (
        // Mention Create BOx 
        <Grid container spacing={1} className={classes.root}>

            <Grid item xs={12} sm={4} className={classes.mentioncrt}>
                <Box bgcolor="info.main" color="info.contrastText" p={1}>
                    MENTION POST IT!
          </Box>
                <form className={classes.root} noValidate autoComplete="off" onSubmit={getTextDate}>
                    <TextField

                        id="standard-full-width"
                        label="Hello Input Your Mention !"
                        multiline
                        rows={12}
                        defaultValue="Default Value"
                        variant="outlined"
                        margin="normal"
                        fullWidth
                    />
                 <input type="submit" value="Submit"/>  
                </form>
               
            </Grid>

            {/* Mention Monitor Layout */}
            <Grid item xs={12} sm={7} >
                <Container maxWidth="100%" className={classes.mentionbrd}>
                    {revDataSet.map (index => (              
                    <TextField id="outlined-basic" className={classes.mentionbox}  rows={12} label={index} variant="outlined" fullWidth/>     
                    ))}         
                </Container>
            </Grid>


        </Grid>
    );
}