import MainPage from "../components/MainPage/MainPage";
import { Routes, Route } from "react-router-dom";
import SecondPage from "../components/SecondPage/SecondPage";
import './App.css';
import Layout from "../components/Layout/Layout";
import ProjectItem from "../components/ProjectsItem/ProjectItem";
import Architecture from "../components/Architecture/Architecture";
import AboutUs from "../components/AboutUs/AboutUs";
import ArchitectureItem from "../components/ArchitectureItem/ArchitectureItem";
import Res from "../components/Res/Res";
import ResearchItem from "../components/ResearchItem/ResearchItem";
import CookiesPolicy from "../components/CookiesPolicy/CookiesPolicy";

function App() {

  return (
   
    <Routes>
       <Route path="/" element={<Layout />}>
       <Route index element={ <MainPage /> } />
       <Route path='galery' element={ <SecondPage /> } />
       <Route path='galery/:id' element={ <ProjectItem /> } />
       <Route path='architecture/:id' element={ <ArchitectureItem/>} />
       <Route path='architecture' element={ <Architecture /> } />
       <Route path="research" element={<Res />} />
       <Route path="research/:id" element={<ResearchItem />} />
       <Route path='about_us' element={ <AboutUs /> } />
       <Route path="privacy" element={ <CookiesPolicy /> } />
       </Route>
      
    </Routes>
  
  
);
}
export default App;
