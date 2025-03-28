import React, { useEffect, useState } from 'react';
import './Category.css';
import { CategoryItem } from '../../models/categoryModel/category';
import { useAppDispatch, useAppSelector } from '../../store';
import { changeActiveCategory, fetchCategoryList } from '../../features/categorySlice';
import { fetchList, getAllbyCategoryid } from '../../features/productSlice';

function Category() {
    const [categories, setCategories] = useState<CategoryItem[] | any>([]);
    const [currentCategory, setCurrentCategory] = useState<CategoryItem>();
    const dispatch = useAppDispatch()

    const categoryList = useAppSelector((state) => state.category.value)

    useEffect(() => {

        setCategories(categoryList.data)

    }, [categoryList]);

    useEffect(() => {
        dispatch(fetchCategoryList());
    }, []);

    const activeCategory = (category: CategoryItem | null) => {
        if (!category) return " active";
        return currentCategory?.categoryId === category.categoryId ? " active" : '';
    };

    const allActiveElement = currentCategory ? " " : " active";

    return (
        <div className="Category">
            <ul className="list-group">

                <li
                    onClick={() => {
                        dispatch(fetchList());
                        setCurrentCategory(undefined);
                        dispatch(changeActiveCategory(0));
                    }}
                    className={"list-group-item" + allActiveElement}>
                    Tüm Ürünler
                </li>
                {categoryList.data.length > 0 && !categoryList.loading ? (
                    categories.map((item: CategoryItem) =>
                        <li
                            onClick={() => {
                                setCurrentCategory(item);
                                dispatch(getAllbyCategoryid(item.categoryId));
                                dispatch(changeActiveCategory(item.categoryId));
                            }}
                            key={item.categoryId}
                            className={"list-group-item" + activeCategory(item)}
                        >
                            {item.categoryName}
                        </li>
                    )
                ) : (
                    (
                        categoryList.error ?
                            <tr>
                                <td colSpan={5}>{categoryList.error} </td>
                            </tr> :
                            <tr>
                                <td colSpan={5}>Yükleniyor...</td>
                            </tr>

                    )
                )}
            </ul>
        </div >
    );
}

export default Category;
