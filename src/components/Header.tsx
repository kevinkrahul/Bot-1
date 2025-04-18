"use client";
import React, { useEffect, useState } from "react";
import { Sun, Moon, Music2 } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";
import { AnimatedShinyText } from "./ui/animated-shiny-text";
import Link from "next/link";

const Header = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <div className="sticky top-0 bg-inherit min-h-[7vh] flex justify-between items-center">
      <Link href={"/"}>
        <div className="flex items-center gap-2 md:gap-3 md:ml-6 p-2">
          <div className="relative">
            <Music2 />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse" />
          </div>
          <div className="flex flex-col">
            <h1 className="" style={{ fontSize: "clamp(15px,4vw,24px)" }}>
              Music Buddy
            </h1>
            <p className="ml-5" style={{ fontSize: "clamp(9px,2vw,15px)" }}>
              Powered by Agentic AI
            </p>
          </div>
        </div>
      </Link>
      <div className="flex items-center gap-1 md:gap-3 mr-2 md:mr-6">
        <div>
          <Link href={"/feedback"}>
            <Button variant={"outline"} className="max-sm:text-xs">
              <AnimatedShinyText shimmerWidth={100}>Feedback</AnimatedShinyText>
            </Button>
          </Link>
        </div>
        <div>
          {mounted && (
            <Button
              variant={"outline"}
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            >
              {theme === "dark" ? (
                <Sun className="w-6 h-6" />
              ) : (
                <Moon className="w-6 h-6" />
              )}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
