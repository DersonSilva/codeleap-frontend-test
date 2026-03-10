import { Navigate } from "react-router-dom";

type Props = {
  children: React.ReactNode;
};

export function ProtectedRoute({ children }: Props) {
  const username = localStorage.getItem("username");

  if (!username) {
    return <Navigate to="/" replace />;
  }

  return children;
}
