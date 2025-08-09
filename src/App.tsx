import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

// Layout
import MainLayout from "./layouts/MainLayout";

// Page components
import Home from "./pages/Home";
import About from "./pages/About";
import Properties from "./pages/Properties";
import PropertyDetails from "./pages/PropertyDetails";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound"; // 404 page
const routes = [
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/properties", element: <Properties /> },
  { path: "/properties/:id", element: <PropertyDetails /> },
  { path: "/services", element: <Services /> },
  { path: "/contact", element: <Contact /> },
];

function App() {
  return (
    <Router>
      <Routes>
        {/* Main layout wrapper */}
        <Route element={<MainLayout />}>
          {routes.map(({ path, element }, index) => (
            <Route key={index} path={path} element={element} />
          ))}
        </Route>

        {/* 404 route (outside layout) */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;