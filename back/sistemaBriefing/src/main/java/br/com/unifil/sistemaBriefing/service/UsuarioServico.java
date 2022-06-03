package br.com.unifil.sistemaBriefing.service;

import br.com.unifil.sistemaBriefing.models.Cargos;
import br.com.unifil.sistemaBriefing.models.Usuario;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.server.ResponseStatusException;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.ThreadLocalRandom;

@Service
public class UsuarioServico {

    private static List<Usuario> usuarios;

    static {
        usuarios = new ArrayList<>(List.of(new Usuario(1L,"Wellington", "Endo", "wellington@gmail.com", "43991837072","Desenvolvedor", "W_je99", "W_je99")));
    }

    public List<Usuario> listarTodos() {
        return usuarios;
    }

    public Usuario buscarPorId(long idUsuario) {
        return usuarios.stream()
                .filter(cargos -> cargos.getIdUsuario() == idUsuario)
                .findFirst()
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.BAD_REQUEST, "Usuário não encontrado"));
    }

    public Usuario cadastrarUsuario(Usuario usario)
    {
        usario.setIdUsuario(ThreadLocalRandom.current().nextLong(3, 10000));
        usuarios.add(usario);
        return usario;
    }
}
