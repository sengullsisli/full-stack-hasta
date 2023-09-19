package com.app.springapp.service;



import com.app.springapp.entity.Hasta;

import java.util.List;
import java.util.Optional;
//
//
//
//public interface HastaService {
//    List<HastaDTO> getAll();
//    Hasta save(Hasta hasta);
//    void delete(Long id);
//    Optional<Hasta> get(Long id);
//    List<Hasta> getAllHasta();

//}
public interface HastaService {
    Hasta save(Hasta hasta);

    List<Hasta> getAll();

    Optional<Hasta> get(Long id);

    void delete(Long id);


}

