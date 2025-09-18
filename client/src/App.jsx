import { Routes, Route } from "react-router";
import Nav from "./components/Nav";
import LoginForm from "./components/Loginform";
import SignupForm from "./components/SignupForm";
import HomePage from "./components/HomePage";
import BookDetail from "./components/BookDetail";
import AdminPanelPage from "./components/AdminPanelPage";
import ReservationsPage from "./components/ReservationsPage";
import FavoritesPage from "./components/FavoritesPage";
import { UserContextProvider } from "./contexts/UserContext";
import CategoryManagmentPage from "./components/CategoryManagmentPage";
import UserManagmentPage from "./components/UserManagmentPage";
import BookManagmentPage from "./components/BookManagmentPage";
import ReservationManagmentPage from "./components/ReservationManagmentPage";

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
            <Route path="/admin" element={<AdminPanelPage />} />
            <Route path="/reservations" element={<ReservationsPage />} />
            <Route path="/favorites" element={<FavoritesPage />} />
            <Route path="/admin/genres" element={<CategoryManagmentPage />} />
            <Route path="/admin/users" element={<UserManagmentPage />} />
            <Route path="/admin/books" element={<BookManagmentPage />} />
            <Route path="/admin/reservations" element={<ReservationManagmentPage />} />
          </Routes>
        </main>
      </div>
    </UserContextProvider>
  );
}

export default App;
