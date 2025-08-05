"use client";

import { useEffect, useRef } from "react";

export const useAudioPlayer = (url: string) => {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.src = url;
      audioRef.current.load();
    }
  }, [url]);

  return {
    audioRef,
  };
};
