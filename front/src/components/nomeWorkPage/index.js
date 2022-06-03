import { AppBar, IconButton, Toolbar } from "@mui/material";
import React from "react";
import MenuIcon from "@mui/material/Menu"

const NomeWorkPage = (props) => {
    return (
    <div>
        <div className="header">
            <header className="header-main">
                <AppBar className="appBar">
                    <Toolbar className="toolbar">
                        <IconButton className="botao"
                        size='large'
                        edge='start'
                        color='#000'>
                            <MenuIcon className="menu-icon"/>
                        </IconButton>
                    </Toolbar>
                </AppBar>
            </header>
        </div>
    </div>
    )
}

export default NomeWorkPage;