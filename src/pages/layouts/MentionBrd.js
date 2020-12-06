import React,{useEffect,useContext,useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';



import axios from "axios";

const useStyles = makeStyles({
    root: {
        maxWidth: "100%",
        marginBottom:"3%",
        marginTop : "2%"
    },
    media: {
        height: 140,
    },
});


function MentionBrd(props) {
    const classes = useStyles();
    const [data,setData] = useState([]);
    const URL = "http://127.0.0.1:8000/data/?format=json";
    // const {userText} = useContext(dataContext);

    useEffect( () => {

        const fetchData = async() => {
            const result = await axios(URL);        
            console.log(result.data.results);
            setData(result.data.results);
            
        };
        fetchData();
    },[])    
       
    return (
        <>
            {data.slice().reverse().map((index,unique) => (

                <Card className={classes.root} key={unique}>
                    <CardActionArea>
                        <CardContent>

                            <Typography gutterBottom variant="h5" component="h2">
                                {index.label}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {index.date}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            ))} 
        </>

    )
}
export default MentionBrd;