package br.com.unifil.sistemaBriefing.controller;

import br.com.unifil.sistemaBriefing.models.Cargos;
import br.com.unifil.sistemaBriefing.service.CargosServico;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("cargo")
@Log4j2
@RequiredArgsConstructor
public class CargosControle {

    // Anotação
   private final CargosServico cargosServico;


    // Ler

    @GetMapping(path= "list")
    public ResponseEntity<List<Cargos>> listar()
    {
        return ResponseEntity.ok(cargosServico.listarTodos());
    }

    @GetMapping(path = "/{id}")
    public ResponseEntity<Cargos> buscarPorId(@PathVariable long id)
    {
        return ResponseEntity.ok(cargosServico.buscarPorId(id));
    }

    @PostMapping
    public ResponseEntity<Cargos> cadastrarCargos(@RequestBody Cargos cargos)
    {
        return new ResponseEntity<>(cargosServico.cadastrarCargos(cargos), HttpStatus.CREATED);
    }


}
