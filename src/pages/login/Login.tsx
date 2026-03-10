import { useState } from "react";
import { Input } from "../../components/ui/Input/Input";
import { Button } from "../../components/ui/Button/Button";
import { useNavigate } from "react-router-dom";
import { useToast } from "../../hooks/UseToast"; // ✅ import do hook

export default function Login() {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();
  const { showToast } = useToast(); // ✅ pega o showToast do hook

  const isDisabled = !username.trim();

  function handleEnter() {
    if (isDisabled) return;

    const name = username.trim();
    localStorage.setItem("username", name);

    showToast("Login successful!", "success"); // ✅ toast aqui

    navigate("/feed");
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="bg-white w-full max-w-md sm:max-w-lg p-6 sm:p-8 rounded-lg shadow">
        <h1 className="text-lg sm:text-xl font-bold mb-6">
          Welcome to CodeLeap network!
        </h1>

        <div className="flex flex-col gap-4">
          <div>
            <label className="text-sm font-medium block mb-1">
              Please enter your username
            </label>

            <Input
              placeholder="John Doe"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="flex justify-end">
            <Button onClick={handleEnter} disabled={isDisabled}>
              ENTER
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
