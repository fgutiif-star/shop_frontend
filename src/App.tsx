import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import { Navigate } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";


function App() {
  const routes = [
    {path: "/", element: <Navigate to="/login" />},
    {path: "/register", element: <RegisterPage />},
    {path: "/login", element: <LoginPage />},
  ]
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {routes.map((item, i) => (
            <Route key={i} path={item.path} element={item.element} />
          ))}
        </Routes>
      </Router>
    </AuthProvider>
  );
}
export default App;
