import { EpisodeNumber } from "../types/episodeNumber";
import { Season } from "../types/season";

export interface Episode {
    season: Season;
    episode: EpisodeNumber;
    title: string;
    titleJP: string;
    titleJPRomaji: string;
    description: string;
    originalAirDate: string;
    englishAirDate: string;
    url: string;
}