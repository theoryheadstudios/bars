package com.theoryheadstudios.demo;

import com.sendgrid.*;
import org.apache.tika.Tika;
import org.json.JSONObject;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import javax.sound.sampled.AudioFileFormat;
import javax.sound.sampled.AudioSystem;
import javax.sound.sampled.UnsupportedAudioFileException;
import java.io.File;
import java.io.IOException;
import java.net.URL;


@SpringBootApplication
public class DemoApplication {

	public static void main(String[] args) throws IOException {
		SpringApplication.run(DemoApplication.class, args);



		// using SendGrid's Java Library
// https://github.com/sendgrid/sendgrid-java
				Email from = new Email("admin@TheoryHeadStudios.com");
				String subject = "Sending with SendGrid is Fun";
				Email to = new Email("gacosta@g.clemson.edu");
				Content content = new Content("text/plain", "Welcome to BpM!!!!!");
				Mail mail = new Mail(from, subject, to, content);

				SendGrid sg = new SendGrid("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");
				Request request = new Request();
				try {
					request.setMethod(Method.POST);
					request.setEndpoint("mail/send");
					request.setBody(mail.build());
					Response response = sg.api(request);
					System.out.println(response.getStatusCode());
					System.out.println(response.getBody());
					System.out.println(response.getHeaders());
				} catch (IOException ex) {
					throw ex;
				}




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


		Tika tika = new Tika();
		try {
			String mediaType = tika.detect(new File("/Users/freddyacevedo/IdeaProjects/Bars2018/src/main/Bounce.mp3"));
			System.out.println(mediaType);
		} catch(IOException e) {
			System.err.println(e.getMessage());
		}
	}


	}



