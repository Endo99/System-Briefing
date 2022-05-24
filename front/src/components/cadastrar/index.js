import React from "react";
import './index.css';

import {InputAdornment, TextField, Grid, MenuItem, Button} from '@mui/material/';

import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import KeyIcon from '@mui/icons-material/Key';
import PersonIcon from '@mui/icons-material/Person';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import BadgeIcon from '@mui/icons-material/Badge';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';

const Cadastrar = (props) => {

    const currencies = [
    {
        value: 'Project Owner',
        label: 'Project Owner',
    },
    {
        value: 'Desenvolvedor',
        label: 'Desenvolvedor',
    },
    {
        value: 'Quality Secure',
        label: 'Quality Secure',
    },
    ];

    const [currency, setCurrency] = React.useState({
    });

    const handleChange = (event) => {
        setCurrency(event.target.value);
    };

    const [state, setstate] = React.useState(false)

    const [values, setValues] = React.useState({
      amount: '',
      password: '',
      weight: '',
      weightRange: '',
      showPassword: false,
    });

    const handleChangePassword = (prop) => (event) => {
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
    return (
        <div>
            <div className="header-cadastrar">
            <header className='header'>
                <AccountCircleOutlinedIcon className="avatar-cadastro" sx={{width: 70, height: 70, color: '#C879FF'}}>
                </AccountCircleOutlinedIcon>
            </header>
            <h4 className="texto-introdutorio-cadastrar"> Olá! Por favor, insira os seus dados abaixo:</h4>
            </div>

            <div className='dados-cadastrar'>
                <Grid className="grid-dados" container spacing={15} item lg={25} columnSpacing={{ xs: 0, sm: 0, md: 1 }}>
                <TextField
                  id="nome"
                  label='nome'
                  className="field-cadastro"
                  type='text'
                  InputProps={{
                    
                    startAdornment: (
                      <InputAdornment position="start">
                        <AccountBoxIcon sx={{width: 35, height: 35, color: '#C879FF'}}/>
                      </InputAdornment>
                    ),
                    shrink: true,
                  }}
                  variant="outlined"
                  />

                <TextField
                  id="sobrenome"
                  label='sobrenome'
                  className="field-cadastro"
                  type='text'
                  InputProps={{
                    
                    startAdornment: (
                      <InputAdornment position="start">
                        <AccountBoxIcon sx={{width: 35, height: 35, color: '#C879FF'}}/>
                      </InputAdornment>
                    ),
                    shrink: true,
                  }}
                  variant="outlined"
                  />

                <TextField
                  id="email"
                  label='e-mail'
                  className="field-cadastro"
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

                <TextField
                  id="telefone"
                  label='telefone'
                  className="field-cadastro"
                  type='text'
                  InputProps={{
                    
                    startAdornment: (
                      <InputAdornment position="start">
                        <SmartphoneIcon sx={{width: 35, height: 35, color: '#C879FF'}}/>
                      </InputAdornment>
                    ),
                    shrink: true,
                  }}
                  variant="outlined"
                  />

                <TextField
                  id="cargo"
                  select
                  label='cargo'
                  className="field-cadastro"
                  type='text'
                  value={currency}
                  onChange={handleChange}
                  
                  InputProps={{
                    
                    startAdornment: (
                      <InputAdornment position="start">
                        <BadgeIcon sx={{width: 35, height: 35, color: '#C879FF'}}/>
                      </InputAdornment>
                    ),
                    shrink: true,
                  }}
                  variant="outlined"

                  
                  >
                  {currencies.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                        {option.label}
                        </MenuItem>
                        ))}
                  </TextField>

                <TextField
                  id="senha"
                  label='senha'
                  className="field-cadastro"
                  type={values.showPassword ? 'text' : 'password'}
                    value={values.password}
                    onChange={handleChangePassword('password')}

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

                <TextField
                  id="senha-novamente"
                  label='senha novamente'
                  className="field-cadastro-separado"
                  type={values.showPassword ? 'text' : 'password'}
                    value={values.password}
                    onChange={handleChangePassword('password')}

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
                  </Grid>

                <div className="button-cadastrar">
                <Button
                className="config-button"
                onClick={() => { /* Usar state no onclick do config-button e no do loadingbutton */
                    
                }}
                variant='outlined'>
                  Cadastrar
                </Button>
              </div>
            </div>


        </div>
    )
}

export default Cadastrar;