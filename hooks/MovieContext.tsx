import React, { createContext, useState, useContext } from 'react';

type Movie = {
  id: string;
  title: string;
};

const defaultMovies: Movie[] = [
  { id: '1', title: 'The Shawshank Redemption' },
  { id: '2', title: 'The Godfather' },
  { id: '3', title: 'The Dark Knight' },
  { id: '4', title: 'Pulp Fiction' },
  { id: '5', title: 'Forrest Gump' },
  { id: '6', title: 'Inception' },
  { id: '7', title: 'Fight Club' },
  { id: '8', title: 'The Matrix' },
  { id: '9', title: 'The Lord of the Rings' },
  { id: '10', title: 'Interstellar' },
];

const MovieContext = createContext<{ movies: Movie[] }>({ movies: [] });

export const useMovies = () => useContext(MovieContext);

export const MovieProvider = ({ children }: { children: React.ReactNode }) => {
  const [movies] = useState<Movie[]>(defaultMovies);
  return <MovieContext.Provider value={{ movies }}>{children}</MovieContext.Provider>;
};
