package com.theoryheadstudios.demo.model;

import javax.persistence.*;
import java.sql.Timestamp;
import java.util.Objects;

@Entity
@Table(name = "Products_purchased", schema = "theoryheadstudios", catalog = "")
@IdClass(ProductsPurchasedEntityPK.class)
public class ProductsPurchasedEntity {
    private String userEmail;
    private int accountNumber;
    private int vendorAccountNumber;
    private String transactionNumber;
    private String itemId;
    private int quantity;
    private Timestamp transactionDate;

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

    @Id
    @Column(name = "vendor_account_number", nullable = false)
    public int getVendorAccountNumber() {
        return vendorAccountNumber;
    }

    public void setVendorAccountNumber(int vendorAccountNumber) {
        this.vendorAccountNumber = vendorAccountNumber;
    }

    @Id
    @Column(name = "transaction_number", nullable = false, length = 50)
    public String getTransactionNumber() {
        return transactionNumber;
    }

    public void setTransactionNumber(String transactionNumber) {
        this.transactionNumber = transactionNumber;
    }

    @Basic
    @Column(name = "item_id", nullable = false, length = 50)
    public String getItemId() {
        return itemId;
    }

    public void setItemId(String itemId) {
        this.itemId = itemId;
    }

    @Basic
    @Column(name = "quantity", nullable = false)
    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    @Basic
    @Column(name = "transaction_date", nullable = false)
    public Timestamp getTransactionDate() {
        return transactionDate;
    }

    public void setTransactionDate(Timestamp transactionDate) {
        this.transactionDate = transactionDate;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        ProductsPurchasedEntity that = (ProductsPurchasedEntity) o;
        return accountNumber == that.accountNumber &&
                vendorAccountNumber == that.vendorAccountNumber &&
                quantity == that.quantity &&
                Objects.equals(userEmail, that.userEmail) &&
                Objects.equals(transactionNumber, that.transactionNumber) &&
                Objects.equals(itemId, that.itemId) &&
                Objects.equals(transactionDate, that.transactionDate);
    }

    @Override
    public int hashCode() {

        return Objects.hash(userEmail, accountNumber, vendorAccountNumber, transactionNumber, itemId, quantity, transactionDate);
    }
}
