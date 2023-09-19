package com.app.springapp.controller;

import com.app.springapp.entity.Hasta;

import org.springframework.web.bind.annotation.*;
import com.app.springapp.service.HastaService;

import java.util.List;

//@RestController
//@RequestMapping("/api/v1")
//public class HastaController {
//
//    private final HastaService hastaService;
//
//    public HastaController(HastaService hastaService) {
//        this.hastaService = hastaService;
//    }
//    @GetMapping("/hasta")
//    public List<HastaDTO> getAll(){
//        return hastaService.getAll();
//
//    }
//    @GetMapping
//    public ResponseEntity<List<Hasta>> getAllHasta() {
//        List<Hasta> hastalar = hastaService.getAllHasta();
//        return new ResponseEntity<>(hastalar, HttpStatus.OK);
//    }
//
//    @GetMapping("/{id}")
//    public Object get(@PathVariable Long id){
//        return  hastaService.get(id).orElseThrow(() -> new RuntimeException("Doktor bulunamadı!"));
//    }
//    @PostMapping("/hasta")
//    public Hasta create(@RequestBody Hasta hasta) {
//
//        return hastaService.save(hasta);
//    }
//    @PutMapping("/hasta")
//    public Hasta update(@RequestBody Hasta hasta ){
//
//        return hastaService.save(hasta);
//
//    }
//    @DeleteMapping("/hasta/{id}")
//    public Boolean delete(@PathVariable Long id){
//        hastaService.delete(id);
//        return true;
//
//    }
//
//
//
//}
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("api/v1")
public class HastaController {


    private final HastaService hastaService;

    public HastaController(HastaService hastaService) {
        this.hastaService = hastaService;
    }

    @GetMapping("/hasta")
    public List<Hasta> getAll() {
        return hastaService.getAll();
    }

    @GetMapping("/{id}")
    public Hasta get(@PathVariable Long hasta_id) {
        return hastaService.get(hasta_id).orElseThrow(() -> new RuntimeException("Hasta bulunamadı"));
    }


    @PostMapping("/hasta")
    public Hasta create(@RequestBody Hasta hasta) {
        return hastaService.save(hasta);
    }



    @PutMapping("/hasta")
    public Hasta update(@RequestBody Hasta hasta) {

        return hastaService.save(hasta);
    }

    @DeleteMapping("/hasta/{hasta_id}")
    public Boolean delete(@PathVariable Long hasta_id) {

        hastaService.delete(hasta_id);
        return true;
    }

}