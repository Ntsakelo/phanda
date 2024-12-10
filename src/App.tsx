import React from 'react';
import logo from './logo.svg';
import { Routes,Route } from 'react-router-dom';
import Home from './views/Home';
import Category from './views/Categories/Category';
import Photography from './components/Categories/Photography';
import InteriorDesign from './components/Categories/Interior Design';
import Profile from './views/Profile';
import SellerOnboarding from './views/SellerOnboarding';
import PersonalDetails from './components/SellerOnboarding/Personal Details';
import ProfessionalDetails from './components/SellerOnboarding/Professional Details';
import AccountSecurity from './components/SellerOnboarding/Account Security';
import Uploads from './components/SellerOnboarding/Uploads';
import Register from './views/Authenticate/Register';
import Login from './views/Authenticate/Login';


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
         <Route path="/onboarding/seller" element={<SellerOnboarding />}>
             <Route path="/onboarding/seller/personal_info" element={<PersonalDetails />} />
             <Route path="/onboarding/seller/professional_info" element={<ProfessionalDetails />} />
             <Route path="/onboarding/seller/uploads" element={<Uploads />} />
         </Route>
         <Route path='/user/register' element={<Register />} />
         <Route path="/user/login" element={<Login />} /> 
       </Routes>    
    </div>
  );
}

export default App;
