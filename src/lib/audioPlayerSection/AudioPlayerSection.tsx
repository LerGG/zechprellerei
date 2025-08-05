"use client";

import { AUDIO_FORMAT, CLOUD_FRONT_CDN, SONG_NAME } from "@/constants";
import { StyledHeadline } from "../components/StyledHeadline";
import { StyledSection } from "../components/StyledSection";
import { useAudioPlayer } from "./useAudioPlayer";

interface AudioPlayerSectionProps {
  headline: string;
}

export const AudioPlayerSection = ({ headline }: AudioPlayerSectionProps) => {
  const songUrl = `${CLOUD_FRONT_CDN}/${SONG_NAME}${AUDIO_FORMAT}`;
  const { audioRef } = useAudioPlayer(songUrl);
  return (
    <StyledSection>
      <StyledHeadline text={headline} />
      <audio controls className="w-full" ref={audioRef} preload="none">
        Your browser does not support the audio element.
      </audio>
    </StyledSection>
  );
};
