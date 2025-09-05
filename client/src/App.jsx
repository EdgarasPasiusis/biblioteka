import { Routes, Route } from "react-router";
import Nav from "./components/Nav";
import LoginForm from "./components/Loginform";
import SignupForm from "./components/SignupForm";
import HomePage from "./components/HomePage";
import BookCard from "./components/BookCard";
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
            <Route path="/books/:id" element={<BookCard />} />
          </Routes>
        </main>
      </div>
    </UserContextProvider>
  );
}

export default App;
