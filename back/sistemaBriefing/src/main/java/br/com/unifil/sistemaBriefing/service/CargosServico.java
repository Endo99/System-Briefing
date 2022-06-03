package br.com.unifil.sistemaBriefing.service;


import br.com.unifil.sistemaBriefing.models.Cargos;
import br.com.unifil.sistemaBriefing.repository.CargosRepositorio;
import org.apache.tomcat.jni.Thread;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.ThreadLocalRandom;

@Service
public class CargosServico  {

    private static List<Cargos> cargos;

    static {
        cargos = new ArrayList<>(List.of(new Cargos(1L,"Desenvolvedor", "Wellington"), new Cargos(2L, "Quality Assecurance", "Fabiano")));
    }
    // private final CargosRepositorio cargoRepositorio;
    public List<Cargos> listarTodos() {
        return cargos;
    }

    public Cargos buscarPorId(long idCargo) {
        return cargos.stream()
                .filter(cargos -> cargos.getIdCargo() == idCargo)
                .findFirst()
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.BAD_REQUEST, "Cargo não encontrado"));
    }

    public Cargos cadastrarCargos(Cargos cargo)
    {
        cargo.setIdCargo(ThreadLocalRandom.current().nextLong(2, 10000));
        cargos.add(cargo);
        return cargo;
    }
}
