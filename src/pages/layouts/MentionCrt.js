/* 
@ author : jak010
@ Description : 왼쪽에 나타나는 레이아웃

*/
import React, { useState } from 'react';
import { makeStyles } from "@material-ui/core/styles"
import { Grid, Box, TextField, Button, Typography } from "@material-ui/core"

import MentionBrd from "./MentionBrd.js";


const useStyles = makeStyles((theme) => ({
    root: {
    

        background: "linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)"

    },
    formbg: {
        background: "#FFFFFF",
        border: 0,
    borderRadius: 3,
    },
    barBg : {
        background : "linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%)",
    },

    mentioncrt: {
        marginTop: "2%",
        marginRight: "2%",
        marginLeft: "4%",
        
    },
    profile: {
        marginTop: "3%",
    },

    mentionbox: {
        marginTop: "2%"
    }

}))


function MentionCrt(props) {

    const [saveData, setsaveData] = useState([]);

    const classes = useStyles();

    const getTextDate = (e) => {
        e.preventDefault();
        // const usertext = e.target[0].value;
        // setsaveData([...saveData,usertext])
        // props.setData(saveData)

    }

    return (
        <>
    
        <Grid container spacing={2} className={classes.root}>

            <Grid item xs={12} sm={3} className={classes.mentioncrt}>
                <Box bgcolor="info.main" className={classes.barBg} color="info.contrastText" p={1}>
                    MENTION POST IT!
                 </Box>
                <form noValidate autoComplete="off" onSubmit={getTextDate}>
                    <TextField
                        className={classes.formbg}
                        id="standard-full-width"
                        // label="Hello Input Your Mention!"
                        multiline
                        rows={6}
                        defaultValue="Default Value"
                        variant="outlined"
                        margin="normal"
                        fullWidth
                    />
                
                    <Button className={classes.barBg} variant="outlined" type="submit" fullWidth>POST</Button>

                </form>
                <Box bgcolor="info.main" color="info.contrastText" className={classes.profile} p={1}>
                    PROFILE
                 </Box>

            </Grid>

            {/* Mention Board */}
            <Grid item xs={12} sm={7} className={classes.mentionbox} >
                <Box bgcolor="info.main" className={classes.barBg} color="info.contrastText" p={1}>
                    MENTION BOARD
                 </Box>

                <MentionBrd />

            </Grid>

        </Grid>
        </>
    );
}

export default MentionCrt;