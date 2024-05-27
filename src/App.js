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
import Policies from "./pages/Policies";
import TermsAndConditions from "./pages/TermsAndConditions";
import KS3Info from './pages/KS3Info';
import KS4Info from './pages/KS4Info';
import KSCareers from './components/KSCareers';
import Leicester from './pages/Leicester';
function App() {


  return (
    <BrowserRouter basename='/'>
      <Routes>
        <Route path="/" element={<Layout/>}>
        <Route index element = {<Home/>}></Route>
        <Route forceRefresh={true}  path='/about' element= {<About/>}></Route>
        <Route forceRefresh={true} path='/contact' element= {<Contact/>}></Route>
        <Route forceRefresh={true} path='/our_team' element= {<Team/>}></Route>
        <Route forceRefresh={true} path='/vacancies' element= {<Vacances/>}></Route>
        <Route forceRefresh={true} path="/education_provision" element={<Education/>}/>
        <Route forceRefresh={true} path='/residential_provision' element= {<ResidentialProvision/>}></Route>
        <Route forceRefresh={true} path='/policies' element= {<Policies/>}></Route>
        <Route forceRefresh={true} path='/leicester' element= {<Leicester/>}></Route>
        <Route forceRefresh={true} path='/ks3' element= {<KS3Info/>}></Route>
        <Route forceRefresh={true} path='/ks4' element= {<KS4Info/>}></Route>
        <Route forceRefresh={true} path='/ksCareer' element= {<KSCareers/>}></Route>
        <Route forceRefresh={true} path='/terms_and_conditions' element= {<TermsAndConditions/>}></Route>
        
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
