import { PlayersProps } from "@/types";

/**
 * Generates a list of movie players with their respective titles and source URLs.
 * Each player is constructed using the provided movie ID.
 *
 * @param {string | number} id - The ID of the movie to be embedded in the player URLs.
 * @param {number} [startAt] - The start position in seconds to be embedded in the player URLs. Optional.
 * @returns {PlayersProps[]} - An array of objects, each containing
 * the title of the player and the corresponding source URL.
 */
export const getMoviePlayers = (id: string | number, startAt?: number): PlayersProps[] => {
  return [
    {
      title: "Server 1",
      source: `https://vidsrc.cc/v2/embed/movie/${id}?autoPlay=false`,
      recommended: true,
      fast: true,
      ads: true,
      resumable: true,
    },
    {
      title: "Server 2",
      source: `https://player.videasy.net/movie/${id}`,
      recommended: true,
      fast: true,
      ads: true,
      resumable: true,
    },
    {
      title: "Server 3",
      source: `https://kisskh.wiki/embed/movie?tmdb=${id}`,
      recommended: true,
      fast: true,
      ads: true,
      resumable: true,
    },
    {
      title: "Server 4",
      source: `https://vidfast.pro/movie/${id}?chromecast=false`,
      fast: true,
      ads: true,
    },
    {
      title: "Server 5",
      source: `https://moviesapi.club/movie/${id}`,
      ads: true,
    },
    {
      title: "Server 6",
      source: `https://vidsrc.cc/v3/embed/movie/${id}?autoPlay=false`,
      ads: true,
    },
    {
      title: "Server 7",
      source: `https://www.vidking.net/embed/movie/${id}?autoPlay=true`,
      ads: true,
    },
        {
      title: "Server 8",
      source: `https://player.vidplus.to/embed/movie/${id}?autoplay=true&poster=false&title=true&watchparty=false&chromecast=false&servericon=true&setting=true&pip=true&primarycolor=FF0000&secondarycolor=FFFFFF&iconcolor=FFFFFF&font=Roboto&fontcolor=FFFFFF&fontsize=20&opacity=0.5`,
      fast: true,
      ads: true,
    },
    {
      title: "Server 9",
      source: `https://vidlink.pro/movie/${id}?player=jw&title=false&primaryColor=006fee&secondaryColor=a2a2a2&iconColor=eefdec&autoplay=false&startAt=${startAt || ""}`,
      fast: true,
      ads: true,
      resumable: true,
    },
  ];
};

/**
 * Generates a list of TV show players with their respective titles and source URLs.
 * Each player is constructed using the provided TV show ID, season, and episode.
 *
 * @param {string | number} id - The ID of the TV show to be embedded in the player URLs.
 * @param {string | number} [season] - The season number of the TV show episode to be embedded.
 * @param {string | number} [episode] - The episode number of the TV show episode to be embedded.
 * @param {number} [startAt] - The start position in seconds to be embedded in the player URLs. Optional.
 * @returns {PlayersProps[]} - An array of objects, each containing
 * the title of the player and the corresponding source URL.
 */
export const getTvShowPlayers = (
  id: string | number,
  season: number,
  episode: number,
  startAt?: number,
): PlayersProps[] => {
  return [
    {
      title: "Server 1",
      source: `https://vidsrc.cc/v2/embed/tv/${id}/${season}/${episode}?autoPlay=false`,
      recommended: true,
      fast: true,
      ads: true,
      resumable: true,
    },
    {
      title: "Server 2",
      source: `https://player.videasy.net/tv/${id}/${season}/${episode}`,
      recommended: true,
      fast: true,
      ads: true,
      resumable: true,
    },
    {
      title: "Server 3",
      source: `https://kisskh.wiki/embed/tv?tmdb=${id}&season=${season}&episode=${episode}`,
      recommended: true,
      fast: true,
      ads: true,
      resumable: true,
    },
    {
      title: "Server 4",
      source: `https://moviesapi.club/tv/${id}-${season}-${episode}`,
      fast: true,
      ads: true,
    },
    {
      title: "Server 5",
      source: `https://vidfast.pro/tv/${id}/${season}/${episode}?autoPlay=true&chromecast=false`,
      ads: true,
    },
    {
      title: "Server 6",
      source: `https://vidsrc.cc/v3/embed/tv/${id}/${season}/${episode}?autoPlay=false`,
      ads: true,
    },
    {
      title: "Server 7",
      source: `https://www.vidking.net/embed/tv/${id}/${season}/${episode}?autoPlay=true`,
      ads: true,
    },
    {
      title: "Server 8",
      source: `https://player.vidplus.to/embed/tv/${id}/${season}/${episode}?autoplay=true&poster=false&title=true&watchparty=false&chromecast=false&servericon=true&setting=true&pip=true&primarycolor=FF0000&secondarycolor=FFFFFF&iconcolor=FFFFFF&font=Roboto&fontcolor=FFFFFF&fontsize=20&opacity=0.5`,
      fast: true,
      ads: true,
    },
    {
      title: "Server 9",
      source: `https://vidlink.pro/tv/${id}/${season}/${episode}?player=jw&title=false&primaryColor=f5a524&secondaryColor=a2a2a2&iconColor=eefdec&autoplay=false&startAt=${startAt || ""}`,
      fast: true,
      ads: true,
      resumable: true,
    },
  ];
};
