import React, { useEffect, useState } from "react";
import "./Product.css";
import { ProductItem } from "../../models/productModel/product";
import { useAppDispatch, useAppSelector } from "../../store";
import { fetchList, getAllbyCategoryid } from "../../features/productSlice";
import { VatAdded } from "../customComponents/CustomFunctions";
import { FilterSearch } from "../customComponents/TsCustomFunction";
import { AddToCartCopm } from "../customComponents/AddToCartComp";
import { CartItem } from "../../models/cartItem/cartItem";

function Product() {
	const [products, setProducts] = useState<ProductItem[] | any>([]);
	const [searchText, setSearchText] = useState<string>("");
	const dispatch = useAppDispatch();
	const goToCart = AddToCartCopm();

	const productList = useAppSelector((state) => state.product);
	const activeCategory = useAppSelector(
		(state) => state.category.activeCategory
	);
	const cartItems = useAppSelector((state) => state.cart.cartItems);

	const productsMoc: ProductItem[] = [
		{
			productId: 1,
			categoryId: 1,
			productName: "Chai",
			unitsInStock: 39,
			unitPrice: 18.0,
		},
		{
			productId: 2,
			categoryId: 1,
			productName: "Chang",
			unitsInStock: 17,
			unitPrice: 19.0,
		},
		{
			productId: 3,
			categoryId: 2,
			productName: "Aniseed Syrup",
			unitsInStock: 13,
			unitPrice: 10.0,
		},
		{
			productId: 4,
			categoryId: 2,
			productName: "Chef Anton's Cajun Seasoning",
			unitsInStock: 53,
			unitPrice: 22.0,
		},
	];

	useEffect(() => {
		if (searchText && searchText.length > 1) {
			const filterArr = FilterSearch(products, searchText);
			setProducts(filterArr);
		} else {
			if (activeCategory) {
				dispatch(getAllbyCategoryid(activeCategory));
			} else {
				dispatch(fetchList());
			}
		}
	}, [searchText]);

	const changeSearchValue = (value: string) => {
		setSearchText(value.trim());
	};

	useEffect(() => {
		dispatch(fetchList());
	}, []);

	useEffect(() => {
		setProducts(productList.data);
	}, [productList]);

	const searchInfolabel = !searchText ? " d-none" : "";

	return (
		<>
			<div className="my-3 ">
				<label className="form-label">Ürün Ara</label>
				<input
					onChange={(val) => changeSearchValue(val.target.value)}
					type="text"
					className="form-control"
					placeholder="Arama ifadesi giriniz..."
					id="filterText"
				/>
			</div>

			<div className={"alert alert-success my-3 " + searchInfolabel}>
				{searchText + " aradınız."}
			</div>

			<table className="table">
				<thead>
					<tr>
						<th scope="col">Ürün İd</th>
						<th scope="col">Kategori İd</th>
						<th scope="col">Ürün Adı</th>
						<th scope="col">Fiyat</th>
						<th scope="col">KDV'li Fiyat</th>
						<th scope="col">Stok Adedi</th>
						<th style={{ textAlign: "center" }} scope="col">
							İşlemler
						</th>
					</tr>
				</thead>
				<tbody>
					{productList.data.length > 0 ? (
						products.map((product: ProductItem) => {
							const cartItem = cartItems?.find(
								(item: CartItem) => item.product.productId === product.productId
							);

							return (
								<tr key={product.productId}>
									<td>{product.productId}</td>
									<td>{product.categoryId}</td>
									<td>{product.productName}</td>
									<td>{product.unitPrice}</td>
									<td>{VatAdded(product.unitPrice)}</td>
									<td>{product.unitsInStock}</td>
									<td>
										{cartItem && cartItem.quantity > 0
											? `${cartItem.quantity} adet sepette`
											: "Sepette yok"}
									</td>
									<td
										style={{
											textAlign: "center",
											display: "flex",
											gap: "0.3rem",
										}}
									>
										<button
											onClick={() => goToCart(product, true)}
											type="button"
											className="btn btn-success"
										>
											Ekle
										</button>
										<button
											onClick={() => goToCart(product, false)}
											type="button"
											className="btn btn-warning"
											disabled={
												cartItem && cartItem.quantity > 0 ? false : true
											}
										>
											Sil
										</button>
									</td>
								</tr>
							);
						})
					) : productList.error ? (
						<tr>
							<td colSpan={5}>{productList.error} </td>
						</tr>
					) : (
						<tr>
							<td colSpan={5}>Yükleniyor...</td>
						</tr>
					)}
				</tbody>
			</table>
		</>
	);
}

export default Product;
