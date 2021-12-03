import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import FAQs from "./components/pages/FAQs";
import Portfolio from "./components/pages/Portfolio";
// import Faqs from "./components/pages/FAQs";
//imporst for pages
import Example from "./components/pages/Example";
import ToDoList from './components/pages/ToDoList';

function App() {
  return (
    <Router> {/*routes*/}
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/about" element={<About />}></Route>
        <Route exact path="/contact" element={<Contact />}></Route>
        <Route exact path="/faqs" element={<FAQs />}></Route>
        <Route exact path="/portfolio" element={<Portfolio />}></Route>
        <Route exact path="/example" element={<Example />}></Route>
        <Route exact path="/to-do-list" element={<ToDoList />}></Route>
      </Routes>
    </Router>
  );
}

export default App;