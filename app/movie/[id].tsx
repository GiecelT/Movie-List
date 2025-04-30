import { useLocalSearchParams } from 'expo-router';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { useMovies } from '@/hooks/MovieContext';

export default function MovieDetail() {
  const { id } = useLocalSearchParams();
  const { movies } = useMovies();
  const movie = movies.find((m) => m.id === id);

  if (!movie) {
    return (
      <ThemedView>
        <ThemedText>Movie not found.</ThemedText>
      </ThemedView>
    );
  }

  return (
    <ThemedView>
      <ThemedText type="title">{movie.title}</ThemedText>
      <ThemedText>Details will go here.</ThemedText>
    </ThemedView>
  );
}
