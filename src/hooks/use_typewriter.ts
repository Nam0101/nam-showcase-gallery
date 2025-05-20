import { useEffect, useState } from "react";

export function useTypewriter(
  text: string,
  speed: number = 60,
  active: boolean = true,
  onDone?: () => void
) {
  const [displayed, setDisplayed] = useState("");
  useEffect(() => {
    if (!active) {
      setDisplayed("");
      return;
    }
    setDisplayed("");
    const interval = setInterval(() => {
      setDisplayed((prev) => {
        if (prev.length < text.length) {
          return prev + text[prev.length];
        } else {
          clearInterval(interval);
          if (onDone) onDone();
          return prev;
        }
      });
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed, active, onDone]);
  return displayed;
} 