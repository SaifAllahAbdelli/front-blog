import React, { useState, useEffect } from "react";
import { withRouter, Redirect, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
    Container,
    Row,
    Col,
    Button,
    FormGroup,
    FormText,
    Input,
} from "reactstrap";

import Widget from "../../components/Widget/Widget";
import { loginUser } from "../../redux/actions/authActions";
import hasToken from "../../services/authService";

// Validator imports
import isEmail from "validator/lib/isEmail";

import loginImage from "../../assets/loginImage.svg";
import AdnLogo from "../../components/Icons/AdnLogo";
import SpinnerSmall from "../../components/SpinnerSmall/SpinnerSmall";

import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { IconButton } from "@mui/material";

import { Helmet } from "react-helmet";

const Login = () => {
    const dispatch = useDispatch();

    const loading = useSelector((state) => state.loading);
    const token = useSelector((state) => state.auth.token);

    const [state, setState] = useState({
        email: "",
        password: "",
    });

    const [isVisible, setIsVisible] = useState(false);

    const renderEye = isVisible ? < VisibilityOffIcon /> : < VisibilityIcon />;

    const toogleIsVisible = () => {
        setIsVisible((prevState) => !prevState);
    };

    // Input states if touched
    const [emailIsTouched, setEmailIsTouched] = useState(false);
    const [passwordIsTouched, setPasswordIsTouched] = useState(false);

    // Input states validation
    const [emailIsValid, setEmailIsValid] = useState(true);
    const [formIsValid, setFormIsValid] = useState(false);

    const doLogin = (e) => {
        e.preventDefault();
        dispatch(loginUser(state));
        

        setEmailIsTouched(false);
        setPasswordIsTouched(false);

        setEmailIsValid(true);
    };

    // useEffect for the email validation
    useEffect(() => {
        if (emailIsTouched && isEmail(state.email)) {
            setEmailIsValid(true);
        } else {
            setEmailIsValid(false);
        }
    }, [emailIsTouched, state.email]);

    // useEffct for form validation
    useEffect(() => {
        const allFieldsValidation = emailIsValid && state.password.length >= 8;

        if (allFieldsValidation) {
            setFormIsValid(true);
        } else setFormIsValid(false);
    }, [emailIsValid, state.password]);

    const changeCreds = (event) => {
        setState({ ...state, [event.target.name]: event.target.value });
    };

    if (hasToken(token)) {
        return <Redirect to="/admin" />;
    }

    return (<
        div className="auth-page" >
        <
        Helmet >
            <
                meta charSet="utf-8" />
            <
                meta name="description"
                content="Log-in page to authenticate users." />
            <
        title > Blog | Log - in < /title>{" "} < /
        Helmet > {" "} <
        Container className="col-12" >
                    <
        Row className="d-flex align-items-center" >
                        <
        Col xs={12}
                            lg={6}
                            className="left-column" >
                            <
        Widget className="widget-auth widget-p-lg" >
                                <
        div className="d-flex align-items-center justify-content-between py-3" >
                                    <
        p className="auth-header mb-0" > Se connecter < /p>{" "} <
        div className="logo-block" >
                                            <
                                                AdnLogo />
                                            <
        /div>{" "} < /
        div > {" "} <
        form onSubmit={
                                                    (event) => doLogin(event)
                                                }
                                                autoComplete="off" >
                                                <
        FormGroup className="my-3" >
                                                    <
        FormText >
                                                        Address mail < strong className="text-danger" > * < /strong>{" "} < /
        FormText > {" "} <
                                                                Input id="email"
                                                                className={`input-transparent pl-3 ${!emailIsValid && emailIsTouched && "is-invalid"
                                                                    }`}
                                                                value={state.email}
                                                                onChange={
                                                                    (event) => changeCreds(event)
                                                                }
                                                                onFocus={
                                                                    () => setEmailIsTouched(true)
                                                                }
                                                                type="email"
                                                                name="email"
                                                                placeholder="E-mail"
                                                                required /
                                                            >
                                                            <
        div className="invalid-feedback" >
                                                                Veuillez fournir une adresse mail valide {" "} <
        /div>{" "} < /
        FormGroup > {" "} <
        FormGroup className="my-3" >
                                                                    <
        div className="d-flex justify-content-between" >
                                                                        <
        FormText >
                                                                            Mot de passe < strong className="text-danger" > * < /strong>{" "} < /
        FormText > {" "} <
        Link to="/forgetpassword" > Mot de passe oublié ? < /Link>{" "} < /
        div > {" "} <
        div className="d-flex justify-content-between" >
                                                                                        <
                                                                                            Input id="password"
                                                                                            className={`input-transparent pl-3 ${state.password.length < 8 &&
                                                                                                passwordIsTouched &&
                                                                                                "is-invalid"
                                                                                                }`}
                                                                                            value={state.password}
                                                                                            onChange={
                                                                                                (event) => changeCreds(event)
                                                                                            }
                                                                                            onFocus={
                                                                                                () => setPasswordIsTouched(true)
                                                                                            }
                                                                                            type={isVisible ? "text" : "password"}
                                                                                            required name="password"
                                                                                            placeholder="Mot de passe" /
                                                                                        >
                                                                                        <
        IconButton onClick={toogleIsVisible} > {" "} {renderEye} {" "} <
        /IconButton>{" "} < /
        div > {" "} <
        div className="invalid-feedback" >
                                                                                                Veuillez fournir un mot de passe valide avec 8 caractéres ou +
                                                                                                <
        /div>{" "} < /
        FormGroup > {" "} <
        div className="bg-widget d-flex justify-content-center" > {" "} {
                                                                                                        loading ? (<
                                                                                                            SpinnerSmall />
                                                                                                        ) : (<
                Button className="rounded-pill my-3"
                                                                                                            type="submit"
                                                                                                            disabled={!formIsValid}
                                                                                                            color="secondary-red" >
                                                                                                            Se connecter {" "} <
                /Button>
                                                                                                            )
        } {" "} <
        /div>{" "} < /
        form > {" "} <
        /Widget>{" "} < /
        Col > {" "} <
        Col xs={0}
                                                                                                                lg={6}
                                                                                                                className="right-column" >
                                                                                                                <
        div >
                                                                                                                    <
                                                                                                                        img src={loginImage}
                                                                                                                        alt="Logo" />
                                                                                                                    <
        /div>{" "} < /
        Col > {" "} <
        /Row>{" "} < /
        Container > {" "} <
        /div>
                                                                                                                    );
};

                                                                                                                    export default withRouter(Login);