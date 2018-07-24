package com.theoryheadstudios.demo.model;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "Songs", schema = "theoryheadstudios", catalog = "")
@IdClass(SongsEntityPK.class)
public class SongsEntity {
    private String artistName;
    private String userEmail;
    private int accountNumber;
    private String songName;
    private double lengthSeconds;
    private String albumName;
    private String sourceUrl;

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
    @Column(name = "song_name", nullable = false, length = 50)
    public String getSongName() {
        return songName;
    }

    public void setSongName(String songName) {
        this.songName = songName;
    }

    @Basic
    @Column(name = "length_seconds", nullable = false, precision = 0)
    public double getLengthSeconds() {
        return lengthSeconds;
    }

    public void setLengthSeconds(double lengthSeconds) {
        this.lengthSeconds = lengthSeconds;
    }

    @Basic
    @Column(name = "album_name", nullable = false, length = 50)
    public String getAlbumName() {
        return albumName;
    }

    public void setAlbumName(String albumName) {
        this.albumName = albumName;
    }

    @Basic
    @Column(name = "source_url", nullable = false, length = 2000)
    public String getSourceUrl() {
        return sourceUrl;
    }

    public void setSourceUrl(String sourceUrl) {
        this.sourceUrl = sourceUrl;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        SongsEntity that = (SongsEntity) o;
        return accountNumber == that.accountNumber &&
                Double.compare(that.lengthSeconds, lengthSeconds) == 0 &&
                Objects.equals(artistName, that.artistName) &&
                Objects.equals(userEmail, that.userEmail) &&
                Objects.equals(songName, that.songName) &&
                Objects.equals(albumName, that.albumName) &&
                Objects.equals(sourceUrl, that.sourceUrl);
    }

    @Override
    public int hashCode() {

        return Objects.hash(artistName, userEmail, accountNumber, songName, lengthSeconds, albumName, sourceUrl);
    }
}
