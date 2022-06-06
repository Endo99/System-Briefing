package br.com.unifil.sistemaBriefing.service;

import br.com.unifil.sistemaBriefing.models.Cargos;
import br.com.unifil.sistemaBriefing.models.Usuario;
import br.com.unifil.sistemaBriefing.repository.UsuarioRepositorio;
import br.com.unifil.sistemaBriefing.request.UsuarioPostResquestBody;
import br.com.unifil.sistemaBriefing.request.UsuarioPutResquestBody;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.ThreadLocalRandom;

@Service
@RequiredArgsConstructor
public class UsuarioServico {

    private final UsuarioRepositorio usuarioRepositorio;

    public List<Usuario> listarTodos() {
        return usuarioRepositorio.findAll();
    }

    public Usuario buscarPorIdIUsuario(long idUsuario) {
        return usuarioRepositorio.findById(idUsuario)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.BAD_REQUEST, "Usuario não encontrado"));
    }

    public Usuario cadastrarUsuario(UsuarioPostResquestBody usuarioPostResquestBody)
    {
        return usuarioRepositorio.save(Usuario.builder().nome(usuarioPostResquestBody.getNome())
                        .sobrenome(usuarioPostResquestBody.getSobrenome())
                        .email(usuarioPostResquestBody.getEmail())
                        .cargo(usuarioPostResquestBody.getCargo())
                        .telefone(usuarioPostResquestBody.getTelefone())
                        .senha(usuarioPostResquestBody.getSenha())
                        .senhaNovamente(usuarioPostResquestBody.getSenhaNovamente())
                .build());
    }

    public void deletarUsuario(long id) {
        usuarioRepositorio.delete(buscarPorIdIUsuario(id));
    }

    public void alterarUsuario(UsuarioPutResquestBody usuarioPutResquestBody) {
        Usuario salvarUsuario = buscarPorIdIUsuario(usuarioPutResquestBody.getIdUsuario());
        Usuario usuario = Usuario.builder()
                .idUsuario(salvarUsuario.getIdUsuario())
                .nome(salvarUsuario.getNome())
                .sobrenome(salvarUsuario.getSobrenome())
                .email(salvarUsuario.getEmail())
                .cargo(salvarUsuario.getCargo())
                .telefone(usuarioPutResquestBody.getTelefone())
                .senha(salvarUsuario.getSenha())
                .senhaNovamente(salvarUsuario.getSenhaNovamente())
                .build();

        usuarioRepositorio.save(usuario);
    }
}
