package com.theoryheadstudios.demo;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.persistence.*;
import javax.transaction.Transactional;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.Arrays;
import java.util.Date;
import java.util.List;

@RestController
public class MainController {

    private final Logger log = LoggerFactory.getLogger(this.getClass());

        @Autowired
        private Encryptor encryptor;

        private BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        @PersistenceContext
        EntityManager em;


        @Transactional
        @RequestMapping("/postArtist")
    public List<User> getArtist(){
            Date date = new Date();

            User user = new User();
            user.setAccount_number(302040);
            user.setCountry("Mexico");
            user.setDate_of_birth("05/17/1993");
            user.setFirst_name("ShitHead");
            user.setLast_name("Bozo");
            user.setPassword(passwordEncoder.encode("as"));
            user.setPoints_balance(5);
            user.setSocial_link_1("http://myspace.com/bump");
            user.setSocial_link_2("http://facebook.com/bump2");
            user.setSocial_link_3("http://soundcloud.com/bump3");
            user.setTime_zone("Western");
            user.setZip("30237");
            user.setUser_name("Goyito");
            user.setUser_email("freddyace@ayhoo.com");
            try {
                em.persist(user);
                em.flush();
            log.info("Persisted data successfully...");
            }catch(Exception e){

            }


            return Arrays.asList(user);


        }
@Transactional
    @RequestMapping(value = "/listOfAllUsers", method = RequestMethod.GET)
    public String listOfAllUsers() throws JsonProcessingException {

        Query query = em.createNativeQuery("SELECT * FROM Users", User.class);
        @SuppressWarnings("unchecked")
        List<User> items = (List<User>) query.getResultList();
        ObjectMapper objectMapper = new ObjectMapper();
        String listString = objectMapper.writeValueAsString(items);
        System.out.println("{ \"users\":"+listString+"}");
        log.info("SUCCESS!!!");
        return "{ \"users\":"+listString+"}";

    }

    public void printAllItems(User user){
        System.out.println(user.getFirst_name());
        System.out.println(user.getLast_name());
        System.out.println(user.getUser_email());
        System.out.println(user.getPassword());
        System.out.println(user.getAccount_number());
        System.out.println(user.getDate_of_birth());
        System.out.println(user.getCountry());
        System.out.println(user.getZip());
        System.out.println(user.getTime_zone());
        System.out.println(user.getUser_name());
        System.out.println(user.getSocial_link_1());
        System.out.println(user.getSocial_link_2());
        System.out.println(user.getSocial_link_3());
        System.out.println(user.getPoints_balance());

    }

    @Transactional
    @RequestMapping(value = "/createUser", method = RequestMethod.POST, headers = "Accept=*/*")
    public String createUser(@RequestBody User user){
            try{
                printAllItems(user);
                user.setPassword("example");
                user.setAccount_number(user.getId());
                System.out.println(user.getPassword());
                System.out.println("Input user password before encryption: "+ user.getPassword());
                user.setPassword(passwordEncoder.encode(user.getPassword()));
                em.persist(user);
                em.flush();
               System.out.println("Input user password after encryption: "+ user.getPassword());

               //Compare User input with encrypted
               if(passwordEncoder.matches("password", user.getPassword())){
                   System.out.println("True");
               }
               else{
                   System.out.println("False");
               }
                return "Success";
            }
        catch(PersistenceException p){
                p.printStackTrace();
        }catch (Exception e){
                e.printStackTrace();
            }
        return "Failure to create account";


    }

    @RequestMapping(value = "/uploadFile", method = RequestMethod.POST, consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<Object> uploadFile(@RequestParam("file") MultipartFile file) throws IOException{
            File convertFile = new File("/Users/freddyacevedo/IdeaProjects/Bars2018/src/main/"+file.getOriginalFilename());
            convertFile.createNewFile();
        FileOutputStream fout = new FileOutputStream(convertFile);
        fout.write(file.getBytes());
            return new ResponseEntity<>("File is uploaded successfully", HttpStatus.OK);

    }


//    @PostMapping(value = "/uploadFile2", method=Reqconsumes = MediaType.MULTIPART_FORM_DATA_VALUE)
//    public ResponseEntity<Object> uploadFile2(@RequestParam("file") MultipartFile file2) throws IOException{
//        File convertFile = new File("/Users/freddyacevedo/IdeaProjects/Bars2018/src/main/"+file2.getOriginalFilename());
//        convertFile.createNewFile();
//        FileOutputStream fout = new FileOutputStream(convertFile);
//        fout.write(file2.getBytes());
//        return new ResponseEntity<>("File is uploaded successfully", HttpStatus.OK);
//
//    }






}

