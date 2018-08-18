package com.theoryheadstudios.demo.model;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "Users", schema = "theoryheadstudios", catalog = "")
@IdClass(UsersEntityPK.class)
public class UsersEntity {
    private String userEmail;
    private int accountNumber;
    private String firstName;
    private String lastName;
    private String password;
    private String country;
    private String zip;
    private String timeZone;
    private String userName;
    private String socialLink1;
    private String socialLink2;
    private String socialLink3;
    private Integer pointsBalance;
    private String gender;
    private int id;
    private String dateOfBirth;

    @Id
    @Column(name = "user_email", nullable = false, length = 50)
    public String getUserEmail() {
        return userEmail;
    }

    public void setUserEmail(String userEmail) {
        this.userEmail = userEmail;
    }

    @Id
    @Column(name = "account_number", nullable = false)
    public int getAccountNumber() {
        return accountNumber;
    }

    public void setAccountNumber(int accountNumber) {
        this.accountNumber = accountNumber;
    }

    @Basic
    @Column(name = "first_name", nullable = true, length = 50)
    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    @Basic
    @Column(name = "last_name", nullable = true, length = 50)
    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    @Basic
    @Column(name = "password", nullable = true, length = 200)
    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    @Basic
    @Column(name = "country", nullable = true, length = 50)
    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    @Basic
    @Column(name = "zip", nullable = true, length = 50)
    public String getZip() {
        return zip;
    }

    public void setZip(String zip) {
        this.zip = zip;
    }

    @Basic
    @Column(name = "time_zone", nullable = true, length = 50)
    public String getTimeZone() {
        return timeZone;
    }

    public void setTimeZone(String timeZone) {
        this.timeZone = timeZone;
    }

    @Basic
    @Column(name = "user_name", nullable = true, length = 50)
    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    @Basic
    @Column(name = "social_link_1", nullable = true, length = 2000)
    public String getSocialLink1() {
        return socialLink1;
    }

    public void setSocialLink1(String socialLink1) {
        this.socialLink1 = socialLink1;
    }

    @Basic
    @Column(name = "social_link_2", nullable = true, length = 2000)
    public String getSocialLink2() {
        return socialLink2;
    }

    public void setSocialLink2(String socialLink2) {
        this.socialLink2 = socialLink2;
    }

    @Basic
    @Column(name = "social_link_3", nullable = true, length = 2000)
    public String getSocialLink3() {
        return socialLink3;
    }

    public void setSocialLink3(String socialLink3) {
        this.socialLink3 = socialLink3;
    }

    @Basic
    @Column(name = "points_balance", nullable = true)
    public Integer getPointsBalance() {
        return pointsBalance;
    }

    public void setPointsBalance(Integer pointsBalance) {
        this.pointsBalance = pointsBalance;
    }

    @Basic
    @Column(name = "gender", nullable = true, length = 11)
    public String getGender() {
        return gender;
    }

    public void setGender(String gender) { this.gender = gender; }

    @Basic
    @Column(name = "ID", nullable = false)
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    @Basic
    @Column(name = "date_of_birth", nullable = true, length = 200)
    public String getDateOfBirth() {
        return dateOfBirth;
    }

    public void setDateOfBirth(String dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        UsersEntity that = (UsersEntity) o;
        return accountNumber == that.accountNumber &&
                id == that.id &&
                Objects.equals(userEmail, that.userEmail) &&
                Objects.equals(firstName, that.firstName) &&
                Objects.equals(lastName, that.lastName) &&
                Objects.equals(password, that.password) &&
                Objects.equals(country, that.country) &&
                Objects.equals(zip, that.zip) &&
                Objects.equals(timeZone, that.timeZone) &&
                Objects.equals(userName, that.userName) &&
                Objects.equals(socialLink1, that.socialLink1) &&
                Objects.equals(socialLink2, that.socialLink2) &&
                Objects.equals(socialLink3, that.socialLink3) &&
                Objects.equals(pointsBalance, that.pointsBalance) &&
                Objects.equals(dateOfBirth, that.dateOfBirth) &&
                Objects.equals(gender, that.gender);
    }

    @Override
    public int hashCode() {

        return Objects.hash(userEmail, accountNumber, firstName, lastName, password, country, zip, timeZone, userName, socialLink1, socialLink2, socialLink3, pointsBalance, id, dateOfBirth, gender);
    }
}
