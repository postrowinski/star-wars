/**
 * TODO: uzupełnij brakujące typy
 */
export type Review = {
  content: string;
  userName: string;
  rating: number;
};

export type Movie = {
  title: string;
  episode_id: number;
  opening_crawl: string;
  characters: string[];
  url: string;
  created: string;
  edited: string;
  director: string;
  planets: string[];
  producer: string;
  release_date: string;
  species: string[];
  starships: string[];
  vehicles: string[];
  reviews: Review[];
};

export type Character = {
  name: string;
  height: number;
  mass: string;
  birth_year: string;
  films: string[];
  url: string;
  created: string;
  edited: string;
  eye_color: string;
  gender: string;
  hair_color: string;
  homeworld: string;
  skin_color: string;
  species: string[];
  starships: string[];
  reviews: Review[];
};
