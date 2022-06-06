package br.com.unifil.sistemaBriefing.service;


import br.com.unifil.sistemaBriefing.models.Cargos;
import br.com.unifil.sistemaBriefing.repository.CargosRepositorio;
import br.com.unifil.sistemaBriefing.request.CargoPostResquestBody;
import br.com.unifil.sistemaBriefing.request.CargoPutResquestBody;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.ThreadLocalRandom;

@Service
@RequiredArgsConstructor
public class CargosServico  {

    private final CargosRepositorio cargosRepositorio;

    public List<Cargos> listarTodos() {
        return cargosRepositorio.findAll();
    }

    public Cargos buscarPorIdCargo(long id) {
        return cargosRepositorio.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.BAD_REQUEST, "Cargo não encontrado"));
    }

    public Cargos cadastrarCargo(CargoPostResquestBody cargoPostResquestBody) {
        return cargosRepositorio.save(Cargos.builder().titulo(cargoPostResquestBody.getTitulo())
                        .usuario(cargoPostResquestBody.getUsuario())
                .build());
    }

    public String deletarCargo(long id) {
        cargosRepositorio.delete(buscarPorIdCargo(id));
        return "Deltado com Sucasso!";
    }

    public String alterarCadastro(CargoPutResquestBody cargoPutResquestBody) {
        Cargos salvarCargo = buscarPorIdCargo(cargoPutResquestBody.getIdCargo());
        Cargos cargo = Cargos.builder()
                .idCargo(salvarCargo.getIdCargo())
                .titulo(cargoPutResquestBody.getTitulo())
                .usuario(cargoPutResquestBody.getUsuario())
                .build();

        cargosRepositorio.save(cargo);
        return "Alterado com Sucaesso!";
    }
}
