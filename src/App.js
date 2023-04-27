import "./App.css";
import Navbar from "./components/Navbar";
import LoginPage from "./components/LoginPage";
import UploadAssignment from "./components/UploadAssignment";
import EnrollmentForm from "./components/EnrollmentForm";
import SideBar from "./components/SideBar";
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import HomePage from "./pages/HomePage";
import Enrollment from "./pages/Enrollment";
import TempPage from "./pages/TempPage"

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/callback" element={<LoginPage />} />
      <Route
        path="/enroll"
        element={
          <ProtectedRoute>
            <Enrollment />
          </ProtectedRoute>
        }
      />
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <HomePage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/temp"
        element={
          <ProtectedRoute>
            <TempPage />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}
