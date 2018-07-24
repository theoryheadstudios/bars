package com.theoryheadstudios.demo.model;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "Products_for_sale", schema = "theoryheadstudios", catalog = "")
@IdClass(ProductsForSaleEntityPK.class)
public class ProductsForSaleEntity {
    private String itemId;
    private int vendorAccountNumber;
    private String userEmail;
    private int accountNumber;
    private String itemName;
    private String itemDescription;
    private String itemPricePoints;
    private String itemImageUrl;
    private int itemQuantity;

    @Id
    @Column(name = "item_id", nullable = false, length = 50)
    public String getItemId() {
        return itemId;
    }

    public void setItemId(String itemId) {
        this.itemId = itemId;
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
    @Column(name = "item_name", nullable = false, length = 50)
    public String getItemName() {
        return itemName;
    }

    public void setItemName(String itemName) {
        this.itemName = itemName;
    }

    @Basic
    @Column(name = "item_description", nullable = false, length = 1000)
    public String getItemDescription() {
        return itemDescription;
    }

    public void setItemDescription(String itemDescription) {
        this.itemDescription = itemDescription;
    }

    @Basic
    @Column(name = "item_price_points", nullable = false, length = 50)
    public String getItemPricePoints() {
        return itemPricePoints;
    }

    public void setItemPricePoints(String itemPricePoints) {
        this.itemPricePoints = itemPricePoints;
    }

    @Basic
    @Column(name = "item_image_url", nullable = false, length = 2000)
    public String getItemImageUrl() {
        return itemImageUrl;
    }

    public void setItemImageUrl(String itemImageUrl) {
        this.itemImageUrl = itemImageUrl;
    }

    @Basic
    @Column(name = "item_quantity", nullable = false)
    public int getItemQuantity() {
        return itemQuantity;
    }

    public void setItemQuantity(int itemQuantity) {
        this.itemQuantity = itemQuantity;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        ProductsForSaleEntity that = (ProductsForSaleEntity) o;
        return vendorAccountNumber == that.vendorAccountNumber &&
                accountNumber == that.accountNumber &&
                itemQuantity == that.itemQuantity &&
                Objects.equals(itemId, that.itemId) &&
                Objects.equals(userEmail, that.userEmail) &&
                Objects.equals(itemName, that.itemName) &&
                Objects.equals(itemDescription, that.itemDescription) &&
                Objects.equals(itemPricePoints, that.itemPricePoints) &&
                Objects.equals(itemImageUrl, that.itemImageUrl);
    }

    @Override
    public int hashCode() {

        return Objects.hash(itemId, vendorAccountNumber, userEmail, accountNumber, itemName, itemDescription, itemPricePoints, itemImageUrl, itemQuantity);
    }
}
