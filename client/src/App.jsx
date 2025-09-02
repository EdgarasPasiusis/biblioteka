import { Routes, Route } from "react-router";
import Nav from "./components/Nav";
import ProtectedRoute2 from "./components/ProtectedRoute2";
import Orders from "./components/Orders";
import LoginForm from "./components/Loginform";
import SignupForm from "./components/SignupForm";
import Home from "./components/Home";
import { UserContextProvider } from "./contexts/UserContext";

function App() {
  return (
    <UserContextProvider>
      <div className="min-h-screen flex flex-col">
        <Nav />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/users/login" element={<LoginForm />} />
            <Route path="/users/signup" element={<SignupForm />} />
            
            <Route element={<ProtectedRoute2 />}>
              <Route path="/orders" element={<Orders />} />
            </Route>
          </Routes>
        </main>
      </div>
    </UserContextProvider>
  );
}

export default App;