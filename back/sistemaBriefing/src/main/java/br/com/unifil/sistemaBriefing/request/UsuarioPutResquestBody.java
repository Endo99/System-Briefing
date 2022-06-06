package br.com.unifil.sistemaBriefing.request;

import lombok.Data;

@Data
public class UsuarioPutResquestBody {

    private long idUsuario;

    private String nome;

    private String sobrenome;

    private String email;

    private String cargo;

    private String telefone;

    private String senha;

    private String senhaNovamente;

}
