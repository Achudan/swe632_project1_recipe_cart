import { Route, Routes } from 'react-router-dom';
import './App.css';
import RecipePage from './pages/RecipePage/recipepage.components';
import IngredientsPage from './pages/IngredientsPage/ingredients-page.components';

function App() {
  return (
    <div className="App">
      {/* <Homepage /> */}
      {/* <Header currentUser={user}/> */}
      <Routes>
        <Route path='/' element={<RecipePage/>}/>
        <Route path='/ingredients/:ingredientName' element={<IngredientsPage/>} />
      </Routes>
    </div>
  );
}

export default App;
