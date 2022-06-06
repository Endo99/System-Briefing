import React from "react";
import Login from "../login/";
import Cadastrar from "../cadastrar/";
import WorkPage from "../nomeWorkPage";
import EsquecerSenha from "../esqueceu-senha";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
      <div>
        <Router>
          <Routes>
            <Route exact path={"/"} element={<Login />} />
            <Route exact path={"/cadastrar"} element={<Cadastrar />} />
            <Route exact path={"/esqueceu"} element={<EsquecerSenha />} />
          </Routes>
        </Router>
      </div>
  );
}

export default App;
