package com.theoryheadstudios.demo.model;

import javax.persistence.*;
import java.sql.Timestamp;
import java.util.Objects;

@Entity
@Table(name = "Debut_list", schema = "theoryheadstudios", catalog = "")
@IdClass(DebutListEntityPK.class)
public class DebutListEntity {
    private String debutId;
    private String artistName;
    private String userEmail;
    private int accountNumber;
    private Timestamp scheduledTime;
    private String serviceType;
    private int audienceCount;

    @Id
    @Column(name = "debut_id", nullable = false, length = 50)
    public String getDebutId() {
        return debutId;
    }

    public void setDebutId(String debutId) {
        this.debutId = debutId;
    }

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
    @Column(name = "scheduled_time", nullable = false)
    public Timestamp getScheduledTime() {
        return scheduledTime;
    }

    public void setScheduledTime(Timestamp scheduledTime) {
        this.scheduledTime = scheduledTime;
    }

    @Basic
    @Column(name = "service_type", nullable = false, length = 50)
    public String getServiceType() {
        return serviceType;
    }

    public void setServiceType(String serviceType) {
        this.serviceType = serviceType;
    }

    @Basic
    @Column(name = "audience_count", nullable = false)
    public int getAudienceCount() {
        return audienceCount;
    }

    public void setAudienceCount(int audienceCount) {
        this.audienceCount = audienceCount;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        DebutListEntity that = (DebutListEntity) o;
        return accountNumber == that.accountNumber &&
                audienceCount == that.audienceCount &&
                Objects.equals(debutId, that.debutId) &&
                Objects.equals(artistName, that.artistName) &&
                Objects.equals(userEmail, that.userEmail) &&
                Objects.equals(scheduledTime, that.scheduledTime) &&
                Objects.equals(serviceType, that.serviceType);
    }

    @Override
    public int hashCode() {

        return Objects.hash(debutId, artistName, userEmail, accountNumber, scheduledTime, serviceType, audienceCount);
    }
}
