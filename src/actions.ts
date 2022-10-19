import { useState, useEffect } from "react";
import type { Movie, Character } from "./types";

// Zostawiam poprawiony plik z tym, że jest on nie używane ze względu na to że uzyłem w projekcie reduxa

async function fetchMethod<T>(
  input: RequestInfo | URL,
  init?: RequestInit
): Promise<T> {
  const res = await fetch(input);
  return await res.json();
}

const endpoint = "https://swapi.dev/api";

const regex = /(\d+)\/$/;
export const getUrlID = (link: string) => {
  const match = link.match(regex);
  return match && match[1];
};

export const useMovies = () => {
  // Tutaj można do tego pola dodaćjeszcze custom hooksa który będzie przyjmować generyczny typ i podawana będzie wartośc defaultowa
  const [response, setResponse] = useState<Movie[]>([]);

  useEffect(() => {
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
  fetchMethod<{ results: Movie }>(`${endpoint}/films/${id}`).then(
    ({ results }) => {
      setResponse(results);
    }
  );
  return response;
};

export const useCharacters = () => {
  const [response, setResponse] = useState<Character[]>([]);
  fetchMethod<{ results: Character[] }>(`${endpoint}/people/`).then(
    ({ results }) => {
      setResponse(results);
    }
  );
  return response;
};

export const useCharacter = (id: string) => {
  const [response, setResponse] = useState<Character>();
  fetchMethod<{ results: Character }>(`${endpoint}/people/${id}`).then(
    ({ results }) => {
      setResponse(results);
    }
  );
  return response;
};
