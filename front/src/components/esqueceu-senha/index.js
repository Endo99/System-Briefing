import React from "react";

import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

const EsquecerSenha = (props) => {

    return (
        <div className="header-esqueceu">
            <header className='header'>
                <div className="avatar">
                  <AccountCircleOutlinedIcon className="avatar-cadastro" sx={{width: 70, height: 70, color: '#C879FF'}}>
                  </AccountCircleOutlinedIcon>
                </div>
            </header>
        </div>
    )
}

export default EsquecerSenha;