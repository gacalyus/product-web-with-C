import Category from "./category/Category";
import Toast from "./customComponents/Toast";
import Product from "./product/Product";




function HomePage() {
    return (
        <div className="row">
            <div className='col-md-3' >
                <Category />
            </div>
            <div className='col-md-9' >
                <Product />
            </div>
            <Toast />
        </div>

    );
}

export default HomePage;
