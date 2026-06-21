class Product {

    private int productId;
    private String productName;
    private String category;

    public Product(int productId, String productName, String category) {
        this.productId = productId;
        this.productName = productName;
        this.category = category;
    }

    public int getProductId() {
        return productId;
    }

    public void display() {
        System.out.println("Product ID : " + productId);
        System.out.println("Product Name : " + productName);
        System.out.println("Category : " + category);
    }
}

class SearchService {

    public Product linearSearch(Product[] products, int targetId) {

        for (Product product : products) {
            if (product.getProductId() == targetId) {
                return product;
            }
        }

        return null;
    }

    public Product binarySearch(Product[] products, int targetId) {

        int left = 0;
        int right = products.length - 1;

        while (left <= right) {

            int mid = (left + right) / 2;

            if (products[mid].getProductId() == targetId) {
                return products[mid];
            }

            if (products[mid].getProductId() < targetId) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return null;
    }
}

public class ProductSearchSystem {

    public static void main(String[] args) {

        Product[] products = {
                new Product(1001, "Dell Inspiron", "Laptop"),
                new Product(1002, "Samsung Galaxy", "Mobile"),
                new Product(1003, "Sony Headphones", "Audio"),
                new Product(1004, "Apple Watch", "Wearable"),
                new Product(1005, "Logitech Mouse", "Accessories")
        };

        SearchService service = new SearchService();

        int searchId = 1004;

        System.out.println("LINEAR SEARCH RESULT");
        Product linearResult = service.linearSearch(products, searchId);

        if (linearResult != null)
            linearResult.display();
        else
            System.out.println("Product Not Found");

        System.out.println("\nBINARY SEARCH RESULT");
        Product binaryResult = service.binarySearch(products, searchId);

        if (binaryResult != null)
            binaryResult.display();
        else
            System.out.println("Product Not Found");
    }
}