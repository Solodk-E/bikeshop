import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import HomeScreen from './screens/HomeScreen';
import CatalogueScreen from './screens/CatalogueScreen';
import BasketScreen from './screens/BasketScreen';
import HistoryScreen from './screens/HistoryScreen';
import WishListScreen from './screens/WishListScreen';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomeScreen/>}/>
          <Route path='/cataloguescreen' element={<CatalogueScreen/>}/>
          <Route path='/basketscreen' element={<BasketScreen/>}/>
          <Route path='/historyscreen' element={<HistoryScreen/>}/>
          <Route path='/wishlistscreen' element={<WishListScreen/>}/>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
