"use client";

import { AUDIO_FORMAT, CLOUD_FRONT_CDN, SONG_NAME } from "@/constants";
import { StyledHeadline } from "../components/StyledHeadline";
import { StyledSection } from "../components/StyledSection";
import { useAudioPlayer } from "./useAudioPlayer";

interface AudioPlayerSectionProps {
  headline: string;
}

export const AudioPlayerSection = ({ headline }: AudioPlayerSectionProps) => {
  const { audioRef, actionPlay, shouldLoad } = useAudioPlayer();
  const songUrl = `${CLOUD_FRONT_CDN}/${SONG_NAME}${AUDIO_FORMAT}`;
  return (
    <StyledSection>
      <StyledHeadline text={headline} />
      <div className="w-full sm:w-1/2">
        <audio
          controls
          className="w-full"
          ref={audioRef}
          onPlay={actionPlay}
          preload="none"
        >
          {shouldLoad && <source src={songUrl} type="audio/mpeg" />}
          Your browser does not support the audio element.
        </audio>
      </div>
    </StyledSection>
  );
};
