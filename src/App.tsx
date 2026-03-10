// src/App.tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Login from "./pages/login/Login";
import Feed from "./pages/feed/Feed";
import { ProtectedRoute } from "./routes/ProtectedRoute";
import { ToastProvider } from "./context/ToastProvider";
import { useToast } from "./hooks/UseToast";
import { ToastContainer } from "./components/ui/Toast/ToastContainer";

const queryClient = new QueryClient();

function AppContent() {
  const { toasts } = useToast();

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

      <ToastContainer toasts={toasts} />
    </>
  );
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ToastProvider>
        <AppContent />
      </ToastProvider>
    </QueryClientProvider>
  );
}
