import { useEffect, useState } from "react";
import "./Cart.css";
import { CategoryItem } from "../../models/categoryModel/category";
import { useAppDispatch, useAppSelector } from "../../store";

function Cart() {
  const cartItems = useAppSelector((state) => state.cart.cartItems);

  const [categories, setCategories] = useState<CategoryItem[] | any>([]);
  const [currentCategory, setCurrentCategory] = useState<CategoryItem>();
  const dispatch = useAppDispatch();

  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);

  return (
    <div className="Category">
      <li className="nav-item dropdown">
        <a
          className="nav-link dropdown-toggle"
          href="#"
          id="navbarDropdown"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Sepet
        </a>
        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
          {cartItems && cartItems.length > 0 ? (
            cartItems.map((item) => (
              <li key={item.product.productId}>
                <a
                  className="dropdown-item"
                  href="#"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: "0.5rem",
                  }}
                >
                  <p> {item.product.productName} </p> <p> {item.quantity} </p>
                </a>
              </li>
            ))
          ) : (
            <>Something else here nono </>
          )}
        </ul>
      </li>
    </div>
  );
}

export default Cart;
