package com.theoryheadstudios.demo.model;

import javax.persistence.Column;
import javax.persistence.Id;
import java.io.Serializable;
import java.util.Objects;

public class ProductsForSaleEntityPK implements Serializable {
    private String itemId;
    private int vendorAccountNumber;
    private String userEmail;
    private int accountNumber;

    @Column(name = "item_id", nullable = false, length = 50)
    @Id
    public String getItemId() {
        return itemId;
    }

    public void setItemId(String itemId) {
        this.itemId = itemId;
    }

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
        ProductsForSaleEntityPK that = (ProductsForSaleEntityPK) o;
        return vendorAccountNumber == that.vendorAccountNumber &&
                accountNumber == that.accountNumber &&
                Objects.equals(itemId, that.itemId) &&
                Objects.equals(userEmail, that.userEmail);
    }

    @Override
    public int hashCode() {

        return Objects.hash(itemId, vendorAccountNumber, userEmail, accountNumber);
    }
}
