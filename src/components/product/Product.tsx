import React, { useEffect, useState } from 'react';
import './Product.css';
import { ProductItem } from '../../models/productModel/product';
import { useAppDispatch, useAppSelector } from '../../store';
import { fetchList } from '../../features/productSlice';
// import { add } from '../../features/productSlice';

function Product() {
    const [products, setProducts] = useState<ProductItem[] | any>([]);
    const dispatch = useAppDispatch()

    const productList = useAppSelector((state) => state.product)

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
        dispatch(fetchList())
    }, []);

    useEffect(() => {
        setProducts(productList.data)
    }, [productList]);

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
                {productList.data.length > 0 ? (
                    products.map((product: ProductItem) => (
                        <tr key={product.productId}>
                            <td>{product.productId}</td>
                            <td>{product.categoryId}</td>
                            <td>{product.productName}</td>
                            <td>{product.unitsInStock}</td>
                            <td>{product.unitPrice}</td>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan={5}>Yükleniyor...</td>
                    </tr>
                )}
            </tbody>
        </table>
    );
}

export default Product;
