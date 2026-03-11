import { useState } from "react";
import { Input } from "../../components/ui/Input/Input";
import { Button } from "../../components/ui/Button/Button";
import { useNavigate } from "react-router-dom";
import { useToast } from "../../hooks/useToast";

export default function Login() {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();
  const { showToast } = useToast();

  const isDisabled = !username.trim();

  function handleEnter() {
    if (isDisabled) return;

    const name = username.trim();
    localStorage.setItem("username", name);

    showToast("Login successful!", "success");

    navigate("/feed");
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="bg-white w-full max-w-md sm:max-w-lg p-6 sm:p-8 rounded-lg shadow">
        <h1 className="w-[313px] h-[26px] font-bold text-[22px] leading-[26px] tracking-[0%] mb-4">
          Welcome to CodeLeap network!
        </h1>

        <div className="flex flex-col gap-4">
          <div>
            <label className="w-[199px] h-[19px] font-normal text-[16px] leading-[19px] tracking-[0%] block mb-1">
              Please enter your username
            </label>

            <Input
              placeholder="John Doe"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-[452px] h-8 rounded-lg border border-border px-3"
            />
          </div>

          <div className="flex justify-end">
            <Button
              className="bg-brand"
              onClick={handleEnter}
              disabled={isDisabled}
              size="sm"
            >
              ENTER
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
