import { Text,
  View,
  TextInput,
  Button,
  FlatList,
  ScrollView,
  StyleSheet,
  Dimensions,} from 'react-native';

  import { ThemedView } from '@/components/ThemedView';
  import { ThemedText } from '@/components/ThemedText';
  
  const moviesData = [
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
  
  export default function MovieListLanding() {
    return (
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <ThemedView style={styles.container}>
          <ThemedText type="title" style={styles.heading}>
            🎬 Movie List
          </ThemedText>
  
          <TextInput
            style={styles.input}
            placeholder="Search movies... (static only)"
            editable={false}
          />
  
          <Button title="Search" onPress={() => {}} disabled />
  
          <FlatList
            data={moviesData}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <ThemedText style={styles.movieItem}>{item.title}</ThemedText>
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