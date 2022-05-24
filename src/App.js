import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import AuthProvider from "./hoc/AuthProvider";
import RequireAuth from "./hoc/RequireAuth";
import About from "./pages/About";
import Blog from "./pages/Blog";
import CreatePost from "./pages/CreatePost";
import EditPost from "./pages/EditPost";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Single from "./pages/Single";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path='posts' element={<Blog />} />
          <Route path='posts/:id' element={<Single />} />
          <Route path='posts/:id/edit' element={<EditPost />} />
          <Route
            path='posts/new'
            element={
              <RequireAuth>
                <CreatePost />
              </RequireAuth>
            }
          />
          <Route path='about/*' element={<About />}>
            <Route path='contacts' element={<p>Our contacts</p>} />
            <Route path='team' element={<p>Our team</p>} />
          </Route>
          <Route path='about-us' element={<Navigate to='/about' replace />} />
          <Route path='login' element={<Login />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
