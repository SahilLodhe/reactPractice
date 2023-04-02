import './App.css'
import { Home } from "./pages/Home"
import { Contact } from "./pages/Contact"
import { Menu } from "./pages/Menu"
import { BrowserRouter as Router, Routes, Route,Link } from "react-router-dom" // router determines which specific parts of website you want to change
import { Navbar } from './pages/Navbar'
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/menu" element={<Menu />} />
           <Route path="/contact" element={<Contact />} /> 
           <Route path="*" element={<h1>PAGE NOT FOUND</h1>} /> {/* this the disaply content for the rest of the pages */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
