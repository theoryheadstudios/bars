package com.theoryheadstudios.demo;

import com.sendgrid.*;
import org.apache.tika.Tika;
import org.json.JSONObject;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import java.io.File;
import java.io.IOException;
import java.net.URL;


@SpringBootApplication
public class DemoApplication {

	public static void main(String[] args) throws IOException {
		SpringApplication.run(DemoApplication.class, args);








		User artist = new User();
		artist.setId(1);
		artist.setAccount_number(302030);
		artist.setCountry("Mexico");
		artist.setDate_of_birth("05/17/1993");
		artist.setFirst_name("Freddy");
		artist.setLast_name("Acevedo");
		artist.setPassword("password");
		artist.setPoints_balance(4);
		artist.setSocial_link_1("http://myspace.com/goyo");
		artist.setSocial_link_2("http://facebook.com/goyo");
		artist.setSocial_link_3("http://soundcloud.com/goyo");
		artist.setTime_zone("Eastern");
		artist.setZip("30236");
		artist.setUser_name("Goyo");
		artist.setUser_email("freddyace1993@gmail.com");

		JSONObject jsonObject = new JSONObject(artist);
		System.out.println(jsonObject);


	}


	}



