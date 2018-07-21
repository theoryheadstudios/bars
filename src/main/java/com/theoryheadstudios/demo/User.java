package com.theoryheadstudios.demo;

import com.fasterxml.jackson.annotation.JsonGetter;
import com.fasterxml.jackson.annotation.JsonSetter;

import javax.persistence.*;

@Entity

@Table(name = "Users", schema = "theoryheadstudiosdb", catalog = "")
public class User {
    @Id
    @Column(name = "ID", unique=true, nullable=false)
    @GeneratedValue(strategy=GenerationType.AUTO)
    private int id;
    @Column(name = "user_email", updatable = false, insertable = false)
    private String user_email;
    @Column(name = "account_number")
    private Integer account_number;
    @Column(name = "first_name")
    private String first_name;
    @Column(name = "last_name")
    private String last_name;
    @Column(name = "password")
    private String password;
    @Column(name = "date_of_birth")
    private String date_of_birth;
    @Column(name = "country")
    private String country;
    @Column(name = "zip")
    private String zip;
    @Column(name = "time_zone")
    private String time_zone;
    @Column(name = "user_name")
    private String user_name;
    @Column(name = "social_link_1")
    private String social_link_1;
    @Column(name = "social_link_2")
    private String social_link_2;
    @Column(name = "social_link_3")
    private String social_link_3;
    @Column(name = "points_balance")
    private int points_balance;


    public User(){

    }
    public User(String user_email, Integer account_number,
                String first_name, String last_name,
                String password, String date_of_birth,
                String country, String zip,
                String time_zone, String user_name,
                String social_link_1, String social_link_2,
                String social_link_3, int points_balance){
        this.user_email = user_email;
        this.account_number = account_number;
        this.first_name = first_name;
        this.last_name = last_name;
        this.password = password;
        this.date_of_birth = date_of_birth;
        this.country = country;
        this.zip = zip;
        this.time_zone = time_zone;
        this.user_name = user_name;
        this.social_link_1 = social_link_1;
        this.social_link_2 = social_link_2;
        this.social_link_3 = social_link_3;
        this.points_balance = points_balance;

    }

    public int getId(){ return id;}
    public void setId(int ID){id = ID;}
    //@JsonGetter("userEmail")
    public String getUser_email() {
        return user_email;
    }

    //@JsonSetter("userEmail")
    public void setUser_email(String user_email) {
        this.user_email = user_email;
    }
    //@JsonGetter("accountNumber")
    public Integer getAccount_number() {
        return account_number;
    }
    //@JsonSetter("accountNumber")
    public void setAccount_number(Integer account_number) {
        this.account_number = account_number;
    }
    //@JsonGetter("firstName")
    public String getFirst_name() {
        return first_name;
    }
    //@JsonSetter("firstName")
    public void setFirst_name(String first_name) {
        this.first_name = first_name;
    }
    //@JsonGetter("lastName")
    public String getLast_name() {
        return last_name;
    }
    //@JsonSetter("lastName")
    public void setLast_name(String last_name) {
        this.last_name = last_name;
    }
    //@JsonGetter("password")
    public String getPassword() {
        return password;
    }
    //@JsonSetter("password")
    public void setPassword(String password) {
        this.password = password;
    }
    //@JsonGetter("dateOfBirth")
    public String getDate_of_birth() {
        return date_of_birth;
    }
    //@JsonSetter("dateOfBirth")
    public void setDate_of_birth(String date_of_birth) {
        this.date_of_birth = date_of_birth;
    }
    //@JsonGetter("country")
    public String getCountry() {
        return country;
    }
    //@JsonSetter("country")
    public void setCountry(String country) {
        this.country = country;
    }
    //@JsonGetter("zip")
    public String getZip() {
        return zip;
    }
    //@JsonSetter("zip")
    public void setZip(String zip) {
        this.zip = zip;
    }
    //@JsonGetter("timeZone")
    public String getTime_zone() {
        return time_zone;
    }
    //@JsonSetter("timeZone")
    public void setTime_zone(String time_zone) {
        this.time_zone = time_zone;
    }
    //@JsonGetter("userName")
    public String getUser_name() {
        return user_name;
    }
    //@JsonSetter("userName")
    public void setUser_name(String user_name) {
        this.user_name = user_name;
    }
    //@JsonGetter("socialLink1")
    public String getSocial_link_1() {
        return social_link_1;
    }
    //@JsonSetter("socialLink1")
    public void setSocial_link_1(String social_link_1) {
        this.social_link_1 = social_link_1;
    }
    //@JsonGetter("socialLink2")
    public String getSocial_link_2() {
        return social_link_2;
    }
    //@JsonSetter("socialLink2")
    public void setSocial_link_2(String social_link_2) {
        this.social_link_2 = social_link_2;
    }
    //@JsonGetter("socialLink3")
    public String getSocial_link_3() {
        return social_link_3;
    }
    //@JsonSetter("socialLink3")
    public void setSocial_link_3(String social_link_3) {
        this.social_link_3 = social_link_3;
    }
    //@JsonGetter("pointsBalance")
    public int getPoints_balance() {
        return points_balance;
    }
   // @JsonSetter("pointsBalance")
    public void setPoints_balance(int points_balance) {
        this.points_balance = points_balance;
    }
}
