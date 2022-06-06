package br.com.unifil.sistemaBriefing.controller;

import br.com.unifil.sistemaBriefing.models.Cargos;
import br.com.unifil.sistemaBriefing.models.Usuario;
import br.com.unifil.sistemaBriefing.request.CargoPostResquestBody;
import br.com.unifil.sistemaBriefing.request.CargoPutResquestBody;
import br.com.unifil.sistemaBriefing.request.UsuarioPostResquestBody;
import br.com.unifil.sistemaBriefing.request.UsuarioPutResquestBody;
import br.com.unifil.sistemaBriefing.service.CargosServico;
import br.com.unifil.sistemaBriefing.service.UsuarioServico;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("usuario")
@Log4j2
@RequiredArgsConstructor
public class UsuarioControle {

    private final UsuarioServico usuarioServico;


    // Ler

    @GetMapping(path= "listarUsuario")
    public ResponseEntity<List<Usuario>> listar()
    {
        return ResponseEntity.ok(usuarioServico.listarTodos());
    }

    @GetMapping(path = "/{id}")
    public ResponseEntity<Usuario> buscarPorId(@PathVariable long id)
    {
        return ResponseEntity.ok(usuarioServico.buscarPorIdIUsuario(id));
    }

    @PostMapping(path = "/cadastrarUsuario")
    public ResponseEntity<Usuario> cadastrarUsuario(@RequestBody UsuarioPostResquestBody usuarioPostResquestBody)
    {
        return new ResponseEntity<>(usuarioServico.cadastrarUsuario(usuarioPostResquestBody), HttpStatus.CREATED);
    }

    @PutMapping(path = "/alterarUsuario")
    public ResponseEntity<Void> alterarCargo(@RequestBody UsuarioPutResquestBody usuarioPutResquestBody) {
        usuarioServico.alterarUsuario(usuarioPutResquestBody);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @DeleteMapping(path = "/{id}")
    public ResponseEntity<Void> deletarCargo(@PathVariable long id) {
        usuarioServico.deletarUsuario(id);
        return  new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
