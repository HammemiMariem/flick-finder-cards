import { Movie } from "@/components/MovieCard";
import stellarOdysseyPoster from "@/assets/poster-stellar-odyssey.jpg";
import midnightTokyoPoster from "@/assets/poster-midnight-tokyo.jpg";
import lastKingdomPoster from "@/assets/poster-last-kingdom.jpg";
import oceansDepthPoster from "@/assets/poster-oceans-depth.jpg";
import cityShadowsPoster from "@/assets/poster-city-shadows.jpg";
import wildfirePoster from "@/assets/poster-wildfire.jpg";

export const movies: Movie[] = [
  {
    id: "1",
    title: "Stellar Odyssey",
    poster: stellarOdysseyPoster,
    rating: 8.4,
    year: 2024,
    genre: "Sci-Fi Adventure",
    description: "An epic space adventure following a crew of explorers as they journey through uncharted galaxies, discovering ancient civilizations and facing cosmic threats that challenge the very fabric of reality.",
    duration: "2h 28min"
  },
  {
    id: "2",
    title: "Midnight in Tokyo",
    poster: midnightTokyoPoster,
    rating: 7.9,
    year: 2023,
    genre: "Crime Thriller",
    description: "A noir detective thriller set in the neon-lit streets of Tokyo, where a veteran detective must solve a series of mysterious disappearances while navigating the city's underground world.",
    duration: "1h 54min"
  },
  {
    id: "3",
    title: "The Last Kingdom",
    poster: lastKingdomPoster,
    rating: 8.7,
    year: 2024,
    genre: "Fantasy Epic",
    description: "A medieval fantasy epic about a young heir who must reclaim their rightful throne from a tyrannical usurper, gathering allies and mastering ancient magic along the way.",
    duration: "2h 42min"
  },
  {
    id: "4",
    title: "Ocean's Depth",
    poster: oceansDepthPoster,
    rating: 7.6,
    year: 2023,
    genre: "Adventure Thriller",
    description: "An underwater adventure following a marine biologist who discovers a hidden ecosystem in the ocean's deepest trenches, uncovering secrets that could change our understanding of life itself.",
    duration: "2h 15min"
  },
  {
    id: "5",
    title: "City of Shadows",
    poster: cityShadowsPoster,
    rating: 8.1,
    year: 2024,
    genre: "Cyberpunk Action",
    description: "In a dystopian future, a cybernetic detective hunts down rogue AI entities in a sprawling metropolis where the line between human and machine has become dangerously blurred.",
    duration: "2h 8min"
  },
  {
    id: "6",
    title: "Wildfire",
    poster: wildfirePoster,
    rating: 7.3,
    year: 2023,
    genre: "Action Drama",
    description: "When devastating wildfires threaten a small mountain town, a team of elite firefighters must risk everything to save the community while battling both nature's fury and their own demons.",
    duration: "1h 47min"
  }
];