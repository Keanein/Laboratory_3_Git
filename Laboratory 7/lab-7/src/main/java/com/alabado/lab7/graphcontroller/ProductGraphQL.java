package com.alabado.lab7.graphcontroller;

import com.alabado.lab7.model.Product;
import com.alabado.lab7.service.ProductService;
import org.springframework.graphql.data.method.annotation.*;
import org.springframework.stereotype.Controller;

import java.util.List;

@Controller
public class ProductGraphQL {

    private final ProductService service;

    public ProductGraphQL(ProductService service) {
        this.service = service;
    }

    // QUERIES

    @QueryMapping
    public List<Product> getAllProducts() {
        return service.getAll();
    }

    @QueryMapping
    public Product getProductById(@Argument Long id) {
        return service.getById(id);
    }

    // MUTATIONS

    @MutationMapping
    public Product createProduct(@Argument String name, @Argument Double price) {
        Product p = new Product(null, name, price);
        return service.create(p);
    }

    @MutationMapping
    public Product updateProduct(@Argument Long id, @Argument String name, @Argument Double price) {
        Product p = new Product(id, name, price);
        return service.update(id, p);
    }

    @MutationMapping
    public Boolean deleteProduct(@Argument Long id) {
        return service.delete(id);
    }
}
