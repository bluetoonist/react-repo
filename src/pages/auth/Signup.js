import React from "react"

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import SignUpImg from "../images/signup.png";
import Button from '@material-ui/core/Button';
import {useHistory} from "react-router-dom";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
    root: {
        height:"100vh",
        background :"linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%)"  
    },
    GridGradit : {
        width: "80%",
        paddingLeft: "20%",
        paddingTop : "10%",       
    },

    Leftpaper: {
        height: "50vh",
        padding: theme.spacing(2),
        textAlign: 'center',
        align: "center",
        background: "linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%)"
    },
    Rightpaper: {
        height: "50vh",
        padding: theme.spacing(2),
        textAlign: 'center',
        align: "center",
    },
    SignUpImg: {
        width: "100%",
        height: "100%",
    },
    SignUpButton : {
        marginTop : "7%"
    },
    formStyle : {
        marginTop : "4%"
    }
}));




function Signup() {

    const classes = useStyles();
    const history = useHistory();

    const OnSignUp = async (e) => {
        e.preventDefault();
        const register_id = e.target[0].value;
        const register_pw = e.target[1].value 
        const register_email = e.target[2].value;
        
        axios.post("http://127.0.0.1:8000/auth/signup"  , {
                username:register_id,
                password:register_pw,
                email:register_email
        })
        .then(function(response){
            if (response.data.LoginStatus ==="Success") {
                history.push("/");
            }
            if (response.data.LoginStatus ==="Duplicate"){
                
            }
    
        })
        
    };

    
    return (
        <>
            <div className={classes.root}>
                <Grid container spacing={1} className={classes.GridGradit}>
                    <Grid item xs={5}>
                        <Paper className={classes.Leftpaper}>
                            <img src={SignUpImg} className={classes.SignUpImg} alt="signup" />

                        </Paper>

                    </Grid>

                    <Grid item xs={6}>
                        <Paper className={classes.Rightpaper}>
                            <form noValidate autoComplete="off" className={classes.formStyle} onSubmit={OnSignUp}>
                                <TextField  className={classes.SignUpButton} label="ID를 입력하세요" name="username" fullWidth/>
                                <TextField  className={classes.SignUpButton} label="PW를 입력하세요" name="password" fullWidth />
                                <TextField  className={classes.SignUpButton} label="Email를 입력하세요" name="email" fullWidth/>
                                <Button className={classes.SignUpButton}  variant="outlined" color="secondary" type="submit" fullWidth> submit </Button>
                            </form>

                        </Paper>
                    </Grid>
                </Grid>
            </div>
        </>

    );

}

export default Signup;