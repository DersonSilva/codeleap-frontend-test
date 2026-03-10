// src/App.tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import Feed from "./pages/feed/Feed";
import { ProtectedRoute } from "./routes/ProtectedRoute";
import { ToastProvider } from "./context/ToastProvider";
import { useToast } from "./hooks/UseToast";
import { ToastContainer } from "./components/ui/Toast/ToastContainer";

function AppContent() {
  const { toasts } = useToast(); // ✅ pega os toasts do contexto

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/feed"
            element={
              <ProtectedRoute>
                <Feed />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
      <ToastContainer toasts={toasts} /> {/* ✅ renderiza os toasts */}
    </>
  );
}

function App() {
  return (
    <ToastProvider>
      <AppContent />
    </ToastProvider>
  );
}

export default App;
