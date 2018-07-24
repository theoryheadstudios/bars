package com.theoryheadstudios.demo.model;

import javax.persistence.Column;
import javax.persistence.Id;
import java.io.Serializable;
import java.util.Objects;

public class ProductsPurchasedEntityPK implements Serializable {
    private String userEmail;
    private int accountNumber;
    private int vendorAccountNumber;
    private String transactionNumber;

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

    @Column(name = "vendor_account_number", nullable = false)
    @Id
    public int getVendorAccountNumber() {
        return vendorAccountNumber;
    }

    public void setVendorAccountNumber(int vendorAccountNumber) {
        this.vendorAccountNumber = vendorAccountNumber;
    }

    @Column(name = "transaction_number", nullable = false, length = 50)
    @Id
    public String getTransactionNumber() {
        return transactionNumber;
    }

    public void setTransactionNumber(String transactionNumber) {
        this.transactionNumber = transactionNumber;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        ProductsPurchasedEntityPK that = (ProductsPurchasedEntityPK) o;
        return accountNumber == that.accountNumber &&
                vendorAccountNumber == that.vendorAccountNumber &&
                Objects.equals(userEmail, that.userEmail) &&
                Objects.equals(transactionNumber, that.transactionNumber);
    }

    @Override
    public int hashCode() {

        return Objects.hash(userEmail, accountNumber, vendorAccountNumber, transactionNumber);
    }
}
