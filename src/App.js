import { Route, Routes } from 'react-router-dom';
import './App.css';
import RecipePage from './pages/RecipePage/recipepage.components';
import IngredientsPage from './pages/IngredientsPage/ingredients-page.components';
import Navbar from './components/Navbar/navbar.components';
import Contact from './components/Contact/contact.component';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<RecipePage/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/ingredients/:ingredientName' element={<IngredientsPage/>} />
      </Routes>
    </div>
  );
}

export default App;
