package shoppinglist.entity;

import javax.persistence.*;

//        •	id – technology-dependent identifier (ObjectID for JavaScript, int for all other technologies)
//        •	priority – non-null integer
//        •	name – non-empty text
//        •	quantity – non-null integer
//        •	status – non-empty text (will either be “bought” or “not bought”).


@Entity
@Table(name = "products")
public class Product {

    private Integer id;

    private Integer priority;

    private String name;

    private Integer quantity;

    private  String status;

    public Product(Integer priority, String name, Integer quantity, String status) {
        this.priority = priority;
        this.name = name;
        this.quantity = quantity;
        this.status = status;
    }


    public Product() {
    }

    @Id

    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    @Column(name = "priority", nullable = false)
    public Integer getPriority() {
        return priority;
    }

    public void setPriority(Integer priority) {
        this.priority = priority;
    }

    @Column(name = "name", nullable = false)
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Column(name = "quantity", nullable = false)
    public Integer getQuantity() {
        return quantity;
    }


    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }

    @Column(name = "status", nullable = false)
    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}
