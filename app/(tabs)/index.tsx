import {
  TextInput,
  Button,
  FlatList,
  ScrollView,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { useRouter } from 'expo-router';
import { useMovies } from '@/hooks/MovieContext';

export default function MovieListLanding() {
  const { movies } = useMovies();
  const router = useRouter();

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <ThemedView style={styles.container}>
        <ThemedText type="title" style={styles.heading}>
          🎬 Movie List
        </ThemedText>

        <TextInput
          style={styles.input}
          placeholder="Search movies... (static)"
          editable={false}
        />
        <Button title="Search" onPress={() => {}} disabled />

        <FlatList
          data={movies}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => router.push({ pathname: "/movie/[id]", params: { id: item.id } })}>
              <ThemedText style={styles.movieItem}>{item.title}</ThemedText>
            </TouchableOpacity>
          )}
          scrollEnabled={false}
        />
      </ThemedView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  container: {
    padding: 20,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    minHeight: Dimensions.get('window').height,
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    alignSelf: 'center',
  },
  input: {
    height: 40,
    borderColor: '#aaa',
    borderWidth: 1,
    borderRadius: 6,
    paddingHorizontal: 10,
    marginBottom: 10,
    backgroundColor: '#f0f0f0',
  },
  movieItem: {
    fontSize: 18,
    paddingVertical: 10,
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
  },
});
