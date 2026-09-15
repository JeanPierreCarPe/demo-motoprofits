"use client";

import { useEffect, useState } from "react";

function formatTime(totalSeconds: number) {
  const clamped = Math.max(0, totalSeconds);
  const hours = Math.floor(clamped / 3600);
  const minutes = Math.floor((clamped % 3600) / 60);
  const seconds = Math.floor(clamped % 60);
  const pad = (n: number) => n.toString().padStart(2, "0");
  return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}

export function Countdown({ seconds, className }: { seconds: number; className?: string }) {
  const [remaining, setRemaining] = useState(seconds);

  useEffect(() => {
    const endTime = Date.now() + seconds * 1000;
    const tick = () => {
      setRemaining(Math.max(0, Math.round((endTime - Date.now()) / 1000)));
    };
    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, [seconds]);

  return <span className={className}>{formatTime(remaining)}</span>;
}
