package com.app.springapp.service.impl;


import com.app.springapp.entity.Hasta;
import com.app.springapp.repository.HastaRepository;
import com.app.springapp.service.HastaService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

//@Service
//public class HastaServiceImpl implements HastaService {
//    private final HastaRepository hastaRepository;
//    private final HastaMapper hastaMapper = HastaMapper.MAPPER;
//
//    public HastaServiceImpl(HastaRepository hastaRepository) {
//        this.hastaRepository = hastaRepository;
//    }
//
//    @Override
//    public Hasta save(Hasta hasta) {
//        return hastaRepository.save(hasta);
//    }
//
//
//    @Override
//    public Optional<Hasta> get(Long id) {
//        return hastaRepository.findById(id);
//    }
//
//    @Override
//    public List<Hasta> getAllHasta() {
//
//        return hastaRepository.findAll();
//    }
//
//
//
//    @Override
//    public void delete(Long id) {
//        hastaRepository.deleteById(id);
//    }
//
//    @Override
//    @Transactional(readOnly = true)
//    public List<HastaDTO> getAll() {
//        List<Hasta> hastaList = hastaRepository.findAll();
//        return hastaList
//                .stream()
//                .map(hasta-> hastaMapper.toDto(hasta))
//                .collect(Collectors.toList());
//    }
//}
@Service
public class HastaServiceImpl implements HastaService {

    private final HastaRepository hastaRepository;

    public HastaServiceImpl(HastaRepository hastaRepository) {
        this.hastaRepository = hastaRepository;
    }

    @Override
    public Hasta save(Hasta hasta) {
        return hastaRepository.save(hasta);
    }

    @Override
    @Transactional(readOnly = true)
    public List<Hasta> getAll() {
        return hastaRepository.findAll();
    }

    @Override
    public Optional<Hasta> get(Long id) {
        return hastaRepository.findById(id);
    }

    @Override
    public void delete(Long id) {
        hastaRepository.deleteById(id);
    }


}

