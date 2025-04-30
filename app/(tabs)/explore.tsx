import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { router } from 'expo-router';
import { Pressable } from 'react-native';

export default function ExploreScreen() {
  return (
    <ThemedView>
      <ThemedText type="title">Explore</ThemedText>
      <Pressable onPress={() => router.push({ pathname: "/movie/[id]", params: { id: "123" } })}>
        <ThemedText>Go to Movie 123</ThemedText>
      </Pressable>
    </ThemedView>
  );
}