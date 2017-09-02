package shoppinglist.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import shoppinglist.bindingModel.ProductBindingModel;
import shoppinglist.entity.Product;
import shoppinglist.repository.ProductRepository;

import java.util.List;

@Controller
public class ProductController {

    private final ProductRepository productRepository;

    @Autowired
    public ProductController(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    @GetMapping("/")
    public String index(Model model) {
        List<Product> products = this.productRepository.findAll();

        model.addAttribute("view", "product/index")
                .addAttribute("products", products);

        return "base-layout";

    }

    @GetMapping("/create")
    public String create(Model model) {
        Product product = new Product();
        model.addAttribute("view", "product/create")
                .addAttribute("product", product);

        return "base-layout";

    }

    @PostMapping("/create")
    public String createProcess(Model model, ProductBindingModel productBindingModel) {
        Product product = new Product(
                productBindingModel.getPriority(),
                productBindingModel.getName(),
                productBindingModel.getQuantity(),
                productBindingModel.getStatus());
        if (!isFormValid(productBindingModel)) {
            model.addAttribute("product", product);
            model.addAttribute("view", "product/create");
            return "base-layout";

        }

        productRepository.saveAndFlush(product);
        return "redirect:/";

    }

    @GetMapping("/edit/{id}")
    public String edit(Model model, @PathVariable int id) {
        if(!this.productRepository.exists(id)){
            return "redirect:/";
        }
        Product product = this.productRepository.findOne(id);
        model.addAttribute("product", product)
                .addAttribute("view", "product/edit");
        return "base-layout";

    }

    @PostMapping("/edit/{id}")
    public String editProcess(Model model, @PathVariable int id, ProductBindingModel productBindingModel) {

        if(!this.productRepository.exists(id)){
            return "redirect:/";
        }

        Product product = this.productRepository.findOne(id);
        product.setPriority(productBindingModel.getPriority());
        product.setName(productBindingModel.getName());
        product.setQuantity(productBindingModel.getQuantity());
        product.setStatus(productBindingModel.getStatus());

        if(!isFormValid(productBindingModel)){
            model.addAttribute("product", product);
            model.addAttribute("view", "product/edit");
            return "base-layout";
        }

        this.productRepository.saveAndFlush(product);
        return "redirect:/";
    }



    private boolean isFormValid(ProductBindingModel model) {
        return model.getPriority() != null &&
                StringUtils.hasText(model.getName()) &&
                model.getQuantity() != null &&
                StringUtils.hasText(model.getStatus());

    }
}
