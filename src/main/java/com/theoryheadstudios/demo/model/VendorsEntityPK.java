package com.theoryheadstudios.demo.model;

import javax.persistence.Column;
import javax.persistence.Id;
import java.io.Serializable;
import java.util.Objects;

public class VendorsEntityPK implements Serializable {
    private int vendorAccountNumber;
    private String userEmail;
    private int accountNumber;

    @Column(name = "vendor_account_number", nullable = false)
    @Id
    public int getVendorAccountNumber() {
        return vendorAccountNumber;
    }

    public void setVendorAccountNumber(int vendorAccountNumber) {
        this.vendorAccountNumber = vendorAccountNumber;
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
        VendorsEntityPK that = (VendorsEntityPK) o;
        return vendorAccountNumber == that.vendorAccountNumber &&
                accountNumber == that.accountNumber &&
                Objects.equals(userEmail, that.userEmail);
    }

    @Override
    public int hashCode() {

        return Objects.hash(vendorAccountNumber, userEmail, accountNumber);
    }
}
