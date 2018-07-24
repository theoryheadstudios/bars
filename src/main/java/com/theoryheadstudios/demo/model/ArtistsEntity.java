package com.theoryheadstudios.demo.model;

import javax.persistence.*;
import java.sql.Timestamp;
import java.util.Objects;

@Entity
@Table(name = "Artists", schema = "theoryheadstudios", catalog = "")
@IdClass(ArtistsEntityPK.class)
public class ArtistsEntity {
    private String artistName;
    private String userEmail;
    private int accountNumber;
    private Timestamp joinDate;
    private String genre;

    @Id
    @Column(name = "artist_name", nullable = false, length = 50)
    public String getArtistName() {
        return artistName;
    }

    public void setArtistName(String artistName) {
        this.artistName = artistName;
    }

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
    @Column(name = "join_date", nullable = false)
    public Timestamp getJoinDate() {
        return joinDate;
    }

    public void setJoinDate(Timestamp joinDate) {
        this.joinDate = joinDate;
    }

    @Basic
    @Column(name = "genre", nullable = false, length = 50)
    public String getGenre() {
        return genre;
    }

    public void setGenre(String genre) {
        this.genre = genre;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        ArtistsEntity that = (ArtistsEntity) o;
        return accountNumber == that.accountNumber &&
                Objects.equals(artistName, that.artistName) &&
                Objects.equals(userEmail, that.userEmail) &&
                Objects.equals(joinDate, that.joinDate) &&
                Objects.equals(genre, that.genre);
    }

    @Override
    public int hashCode() {

        return Objects.hash(artistName, userEmail, accountNumber, joinDate, genre);
    }
}
