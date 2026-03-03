interface ProductDetails {
    productId: number;
    productTitle: string;
    productPrice: number;
    productDescription?: string;
}

const sampleProduct: ProductDetails = {
    productId: 9942,
    productTitle: 'Wireless Mouse',
    productPrice: 45.99,
    productDescription: 'A smart, easy to use product'
}