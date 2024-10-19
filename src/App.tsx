import React from 'react';
import logo from './logo.svg';
import { Routes,Route } from 'react-router-dom';
import Home from './views/Home';
import Category from './views/Categories/Category';
import Photography from './components/Categories/Photography';
import InteriorDesign from './components/Categories/Interior Design';
import Profile from './views/Profile';

function App() {
  return (
    <div className="App">
       <Routes>
         <Route path='/' element={<Home />} />
         <Route path="/categories" element={<Category />}>
             <Route path="/categories/photography" element={<Photography />} />
             <Route path="/categories/interior-design" element={<InteriorDesign />} />
         </Route>
         <Route path="/:category/:username" element={<Profile />} />
       </Routes>    
    </div>
  );
}

export default App;
