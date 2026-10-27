import { View, Text } from 'react-native';
import { router } from 'expo-router';
import { Button } from '@/shared/components/Button';

// TODO (Member 1): User Home. The buttons below are only for testing navigation.
export default function HomeScreen() {
  return (
    <View className="flex-1 justify-center gap-3 bg-bg p-6">
      <Text className="text-center text-2xl font-bold text-primary">User Home</Text>
      <Text className="mb-2 text-center text-muted">Coming soon</Text>
      <Button title="For Rent" onPress={() => router.push('/rent')} />
      <Button title="For Sale" onPress={() => router.push('/buy')} />
      <Button title="View advertiser a1" onPress={() => router.push('/advertiser-profile/a1')} />
    </View>
  );
}
