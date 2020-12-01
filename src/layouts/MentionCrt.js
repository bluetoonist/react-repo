import React from 'react';

import { makeStyles } from "@material-ui/core/styles"
import { Grid, Box, Container, TextField } from "@material-ui/core"

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
    const classes = useStyles();

    return (
        <Grid container spacing={1} className={classes.root}>

            <Grid item xs={12} sm={4} className={classes.mentioncrt}>
                <Box bgcolor="info.main" color="info.contrastText" p={1}>
                    Metion Create
          </Box>
                <form className={classes.root} noValidate autoComplete="off">
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
                </form>

            </Grid>

            <Grid item xs={12} sm={7} >

                <Container maxWidth="100%" className={classes.mentionbrd}>
                    <TextField id="outlined-basic" className={classes.mentionbox}  rows={12} label="Outlined" variant="outlined" fullWidth/>
                    <TextField id="outlined-basic"  className={classes.mentionbox} rows={12} label="Outlined" variant="outlined" fullWidth/>
                    <TextField id="outlined-basic"  className={classes.mentionbox} rows={12} label="Outlined" variant="outlined" fullWidth/>


                </Container>

            </Grid>


        </Grid>
    );
}