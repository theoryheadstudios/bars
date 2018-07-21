package com.theoryheadstudios.demo.model;

import javax.persistence.Column;
import javax.persistence.Id;
import java.io.Serializable;
import java.util.Objects;

public class DebutListEntityPK implements Serializable {
    private String debutId;
    private String artistName;
    private String userEmail;
    private int accountNumber;

    @Column(name = "debut_id", nullable = false, length = 50)
    @Id
    public String getDebutId() {
        return debutId;
    }

    public void setDebutId(String debutId) {
        this.debutId = debutId;
    }

    @Column(name = "artist_name", nullable = false, length = 50)
    @Id
    public String getArtistName() {
        return artistName;
    }

    public void setArtistName(String artistName) {
        this.artistName = artistName;
    }

    @Column(name = "user_email", nullable = false, length = 50)
    @Id
    public String getUserEmail() {
        return userEmail;
    }

    public void setUserEmail(String userEmail) {
        this.userEmail = userEmail;
    }

    @Column(name = "account_number", nullable = false)
    @Id
    public int getAccountNumber() {
        return accountNumber;
    }

    public void setAccountNumber(int accountNumber) {
        this.accountNumber = accountNumber;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        DebutListEntityPK that = (DebutListEntityPK) o;
        return accountNumber == that.accountNumber &&
                Objects.equals(debutId, that.debutId) &&
                Objects.equals(artistName, that.artistName) &&
                Objects.equals(userEmail, that.userEmail);
    }

    @Override
    public int hashCode() {

        return Objects.hash(debutId, artistName, userEmail, accountNumber);
    }
}
