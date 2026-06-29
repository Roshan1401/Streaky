import { useEffect, useState, useRef } from "react";
import { GithubIcon, TwitterIcon } from "../../assets/Icons";
import image from "../../assets/devstreakLogo.svg";
import { supabase } from "../../lib/supabase.ts";
import { FloatingBox } from "../../components/layout/FloatingBox.tsx";
const Login = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [status, setStatus] = useState<string | null>(null);

  const handleLogin = async (provider: "github" | "twitter") => {
    setStatus(provider);
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: provider,
        options: {
          redirectTo: `${window.location.origin}/leaderboard`,
        },
      });

      if (error) {
        console.error("OAuth error:", error.message);
        setStatus(null);
        return;
      }
    } catch (error) {
      console.error("OAuth exception:", error);
      setStatus(null);
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative grid min-h-screen w-screen grid-cols-2 flex-col items-center justify-center bg-[url('/src/assets/BG1.jpg')] bg-cover bg-center"
    >
      <div className="h-full w-full">
        <div className="flex h-full w-full items-center justify-center">
          <img
            src={image}
            alt="Logo"
            className="h-100 w-100"
            style={{
              filter:
                "invert(100%) sepia(0%) saturate(0%) brightness(200%) contrast(100%)",
            }}
          />
          <span className="text-[120px] font-bold text-white">Streaky</span>
        </div>
      </div>
      <div className="flex h-full w-full flex-col items-center justify-center gap-4">
        <div className="flex w-full flex-col items-center justify-center text-center">
          <img
            src={image}
            alt="Logo"
            className="h-40 w-40"
            style={{
              filter:
                "invert(100%) sepia(0%) saturate(0%) brightness(200%) contrast(100%)",
            }}
          />
          <div className="flex flex-col items-center gap-3 text-4xl font-bold tracking-normal text-white">
            <span className="">Code every day</span>
            <span className="">Track your streaks.</span>
          </div>
          <button
            onClick={() => handleLogin("github")}
            className="mt-16 flex w-[400px] cursor-pointer items-center gap-2 rounded-full bg-white px-4 py-2 hover:bg-neutral-300"
          >
            <GithubIcon className="size-8" />
            <span className="w-full text-center text-lg font-semibold">
              Sign in with GitHub
            </span>
          </button>
        </div>
      </div>
      <FloatingBox containerRef={containerRef} speed={1} />
    </div>
  );
};

export default Login;
