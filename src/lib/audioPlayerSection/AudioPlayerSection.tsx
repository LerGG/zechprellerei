import { AUDIO_FORMAT, CLOUD_FRONT_CDN, SONG_NAME } from "@/constants";
import { StyledHeadline } from "../components/StyledHeadline";
import { StyledSection } from "../components/StyledSection";

interface AudioPlayerSectionProps {
  headline: string;
}

export const AudioPlayerSection = ({ headline }: AudioPlayerSectionProps) => {
  const songUrl = `${CLOUD_FRONT_CDN}/${SONG_NAME}${AUDIO_FORMAT}`;
  return (
    <StyledSection>
      <StyledHeadline text={headline} />
      <div className="w-full sm:w-1/2">
        <audio controls className="w-full">
          <source src={songUrl} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </div>
    </StyledSection>
  );
};
