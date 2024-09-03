import React, { useEffect, useState } from 'react';
import './Product.css';
import { ProductItem } from '../../models/productModel/product';
import { ProductResponseModel } from '../../models/productModel/productResponseModel';
import { getList } from '../../services/getRequest';

function Product() {
    const [products, setProducts] = useState<ProductItem[]>([]);


    const productsMoc: ProductItem[] = [
        {
            "productId": 1,
            "categoryId": 1,
            "productName": "Chai",
            "unitsInStock": 39,
            "unitPrice": 18.0000
        },
        {
            "productId": 2,
            "categoryId": 1,
            "productName": "Chang",
            "unitsInStock": 17,
            "unitPrice": 19.0000
        },
        {
            "productId": 3,
            "categoryId": 2,
            "productName": "Aniseed Syrup",
            "unitsInStock": 13,
            "unitPrice": 10.0000
        },
        {
            "productId": 4,
            "categoryId": 2,
            "productName": "Chef Anton's Cajun Seasoning",
            "unitsInStock": 53,
            "unitPrice": 22.0000
        }]

    useEffect(() => {
        getList<ProductResponseModel>('/api/products/getall').then((data) => setProducts(data.data))
    }, []);

    return (

        <table className="table">
            <thead>
                <tr>
                    <th scope="col">Ürün İd</th>
                    <th scope="col">Kategori İd</th>
                    <th scope="col">Ürün Adı</th>
                    <th scope="col">Stok Adedi</th>
                    <th scope="col">Fiyat</th>
                </tr>
            </thead>
            <tbody>
                {products.map((item) =>
                    <tr key={item.productId}>
                        <th scope="row">{item.productId}</th>
                        <td>{item.categoryId}</td>
                        <td>{item.productName}</td>
                        <td>{item.unitsInStock}</td>
                        <td>{item.unitPrice}</td>
                    </tr>
                )}
            </tbody>

        </table>

    );
}

export default Product;
