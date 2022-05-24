import React, {useState, setState} from "react";
import './index.css';
import Cadastrar from "../cadastrar/";


import {TextField, Typography, Grid, Button, Input, Link} from "@mui/material/";
import LoadingButton from '@mui/lab/LoadingButton';

import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import KeyIcon from '@mui/icons-material/Key';
import LoginIcon from '@mui/icons-material/Login';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';

import { NavLink } from "react-router-dom";

const Login = (props) => {

    const color = [{
        background: '#FBF5F3',
        button_login: '#C879FF',
        button_main: '#BAF19C ',
        button_QA: '#FF0A54',
        bar_top_Main: '#52B788',
        bar_top_QA: '#800F2F',
    }]

    const [values, setValues] = React.useState({
      amount: '',
      password: '',
      weight: '',
      weightRange: '',
      showPassword: false,
    });
  
  
    const handleChange = (prop) => (event) => {
      setValues({ ...values, [prop]: event.target.value });
    };
  
    const handleClickShowPassword = () => {
      setValues({
        ...values,
        showPassword: !values.showPassword,
      });
    };
  
    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };
  
    const regex = new RegExp(
      '^(([^<>()[\\]\\\\.,;:\\s@\\"]+(\\.[^<>()[\\]\\\\.,;:\\s@\\"]+)*)|' +
      '(\\".+\\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])' +
      '|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$'
    );
  
    

    return (
      <div>
        <div className="header">
            <header>
                <AccountCircleOutlinedIcon className="avatar-login" sx={{width: 250, height: 250, color: '#C879FF'}}>
                </AccountCircleOutlinedIcon>
            </header>
            <h4 className="texto-introdutorio-login"> Olá! <p>Seja bem-vindo!</p></h4>
            </div>

            <div className="dados-login">

                <TextField
                  id="email-login"
                  label='e-mail'
                  className="field"
                  type='text'
                  InputProps={{
                    
                    startAdornment: (
                      <InputAdornment position="start">
                        <MailOutlineIcon sx={{width: 35, height: 35, color: '#C879FF'}}/>
                      </InputAdornment>
                    ),
                    shrink: true,
                  }}
                  variant="outlined"
                  />
                <br></br>
              <div className="dados-login">
                <TextField
                    id="senha-login"
                    label='senha'
                    className="field"
                    
                    type={values.showPassword ? 'text' : 'password'}
                    value={values.password}
                    onChange={handleChange('password')}

                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <KeyIcon sx={{width: 35, height: 35, color: '#C879FF'}}/>
                        </InputAdornment>
                      ),
                      shrink: true,

                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton classname='visibilidade'
                          sx={{width: 35, height: 35, color: '#C879FF'}}
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                          >
                            {values.showPassword ? <VisibilityOff sx={{width: 35, height: 35, color: '#C879FF'}} /> : <Visibility sx={{width: 35, height: 35, color: '#C879FF'}}/>}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                    variant="outlined"
                  />
              </div>

              <div id="esqueceu-senha">
                  <Link
                  className='link-esqueceu'
                  component='button'
                  variant='body2'
                  underline='hover'
                  onClick={() => {

                  }}>
                    Esqueceu a senha?
                  </Link>
              </div>

              <div className="button-logar">
                <Button
                className="config-button"
                startIcon={<LoginIcon sx={{width: 35, height: 35, color: '#fff'}}/>}
                onClick={() => { /* Usar state no onclick do config-button e no do loadingbutton */
                    <Cadastrar />
                }}
                variant='outlined'>
                  Enviar
                </Button>
              </div>

              <div id='link-cadastrar'>
                <p>Não tem cadastro?
                  <Link
                  className='link-cadastro'
                  component='button'
                  variant='body2'
                  underline='hover'
                  onClick={() => {

                  }}>
                    Clique aqui
                  </Link></p>

              </div>

             </div>
    </div>
    )
}

export default Login;