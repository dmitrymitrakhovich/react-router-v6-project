import { Link, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Homepage from "./pages/Homepage";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <header>
        <Link to='/'>Home</Link>
        <Link to='/posts'>Blog</Link>
        <Link to='/about'>About</Link>
      </header>

      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/posts' element={<Blog />} />
        <Route path='/about' element={<About />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
