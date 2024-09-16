import Category from "./category/Category";
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
        </div>

    );
}

export default HomePage;
