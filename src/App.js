import { Route, Routes } from 'react-router-dom';
import './App.css';
import RecipePage from './pages/RecipePage/recipepage.components';
import IngredientsPage from './pages/IngredientsPage/ingredients-page.components';
import Navbar from './components/Navbar/navbar.components';
import Contact from './components/Contact/contact.component';
import Help from './components/Help/help.component';
<<<<<<< HEAD
import CartPage from './pages/CartPage/cartpage.component';
=======
import CartPage from './pages/CartPage/CartPage.components';
>>>>>>> ada364d132c1b213b00746a916d5a7deeda84a5f
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<RecipePage/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/help' element={<Help/>}/>
        <Route path='/ingredients/:ingredientName' element={<IngredientsPage/>} />
<<<<<<< HEAD
        <Route path='/cart' element={<CartPage/>} />
=======
        <Route path='/cart' element={<CartPage/>}/>
>>>>>>> ada364d132c1b213b00746a916d5a7deeda84a5f
      </Routes>
    </div>
  );
}

export default App;
