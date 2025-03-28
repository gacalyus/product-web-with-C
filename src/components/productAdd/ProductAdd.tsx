import React, { useEffect, useState } from "react";
import { ProductItem } from "../../models/productModel/product";
import { addProduct } from "../../features/productSlice";
import { useAppDispatch, useAppSelector } from "../../store";
import { showToastMessage } from "../customComponents/Toast";

function ProductAdd() {
  const dispatch = useAppDispatch();
  const [productAddForm, setProductAddForm] = useState<ProductItem>({
    productId: 0,
    categoryId: 0,
    productName: "",
    unitsInStock: 0,
    unitPrice: 0,
  });
  const addState = useAppSelector((state) => state.product);

  const onChangeHandler = (e: any) => {
    setProductAddForm({
      ...productAddForm,
      [e.target.name]: Number(e.target.value),
    });
  };
  const add = (e: any) => {
    dispatch(addProduct(productAddForm));
  };

  return (
    <div className="content">
      <div className="col-md-8">
        <div className="card">
          <div className="card-header">
            <h5 className="title"> Ürün Ekle</h5>
          </div>
          <div className="card-body">
            <form>
              <div className="mb-3">
                <label className="form-label"> Ürün Adı</label>
                <input
                  type="text"
                  name="productName"
                  id="productName"
                  placeholder="Ürün Adı"
                  className="form-control"
                  onChange={(e) => {
                    setProductAddForm({
                      ...productAddForm,
                      productName: e.target.value,
                    });
                  }}
                />
              </div>
              <div className="mb-3">
                <label className="form-label"> Kategori</label>
                <input
                  type="number"
                  name="categoryId"
                  id="categoryId"
                  placeholder="Kategori İd"
                  className="form-control"
                  onChange={onChangeHandler}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Stok Adedi</label>
                <input
                  type="number"
                  name="unitsInStock"
                  id="unitsInStock"
                  placeholder="Stok Adedi"
                  className="form-control"
                  onChange={onChangeHandler}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Birim Fiyat</label>
                <input
                  type="number"
                  name="unitPrice"
                  id="unitPrice"
                  placeholder="Birim Fiyat"
                  className="form-control"
                  onChange={onChangeHandler}
                />
              </div>
            </form>
          </div>
          <div className="card-footer">
            <button onClick={add} type="button" className="btn btn-success">
              Ekle
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductAdd;
