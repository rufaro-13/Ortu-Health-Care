import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import About from './pages/About';
import Contact from './pages/Contacts';
import Education from "./pages/Education";
import Team from "./pages/Team"
import Vacances from "./pages/Vacances"
import ResidentialProvision from './pages/ResidentialProvision';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
        <Route index element = {<Home/>}></Route>
        <Route  path='/about' element= {<About/>}></Route>
        <Route  path='/contact' element= {<Contact/>}></Route>
        <Route  path='/our_team' element= {<Team/>}></Route>
        <Route  path='/vacances' element= {<Vacances/>}></Route>
        <Route path="/education_provision" element={<Education/>}/>
        <Route  path='/residential_provision' element= {<ResidentialProvision/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
