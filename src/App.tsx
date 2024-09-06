import './App.css';
import Navi from './components/navi/Navi';
import Category from './components/category/Category';
import Product from './components/product/Product';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <Navi />
        <div className="row">
          <div className='col-md-3' >
            <Category />
          </div>
          <div className='col-md-9' >
            <Product />
          </div>
        </div>
      </div>
    </Provider>

  );
}

export default App;
