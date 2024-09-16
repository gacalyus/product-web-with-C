import './App.css';
import Navi from './components/navi/Navi';
import { Provider } from 'react-redux';
import store from './store';
import RootComponent from './RootComponent';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFoundPage from './components/NotFoundPage';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <RootComponent />
      </BrowserRouter>
    </Provider>

  );
}

export default App; 