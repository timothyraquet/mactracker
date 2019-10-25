package com.mactracker.controller;

import com.mactracker.model.Query;
import com.mactracker.model.TreeDataStorage_1;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/api")
public class TestEndpointsController {
    @GetMapping(value = "/testEndpoint", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity testEndpoint() {
        TreeDataStorage_1 treeDataStorage_1 = new TreeDataStorage_1();
        // Access Service here - service will most likely be connected to JPA Repository or however you guys want to connect to DB
        return ResponseEntity.ok(treeDataStorage_1.treeMapHashMap);
    }


    @PostMapping(value = "/query", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity queryEndpoint(@RequestBody Query query) {
        return ResponseEntity.ok(query);
    }

    @GetMapping(value = "/getTreeArray", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity getTreeArray() {
        // Access Service here - service will most likely be connected to JPA Repository or however you guys want to connect to DB
        return ResponseEntity.ok("Got tree array");
    }

//    @PostMapping("/putmappinghere")
//    public ResponseEntity<Object> postExample(@RequestBody String postExample) {
//        // Access Service here - service will be connected to JPA Repository
//        // See https://dzone.com/articles/jpa-tutorial-setting-jpa-java and https://spring.io/guides/gs/accessing-data-rest/
//        return ResponseEntity.ok("");
//    }
//
//    @PutMapping("/putmappinghere/{exampleOfPathVariable}")
//    public ResponseEntity<Object> updatePreferencePreset(@RequestBody String putExample, @PathVariable("exampleOfPathVariable") String pathVariableParameter) {
//        // See https://dzone.com/articles/jpa-tutorial-setting-jpa-java and https://spring.io/guides/gs/accessing-data-rest/
//        return ResponseEntity.ok("");
//    }

}
