import { View, Text } from 'react-native';
import { router } from 'expo-router';
import { Button } from '@/shared/components/Button';

// TODO (Member 2): Advertiser Home. The buttons below are only for testing navigation.
export default function AdvertiserHomeScreen() {
  return (
    <View className="flex-1 justify-center gap-3 bg-bg p-6">
      <Text className="text-center text-2xl font-bold text-primary">Advertiser Home</Text>
      <Text className="mb-2 text-center text-muted">Coming soon</Text>
      <Button title="Post a property" onPress={() => router.push('/advertiser/post')} />
      <Button title="View user u1" onPress={() => router.push('/user-profile/u1')} />
    </View>
  );
}
