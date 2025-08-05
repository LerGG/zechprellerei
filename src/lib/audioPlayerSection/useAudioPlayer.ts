"use client";

import { useRef, useState } from "react";

export const useAudioPlayer = () => {
  const [shouldLoad, setShouldLoad] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const actionPlay = () => {
    if (!shouldLoad) {
      setShouldLoad(true);
    }
  };
  return {
    actionPlay,
    audioRef,
    shouldLoad,
  };
};
