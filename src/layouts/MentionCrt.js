/* 
@ author : jak010
@ Description : 왼쪽에 나타나는 레이아웃

*/
import React,{useState} from 'react';
import { makeStyles } from "@material-ui/core/styles"
import { Grid, Box, TextField } from "@material-ui/core"


const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: "2%",
    },

    mentioncrt: {
        marginRight: "2%",
        marginLeft: "0.5%"
    },

    mentionbox : {
        marginTop:"2%"
    }
    
}))


export default function MentionCrt(props) {

    const [saveData,setsaveData] = useState([]);

    const classes = useStyles();
     
    const getTextDate = (e) => {
        e.preventDefault();        
        const usertext = e.target[0].value;
        setsaveData([...saveData,usertext])
        props.setData(saveData)
        
    }

    return (
        // Mention Create BOx 
        <Grid container spacing={1} className={classes.root}>

            <Grid item xs={12} sm={12} className={classes.mentioncrt}>
                <Box bgcolor="info.main" color="info.contrastText" p={1}>
                    MENTION POST IT!
                 </Box>
                <form className={classes.root} noValidate autoComplete="off" onSubmit={getTextDate}>
                    <TextField

                        id="standard-full-width"
                        label="Hello Input Your Mention !"
                        multiline
                        rows={6}
                        defaultValue="Default Value"
                        variant="outlined"
                        margin="normal"
                        fullWidth
                    />
                    <input type="submit" value="Submit"/>  
                </form>
            </Grid>
        </Grid>
    );
}