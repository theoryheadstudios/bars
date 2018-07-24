package com.theoryheadstudios.demo.model;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "Vendors", schema = "theoryheadstudios", catalog = "")
@IdClass(VendorsEntityPK.class)
public class VendorsEntity {
    private int vendorAccountNumber;
    private String userEmail;
    private int accountNumber;
    private int quantityOfProductsInStock;
    private String vendorName;
    private int productsSold;

    @Id
    @Column(name = "vendor_account_number", nullable = false)
    public int getVendorAccountNumber() {
        return vendorAccountNumber;
    }

    public void setVendorAccountNumber(int vendorAccountNumber) {
        this.vendorAccountNumber = vendorAccountNumber;
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
    @Column(name = "quantity_of_products_in_stock", nullable = false)
    public int getQuantityOfProductsInStock() {
        return quantityOfProductsInStock;
    }

    public void setQuantityOfProductsInStock(int quantityOfProductsInStock) {
        this.quantityOfProductsInStock = quantityOfProductsInStock;
    }

    @Basic
    @Column(name = "vendor_name", nullable = false, length = 50)
    public String getVendorName() {
        return vendorName;
    }

    public void setVendorName(String vendorName) {
        this.vendorName = vendorName;
    }

    @Basic
    @Column(name = "products_sold", nullable = false)
    public int getProductsSold() {
        return productsSold;
    }

    public void setProductsSold(int productsSold) {
        this.productsSold = productsSold;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        VendorsEntity that = (VendorsEntity) o;
        return vendorAccountNumber == that.vendorAccountNumber &&
                accountNumber == that.accountNumber &&
                quantityOfProductsInStock == that.quantityOfProductsInStock &&
                productsSold == that.productsSold &&
                Objects.equals(userEmail, that.userEmail) &&
                Objects.equals(vendorName, that.vendorName);
    }

    @Override
    public int hashCode() {

        return Objects.hash(vendorAccountNumber, userEmail, accountNumber, quantityOfProductsInStock, vendorName, productsSold);
    }
}
