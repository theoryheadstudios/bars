package com.theoryheadstudios.demo;

import com.fasterxml.jackson.annotation.JsonGetter;
import com.fasterxml.jackson.annotation.JsonSetter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity

@Table(name = "Users")
public class User {
    @Id
    //@Column(name = "user_email")
    private String user_email;
    //@Column(name = "user_email")
    private Integer account_number;
    //@Column(name = "user_email")
    private String first_name;
    //@Column(name = "user_email")
    private String last_name;
    //@Column(name = "user_email")
    private String password;
    //@Column(name = "user_email")
    private String date_of_birth;
    //@Column(name = "user_email")
    private String country;
    //@Column(name = "user_email")
    private String zip;
    //@Column(name = "user_email")
    private String time_zone;
    //@Column(name = "user_email")
    private String user_name;
    //@Column(name = "user_email")
    private String social_link_1;
    //@Column(name = "user_email")
    private String social_link_2;
    //@Column(name = "user_email")
    private String social_link_3;
    //@Column(name = "user_email")
    private int points_balance;

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
