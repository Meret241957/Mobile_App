import { View, Text } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

// TODO (Member 3): build this screen. Reads the id like Lab 2, Task 10.2.
export default function UserPublicProfileScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();

  return (
    <View className="flex-1 items-center justify-center bg-bg">
      <Text className="text-2xl font-bold text-primary">User Profile</Text>
      <Text className="mt-2 text-muted">id: {id}</Text>
    </View>
  );
}
