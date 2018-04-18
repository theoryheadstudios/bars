package com.theoryheadstudios.demo;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.theoryheadstudios.demo.weeclo.entities.UserEntity;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.PersistenceException;
import javax.persistence.Query;
import javax.transaction.Transactional;
import java.util.Arrays;
import java.util.Date;
import java.util.List;

@RestController
public class TopicController {
    private final Logger log = LoggerFactory.getLogger(this.getClass());
        @Autowired
        TopicService topicService;

        @Autowired
        private Encryptor encryptor;

        private BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        @PersistenceContext
        EntityManager em;

        @RequestMapping("/topics")
        public List<Topic> getAllTopics(){
            return Arrays.asList(
                    new Topic("spring", "Spring Framework", "Spring Framework Description"),
                    new Topic("java", "Core Java", "Core Java Description"),
                    new Topic("javascript", "JavaScript", "JavaScript Description")
            );
        }

        @RequestMapping("/postArtist2")
    public void postArtist(@RequestBody User artist){
        topicService.addArtist(artist);
    }


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

    @Transactional
    @RequestMapping(value = "/createUser", method = RequestMethod.POST)
    public String createUser(@RequestBody User user){
            try{
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
    @Transactional
    @RequestMapping(value = "/createWeeCloUser", method = RequestMethod.POST)
    public String createWeeCloUser(@RequestBody UserEntity weeCloUser){
        try{
            weeCloUser.setPassword(passwordEncoder.encode(weeCloUser.getPassword()));
            em.persist(weeCloUser);
            em.flush();
            System.out.println("Input user password after encryption: "+ weeCloUser.getPassword());

            //Compare User input with encrypted
            if(passwordEncoder.matches("password", weeCloUser.getPassword())){
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





}

