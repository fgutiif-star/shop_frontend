import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import { Navigate } from "react-router-dom";


function App() {
  const routes = [
    {path: "/", element: <Navigate to="/register" />},
    {path: "/register", element: <RegisterPage />},
    {path: "/login", element: <LoginPage />},
  ]

  return (
    <Router>
      <Routes>
        {routes.map(item => (
          <Route path={item.path} element={item.path} />
        ))}
      </Routes>
    </Router>
  );
}

export default App;
