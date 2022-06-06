package br.com.unifil.sistemaBriefing.controller;

import br.com.unifil.sistemaBriefing.models.Cargos;
import br.com.unifil.sistemaBriefing.request.CargoPostResquestBody;
import br.com.unifil.sistemaBriefing.request.CargoPutResquestBody;
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

    @GetMapping(path= "listarCargo")
    public ResponseEntity<List<Cargos>> listar()
    {
        return ResponseEntity.ok(cargosServico.listarTodos());
    }

    @GetMapping(path = "/{id}")
    public ResponseEntity<Cargos> buscarPorId(@PathVariable long id)
    {
        return ResponseEntity.ok(cargosServico.buscarPorIdCargo(id));
    }

    @PostMapping(path = "/cadastrarCargo")
    public ResponseEntity<Cargos> cadastrarCargo(@RequestBody CargoPostResquestBody cargoPostResquestBody)
    {
        return new ResponseEntity<>(cargosServico.cadastrarCargo(cargoPostResquestBody), HttpStatus.CREATED);
    }

    @PutMapping(path = "/alterarCargo")
    public ResponseEntity<Void> alterarCargo(@RequestBody CargoPutResquestBody cargoPutResquestBody) {
        cargosServico.alterarCadastro(cargoPutResquestBody);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @DeleteMapping(path = "/{id}")
    public ResponseEntity<Void> deletarCargo(@PathVariable long id) {
        cargosServico.deletarCargo(id);
        return  new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
