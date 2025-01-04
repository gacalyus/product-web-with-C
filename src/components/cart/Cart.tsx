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
          <li>
            <a className="dropdown-item" href="#">
              Something else here
            </a>
          </li>
        </ul>
      </li>
    </div>
  );
}

export default Cart;
