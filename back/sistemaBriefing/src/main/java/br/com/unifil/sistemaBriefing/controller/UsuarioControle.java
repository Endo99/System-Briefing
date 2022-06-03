package br.com.unifil.sistemaBriefing.controller;

import br.com.unifil.sistemaBriefing.models.Cargos;
import br.com.unifil.sistemaBriefing.models.Usuario;
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

    @GetMapping(path= "lista-usuario")
    public ResponseEntity<List<Usuario>> listar()
    {
        return ResponseEntity.ok(usuarioServico.listarTodos());
    }

    @GetMapping(path = "/{id}")
    public ResponseEntity<Usuario> buscarPorId(@PathVariable long id)
    {
        return ResponseEntity.ok(usuarioServico.buscarPorId(id));
    }

    @PostMapping
    public ResponseEntity<Usuario> cadastrarCargos(@RequestBody Usuario usuario)
    {
        return new ResponseEntity<>(usuarioServico.cadastrarUsuario(usuario), HttpStatus.CREATED);
    }
}
