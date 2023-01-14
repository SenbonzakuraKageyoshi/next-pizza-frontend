export interface Product {
    id: number,
    productName: string,
    productDescription: string,
    productCategory: string,
    productImage: string,
    productPrice: number,
    createdAt: string,
	updatedAt: string
};

export interface SelectedProduct {
	id: number,
	productsNumber: number,
	createdAt: string,
	updatedAt: string,
	ProductId: number,
	UserId: number,
	Product: Product
};