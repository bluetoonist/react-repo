
/*
    @ author : jak010
    @ Description : 로그인 폼
    @ Date : 2020.12.06
*/

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Container, CssBaseline, Typography, Button, TextField } from '@material-ui/core';
import { ToastContainer, toast } from 'react-toastify';
import { useHistory } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import Img from "./images/images.png";


toast.configure();
const notify = () => {
    toast.error("Login Has Bee Failed");
}

const useStyles = makeStyles((theme) => ({
    root: {
        flex: 1,
        height: "100vh",
        // backgroundImage : "url(https://picsum.photos/1920/1080/)"
        background: "#83a4d4", /* fallback for old browsers */
        background: "-webkit-linear-gradient(to right, #b6fbff, #83a4d4)",  /* Chrome 10-25, Safari 5.1-6 */
        background: "linear-gradient(to right, #b6fbff, #83a4d4)" /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    LoginImage: {
        width: "30%",
        height: "40%",
        marginLeft: "35%",
        marginTop: "15%",
        alignSelf: 'center',

    },
    LoginForm: {

        width: "70%",
        height: "60vh",
        // background : "#FFE5E0",

        marginLeft: "15%",
        marginTop: "-5%",
        justifyContent: "center",

    },
    formInput: {
        marginTop: "8%",
        float: "right"
    },
    formStyle: {
        padding: "15%",
    },

    formButton: {
        marginTop: "10%",
        marginRight: "5%",
        float: "right",
    }


}));


// 로그인 정보 요청
export default function ButtonAppBar() {
    const classes = useStyles();
    const history = useHistory();

    async function OnLogin(e) {
        e.preventDefault();

        const LoginId = e.target[0].value;
        const LoginPw = e.target[1].value;
        try {
            const response = await fetch("http://127.0.0.1:8000/auth/onlogin", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ username: LoginId, password: LoginPw })
            })
            const resdata = await response.json()
            if (resdata.status === "Success") {
                console.log("Login Success");
                history.push("/auth/mention");
            } else {
                console.log('Server is Not connect')
            }
        } catch {
            notify();
        }
    }

    const MoveSignUpPage = () => {
        history.push("/auth/signup")
    }


    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        Login Mention Note
                    </Typography>

                </Toolbar>
            </AppBar>

            <CssBaseline />

            <Container fixed>
                <Typography component="div" className={classes.LoginForm} >
                    <form className={classes.formStyle} noValidate autoComplete="off" onSubmit={OnLogin}>
                        <img src={Img} className={classes.LoginImage} alt="onLogin" />
                        <label>
                            <TextField className={classes.formInput} id="standard-basic" name="ID" label="ID를 입력하세요" fullWidth />
                            <br />
                            <TextField className={classes.formInput} id="standard-basic" type="password" name="PW" label="Password를 입력하세요" fullWidth />
                        </label>
                        <Button type="submit" className={classes.formButton} size="medium" variant="contained" color="secondary">
                            LOGIN
                        </Button>

                        <Button className={classes.formButton} size="medium" variant="contained" color="secondary" onClick={MoveSignUpPage}>
                            SIGNUP
                        </Button>

                    </form>

                </Typography>
            </Container>

        </div>
    );
}