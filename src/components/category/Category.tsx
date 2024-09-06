import React, { useEffect, useState } from 'react';
import './Category.css';
import { CategoryItem } from '../../models/categoryModel/category';
import { getList } from '../../services/getRequest';
import { ListResponseModel } from '../../models/listResponseModel';

function Category() {
    const [categories, setCategories] = useState<CategoryItem[]>([]);
    const [currentCategory, setCurrentCategory] = useState<CategoryItem>();


    useEffect(() => {
        getList<ListResponseModel<CategoryItem>>('/api/category/getall').then((data) => setCategories(data.data))
    }, []);

    return (
        <div className="Category">
            <ul className="list-group">
                {categories.map((item) =>
                    <li
                        onClick={() => setCurrentCategory(item)}
                        key={item.categoryId}
                        className="list-group-item"
                    >
                        {item.categoryName}
                    </li>
                )}
            </ul>
        </div >
    );
}

export default Category;
