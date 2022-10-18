import { useState, useEffect } from "react";
import type { Movie, Character } from "./types";

/**
 * TODO: dodaj typy
 */
async function fetchMethod <T>(input: RequestInfo | URL, init?: RequestInit): Promise<T> {
  const res = await fetch(input);
  return await res.json();
}

// docs: https://swapi.dev/
const endpoint = "https://swapi.dev/api";

const regex = /(\d+)\/$/;
export const getUrlID = (link: string) => {
  const match = link.match(regex);
  return match && match[1];
};

export const useMovies = () => {
  const [response, setResponse] = useState<Movie[]>([]);

  useEffect(() => {
    /**
     * TODO: moze da się jakoś lepiej pobierać dane :)
     */
    fetchMethod<{ results: Movie[] }>(`${endpoint}/films/`).then(
      ({ results }) => {
        setResponse(results);
      }
    );
  }, []);

  return response;
};

export const useMovie = (id: string) => {
  const [response, setResponse] = useState<Movie>();
  /**
   * TODO: ${endpoint}/films/${id}
   */
   fetchMethod<{ results: Movie }>(`${endpoint}/films/${id}`).then(
    ({ results }) => {
      setResponse(results);
    }
  );
  return response;
};

export const useCharacters = () => {
  /**
   * TODO: ${endpoint}/people
   */
};

export const useCharacter = () => {
  /**
   * TODO: ${endpoint}/people/${id}
   */
};
