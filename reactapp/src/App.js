import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import HomeScreen from './screens/HomeScreen';
import CatalogueScreen from './screens/CatalogueScreen';
import BasketScreen from './screens/BasketScreen';
import AccountScreen from './screens/AccountScreen';
import WishListScreen from './screens/WishListScreen';
import Navbar from './components/Navbar';
import IdentitySubScreen from './screens/IdentitySubScreen'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<HomeScreen/>}/>
          <Route path='/cataloguescreen' element={<CatalogueScreen/>}/>
          <Route path='/basketscreen' element={<BasketScreen/>}/>
          <Route path='/accountscreen' element={<AccountScreen/>}>
            <Route path="/accountscreen/identitysubscreen" element={<IdentitySubScreen/>}/>
          </Route>
          <Route path='/wishlistscreen' element={<WishListScreen/>}/>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
