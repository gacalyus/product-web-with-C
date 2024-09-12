import React, { useEffect, useState } from 'react';
import './Category.css';
import { CategoryItem } from '../../models/categoryModel/category';
import { getList } from '../../services/getRequest';
import { ListResponseModel } from '../../models/listResponseModel';
import { useAppDispatch, useAppSelector } from '../../store';
import { fetchCategoryList } from '../../features/categorySlice';

function Category() {
    const [categories, setCategories] = useState<CategoryItem[] | any>([]);
    const [currentCategory, setCurrentCategory] = useState<CategoryItem>();
    const dispatch = useAppDispatch()

    const categoryList = useAppSelector((state) => state.category)

    useEffect(() => {
        setCategories(categoryList.data)
    }, [categoryList]);

    useEffect(() => {
        dispatch(fetchCategoryList());
    }, []);

    const activeCategory = (category: CategoryItem) => {
        return currentCategory?.categoryId === category.categoryId ? " active" : '';
    };
    return (
        <div className="Category">
            <ul className="list-group">

                {categoryList.data.length > 0 && !categoryList.loading ? (
                    categories.map((item: CategoryItem) =>
                        <li
                            onClick={() => setCurrentCategory(item)}
                            key={item.categoryId}
                            className={"list-group-item" + activeCategory(item)}
                        >
                            {item.categoryName}
                        </li>
                    )
                ) : (
                    <tr>
                        <td colSpan={5}>Yükleniyor...</td>
                    </tr>
                )}
            </ul>
            <p> {currentCategory?.categoryName} kategorisi şeçili.</p>
        </div >
    );
}

export default Category;
