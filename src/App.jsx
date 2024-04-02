import "./App.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom'; 
import { NavBar } from './componentes/NavBar';
import { ItemListContainer } from './componentes/ItemListContainer';
import { ItemDetailContainer } from './componentes/ItemDetailContainer';

function App() {
  return (
    <BrowserRouter> 
      <div className="Barra_Superior">
        <NavBar />
      </div>
      <Routes>
        <Route exact path="/" element={<ItemListContainer />} />
        <Route path="/category/:id" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
