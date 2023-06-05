package com.fsasbt.ecommerce.entity;

import jakarta.persistence.*;
import lombok.Data;
import lombok.Generated;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;
import org.springframework.data.annotation.CreatedDate;

import java.math.BigDecimal;
import java.util.Date;

@Entity
@Table(name="product")
@Data
public class Product
{
      @Id
      @GeneratedValue(strategy = GenerationType.IDENTITY)
      @Column(name="id")
      private Long id;
    @Column(name="sku")
      private String sku;

    @ManyToOne
    @JoinColumn(name="category_id",nullable = false)
    private ProductCategory category;
    @Column(name="name")
      private String name;
    @Column(name="description")
      private  String description;
    @Column(name="unit_price")
      private BigDecimal  unitPrice;
    @Column(name="image_Url")
      private String imageUrl;
    @Column(name="active")
      private  boolean active;
    @Column(name="units_in_stock")
      private int unitsInStock;
    @Column(name="date_Created")
    @CreationTimestamp
      private Date dateCreated;
    @Column(name="last_Updated")
    @UpdateTimestamp
      private Date lastUpdated;
}
