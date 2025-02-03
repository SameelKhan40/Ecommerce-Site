import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { ShopCatergory } from './Pages/ShopCatergory';
import { Cart } from './Pages/Cart';
import { Product } from './Pages/Product';
import Shop from './Pages/Shop';
import { LoginSignup } from './Pages/LoginSignup';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Shop />}/>
        <Route path='/mens' element={<ShopCatergory category = "men"/>}/>
        <Route path='/womens' element={<ShopCatergory category = "women"/>}/>
        <Route path='/kids' element={<ShopCatergory category = "kid"/>}/>
        <Route path = "/product" element={<Product />}/>
        <Route path = ':productId' element={<Product />}/>
        <Route path='/cart' element={<Cart />}/>
        <Route path='/login' element={<LoginSignup />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;