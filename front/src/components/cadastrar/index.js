import React from "react";
import './index.css';
import Login from "../login/";
import axios from "axios";

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
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Cadastrar = (props) => {

  const postData = () => {
    console.log(nome)
    console.log(sobrenome)
    console.log(email)
    console.log(telefone)
    console.log(cargo)
    console.log(senha)
    console.log(senhaNovamente)
}
  const cadastrar = () => {
    <div>
      <h2>Valor</h2>
    </div>
  }

    const cargos = [
    {
        value: 'Adminstrador',
        label: 'Adminstrador',
    },
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

    const [nome, setNome] = React.useState('');
    const [sobrenome, setSobrenome] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [telefone, setTelefone] = React.useState(0);
    const [cargo, setCargo] = React.useState('');

    const [senha, setSenha] = React.useState({
      amount: '',
      password: '',
      weight: '',
      weightRange: '',
      showPassword: false,
    });

    const [senhaNovamente, setSenhaNovamente] = React.useState({
      amount: '',
      password: '',
      weight: '',
      weightRange: '',
      showPassword: false,
    });

    const handleChangePasswordSenha = (prop) => (event) => {
        setSenha({ ...senha, [prop]: event.target.value });
      };
    
    const handleClickShowPasswordSenha = () => {
        setSenha({
          ...senha,
          showPassword: !senha.showPassword,
        });
      };

    const handleMouseDownPasswordSenha = (event) => {
        event.preventDefault();
      };

      const handleChangePasswordSenhaNovamente = (prop) => (event) => {
        setSenhaNovamente({ ...senhaNovamente, [prop]: event.target.value });
      };
    
    const handleClickShowPasswordSenhaNovamente = () => {
        setSenhaNovamente({
          ...senhaNovamente,
          showPassword: !senhaNovamente.showPassword,
        });
      };

    const handleMouseDownPasswordSenhaNovamente = (event) => {
        event.preventDefault();
      };

    
    return (
        <div>
            <div className="header-cadastrar">
            <header className='header'>
                <div className="header-button-voltar">
                  <IconButton className="voltar-button">
                    <ArrowBackIcon className="voltar-cadastro" sx={{width: 70, height: 70, color: '#C879FF'}}></ArrowBackIcon>
                  </IconButton>
                </div>
                <div className="avatar">
                  <AccountCircleOutlinedIcon className="avatar-cadastro" sx={{width: 70, height: 70, color: '#C879FF'}}>
                  </AccountCircleOutlinedIcon>
                </div>
            </header>
            <h4 className="texto-introdutorio-cadastrar"> Olá! Por favor, insira os seus dados abaixo:</h4>
            </div>

            <div className='dados-cadastrar'>
                <Grid className="grid-dados" container spacing={15} item lg={25} columnSpacing={{ xs: 0, sm: 0, md: 1 }}>
                <TextField
                  required
                  id="nome"
                  label='nome'
                  className="field-cadastro"
                  type='text'
                  onChange={(e) => {setNome(e.target.value)}}
                  InputProps={{
                    
                    startAdornment: (
                      <InputAdornment position="start">
                        <AccountBoxIcon sx={{width: 35, height: 35, color: '#C879FF'}}/>
                      </InputAdornment>
                    ),
                  }}
                  variant="outlined"
                  />

                <TextField
                  required
                  id="sobrenome"
                  label='sobrenome'
                  className="field-cadastro"
                  type='text'
                  onChange={(e) => setSobrenome(e.target.value)}
                  InputProps={{
                    
                    startAdornment: (
                      <InputAdornment position="start">
                        <AccountBoxIcon sx={{width: 35, height: 35, color: '#C879FF'}}/>
                      </InputAdornment>
                    ),
                  }}
                  variant="outlined"
                  />

                <TextField
                  required
                  id="email"
                  label='e-mail'
                  className="field-cadastro"
                  type='text'
                  onChange={(e) => setEmail(e.target.value)}
                  InputProps={{
                    
                    startAdornment: (
                      <InputAdornment position="start">
                        <MailOutlineIcon sx={{width: 35, height: 35, color: '#C879FF'}}/>
                      </InputAdornment>
                    ),
                    shrink: "true",
                  }}
                  variant="outlined"
                  />

                <TextField
                  required
                  id="telefone"
                  label='telefone'
                  className="field-cadastro"
                  type='text'
                  onChange={(e) => setTelefone(e.target.value)}
                  InputProps={{
                    
                    startAdornment: (
                      <InputAdornment position="start">
                        <SmartphoneIcon sx={{width: 35, height: 35, color: '#C879FF'}}/>
                      </InputAdornment>
                    ),
                  }}
                  variant="outlined"
                  />

                <TextField
                  required
                  id="cargo"
                  select
                  label='cargo'
                  className="field-cadastro"
                  type='text'
                  value={cargo}
                  onChange={(e) => setCargo(e.target.value)}
                  
                  InputProps={{
                    
                    startAdornment: (
                      <InputAdornment position="start">
                        <BadgeIcon sx={{width: 35, height: 35, color: '#C879FF'}}/>
                      </InputAdornment>
                    ),
                  }}
                  variant="outlined"
                  >
                  {cargos.map((option) => (
                        <MenuItem className="menu-cargo" key={option.value} value={option.value} >
                        {option.label}
                        </MenuItem>
                        ))}
                  </TextField>

                <TextField
                  required
                  id="senha"
                  label='senha'
                  className="field-cadastro"
                  type={senha.showPassword ? 'text' : 'password'}
                  value={senha.password}
                    onChange={handleChangePasswordSenha('password')}

                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <KeyIcon sx={{width: 35, height: 35, color: '#C879FF'}}/>
                        </InputAdornment>
                      ),

                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton className='visibilidade'
                          sx={{width: 35, height: 35, color: '#C879FF'}}
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPasswordSenha}
                            onMouseDown={handleMouseDownPasswordSenha}
                            edge="end"
                          >
                            {senha.showPassword ? <VisibilityOff sx={{width: 35, height: 35, color: '#C879FF'}} /> : <Visibility sx={{width: 35, height: 35, color: '#C879FF'}}/>}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  variant="outlined"
                  />

                <TextField
                  required
                  id="senhaNovamente"
                  label='senha novamente'
                  className="field-cadastro-separado"
                  type={senhaNovamente.showPassword ? 'text' : 'password'}
                    value={senhaNovamente.password}
                    onChange={handleChangePasswordSenhaNovamente('password')}

                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <KeyIcon sx={{width: 35, height: 35, color: '#C879FF'}}/>
                        </InputAdornment>
                      ),

                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton className='visibilidade'
                          sx={{width: 35, height: 35, color: '#C879FF'}}
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPasswordSenhaNovamente}
                            onMouseDown={handleMouseDownPasswordSenhaNovamente}
                            edge="end"
                          >
                            {senhaNovamente.showPassword ? <VisibilityOff sx={{width: 35, height: 35, color: '#C879FF'}} /> : <Visibility sx={{width: 35, height: 35, color: '#C879FF'}}/>}
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
                type="submit"
                onClick={postData}
                variant='outlined'>
                  Cadastrar
                </Button>
              </div>
            </div>


        </div>
    )
}

export default Cadastrar;