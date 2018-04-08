package com.theoryheadstudios.demo;

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

            em.persist(user);
            em.flush();


            return Arrays.asList(user);


        }
@Transactional
    @RequestMapping("/foo")
    public List<User> foo(){

        Query query = em.createNativeQuery("SELECT * FROM Users", User.class);
        @SuppressWarnings("unchecked")
        List<User> items = (List<User>) query.getResultList();

        return items;


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





}

