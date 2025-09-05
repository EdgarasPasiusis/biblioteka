import { Routes, Route } from "react-router";
import Nav from "./components/Nav";
import LoginForm from "./components/Loginform";
import SignupForm from "./components/SignupForm";
import HomePage from "./components/HomePage";
import BookDetail from "./components/BookDetail";
import AdminPanel from "./components/AdminPanel";
import ReservationPanel from "./components/ReservationPanel";
import Favorites from "./components/Favorites";
import { UserContextProvider } from "./contexts/UserContext";

function App() {
  return (
    <UserContextProvider>
      <div className="min-h-screen flex flex-col">
        <Nav />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/auth/login" element={<LoginForm />} />
            <Route path="/auth/signup" element={<SignupForm />} />
            <Route path="/books/:id" element={<BookDetail />} />
            <Route path="/admin" element={<AdminPanel />} />
            <Route path="/reservations" element={<ReservationPanel />} />
            <Route path="/favorites" element={<Favorites />} />
          </Routes>
        </main>
      </div>
    </UserContextProvider>
  );
}

export default App;
