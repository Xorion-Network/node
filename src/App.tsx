import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Community from './pages/Community';
//import Developers from './pages/Developers';
import UseCases from './components/Usecases/Usecases';
import BlogNewsroom from './components/Blogs/Blogs';
import DevPortal from './pages/Developers';
import Ecosystem from './components/Ecosystem/Ecosystem';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/community" element={<Community />} />
        <Route path="/developers" element={<DevPortal />} />
        
        <Route path="/usecases" element={<UseCases />} />  
        <Route path='/blogs' element={<BlogNewsroom/>}></Route>
        <Route path='/ecosystem' element={<Ecosystem />} />
      </Routes>
    </Router>
  );
}

export default App;
