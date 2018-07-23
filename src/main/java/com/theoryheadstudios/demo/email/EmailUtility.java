package com.theoryheadstudios.demo.email;

import com.sendgrid.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;

import java.io.IOException;

public class EmailUtility {
    @Autowired
    private Environment environment;
    String Sender;
    String Subject;
    String Recipient;
    String Content;
    String SendGridEnpoint = "mail/send";
    String ContentType = "text/plain";

   public EmailUtility() throws IOException{
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
    }

    public EmailUtility(String Sender, String Subject, String Recipient, String Content, String ContentType){
        this.Sender = Sender;
        this.Subject = Subject;
        this. Recipient = Recipient;
        this.Content = Content;
        this.ContentType = ContentType;
        // using SendGrid's Java Library
// https://github.com/sendgrid/sendgrid-java



    }
    public void sendEmail() throws IOException{
        Email from = new Email(this.Sender);
        String subject = this.Subject;
        Email to = new Email(this.Recipient);
        Content content = new Content(ContentType, this.Content);
        Mail mail = new Mail(from, subject, to, content);

        SendGrid sg = new SendGrid(environment.getProperty("SEND_GRID_API_KEY"));
        Request request = new Request();
        try {
            request.setMethod(Method.POST);
            request.setEndpoint(this.SendGridEnpoint);
            request.setBody(mail.build());
            Response response = sg.api(request);
            System.out.println(response.getStatusCode());
            System.out.println(response.getBody());
            System.out.println(response.getHeaders());
        } catch (IOException ex) {
            throw ex;
        }
    }
    public String getSender() {
        return Sender;
    }

    public void setSender(String sender) {
        Sender = sender;
    }

    public String getSubject() {
        return Subject;
    }

    public void setSubject(String subject) {
        Subject = subject;
    }

    public String getRecipient() {
        return Recipient;
    }

    public void setRecipient(String recipient) {
        Recipient = recipient;
    }

    public String getContent() {
        return Content;
    }

    public void setContent(String content) {
        Content = content;
    }

    public String getSendGridEnpoint() {
        return SendGridEnpoint;
    }

    public void setSendGridEnpoint(String sendGridEnpoint) {
        SendGridEnpoint = sendGridEnpoint;
    }

    public String getContentType() {
        return ContentType;
    }

    public void setContentType(String contentType) {
        ContentType = contentType;
    }

}
