import React,{useEffect,useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {dataContext} from "../App.js";


const useStyles = makeStyles({
    root: {
        maxWidth: "90%",
        marginBottom:"3%"
    },
    media: {
        height: 140,
    },
});


function MentionBrd(props) {
    const classes = useStyles();
    const {userText} = useContext(dataContext);
    
    return (

        <>
            {userText.slice().reverse().map((index,unique) => (

                <Card className={classes.root} key={unique}>
                    <CardActionArea>
                        <CardContent>

                            <Typography gutterBottom variant="h5" component="h2">
                                Lizard
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {index}
                            </Typography>
                        </CardContent>
                    </CardActionArea>

                </Card>


            ))} 
        </>

    )
}
export default MentionBrd;